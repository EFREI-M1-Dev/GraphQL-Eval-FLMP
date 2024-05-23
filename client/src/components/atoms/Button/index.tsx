import classNames from 'classnames'
import styles from './button.module.scss'

type ButtonProps = {
  children: string
  size?: 'sm' | 'md'
  color?: 'black' | 'green'
  active?: boolean
  onClick?: () => void
  className?: string
}

const Button = ({
  children,
  size = 'md',
  color = 'black',
  active = false,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, className, {
        [styles[`size-${size}`]]: size,
        [styles[`color-${color}`]]: color,
        [styles.active]: active,
      })}
    >
      {children}
    </button>
  )
}

export default Button
