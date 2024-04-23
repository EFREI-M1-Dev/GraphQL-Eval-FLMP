import React, { useState } from 'react'
import styles from './button.module.scss'

type ButtonProps = {
  children: string
  color?: string
}

const Button = ({ children, color = 'blue' }: ButtonProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const toogleMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      {darkMode ? 'dark' : 'white'}
      <button className={styles.button} onClick={toogleMode}>
        {children}
      </button>
    </>
  )
}

export default Button
