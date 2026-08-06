import PyPDF2
from pathlib import Path

pdf_path = Path(__file__).resolve().parent.parent / 'Vyamit_AI_INNOVISTA_2k26_pdf.pdf'
if not pdf_path.exists():
    raise FileNotFoundError(pdf_path)

reader = PyPDF2.PdfReader(pdf_path.open('rb'))
print('pages', len(reader.pages))
for idx, page in enumerate(reader.pages, start=1):
    text = page.extract_text() or ''
    print(f'--- PAGE {idx} ---')
    print(text[:4000])
