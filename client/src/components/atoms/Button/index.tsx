import styles from './button.module.scss'

type ButtonProps = {
  children: string
  color?: string
}

const Button = ({ children }: ButtonProps) => {
  return <button className={styles.button}>{children}</button>
}

export default Button
