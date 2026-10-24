import { mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const downloads = path.join(root, 'public', 'downloads')

async function newestRelease(folder, extension) {
  const directory = path.join(downloads, folder)
  await mkdir(directory, { recursive: true })
  const entries = await readdir(directory)
  const candidates = await Promise.all(entries.filter((name) => name.toLowerCase().endsWith(extension)).map(async (name) => ({ name, info: await stat(path.join(directory, name)) })))
  return candidates.sort((a, b) => b.info.mtimeMs - a.info.mtimeMs)[0]
}

function sizeLabel(bytes) {
  if (!bytes) return 'Release pending'
  return `${(bytes / 1024 / 1024).toFixed(bytes > 100 * 1024 * 1024 ? 0 : 1)} MB`
}

async function checksum(entry, folder) {
  if (!entry) return undefined
  const file = await readFile(path.join(downloads, folder, entry.name))
  return createHash('sha256').update(file).digest('hex')
}

const apk = await newestRelease('android', '.apk')
const ipa = await newestRelease('ios', '.ipa')
const apkChecksum = await checksum(apk, 'android')
const releaseDate = (entry) => entry ? new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }).format(entry.info.mtime) : 'Official release'
const data = {
  android: apk ? { available: true, file: apk.name, version: '1.0.0', releaseDate: releaseDate(apk), sizeLabel: sizeLabel(apk.info.size), architecture: 'Android 64-bit (ARM64)', checksum: apkChecksum } : { available: false, version: '1.0.0', releaseDate: 'Official release', sizeLabel: 'ARM64 APK', architecture: 'Android 64-bit (ARM64)' },
  ios: ipa ? { available: true, file: ipa.name, version: '1.0.0', releaseDate: releaseDate(ipa), sizeLabel: sizeLabel(ipa.info.size) } : { available: false },
}
await writeFile(path.join(downloads, 'release.json'), `${JSON.stringify(data, null, 2)}\n`)
