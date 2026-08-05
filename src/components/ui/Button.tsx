import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'dark' | 'text'
  icon?: ReactNode
  className?: string
} & (AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>)

export function Button({ children, variant = 'primary', icon, className = '', ...props }: ButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${className}`
  if ('href' in props && props.href) {
    return <a className={classes} {...props}>{children}{icon}</a>
  }
  return <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>{children}{icon}</button>
}
