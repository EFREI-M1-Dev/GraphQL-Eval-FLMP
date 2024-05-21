import styles from './button.module.scss'

type ButtonProps = {
  children: string
  color?: string
  className?: string
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${className ? className : ''}`}>
      {children}
    </button>
  )
}

export default Button
