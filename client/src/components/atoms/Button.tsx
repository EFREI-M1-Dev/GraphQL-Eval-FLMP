import React, { useState } from 'react'

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
      <button style={{ backgroundColor: color }} onClick={toogleMode}>
        {children}
      </button>
    </>
  )
}

export default Button
