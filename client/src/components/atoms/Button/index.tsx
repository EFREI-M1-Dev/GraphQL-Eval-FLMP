import styles from './button.module.scss'

type ButtonProps = {
  children: string
  color?: string
  onClick?: () => void
  className?: string
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${className ? className : ''}`}
    >
      {children}
    </button>
  )
}

export default Button
