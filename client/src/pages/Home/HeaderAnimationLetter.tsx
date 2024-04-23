import { useState, useEffect } from 'react'
import styles from './HeaderAnimationLetter.module.scss'

type HeaderAnimationLetterProps = {
  className: string
}

type GridCell = boolean

type GridRow = GridCell[]

const HeaderAnimationLetter = ({ className }: HeaderAnimationLetterProps) => {
  const generateInitialGrid = (): GridRow[] => {
    const initialGrid: GridRow[] = []
    for (let i = 0; i < 16; i++) {
      const row: GridRow = []
      for (let j = 0; j < 22; j++) {
        row.push(Math.random() < 0.2)
      }
      initialGrid.push(row)
    }
    return initialGrid
  }

  const [grid, setGrid] = useState<GridRow[]>(generateInitialGrid())

  const generateLetter = () => {
    const randomRow = Math.floor(Math.random() * 16)
    const randomCol = Math.floor(Math.random() * 22)
    const newGrid = grid.map((row) => [...row])
    newGrid[randomRow][randomCol] = true
    setGrid(newGrid)

    const timeout = Math.random() * 9000 + 1000
    setTimeout(() => {
      clearLetter(randomRow, randomCol)
    }, timeout)
  }

  const clearLetter = (row: number, col: number) => {
    const newGrid = grid.map((r) => [...r])
    newGrid[row][col] = false
    setGrid(newGrid)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      generateLetter()
    }, Math.random() * 200 + 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`${styles.grid} ${className}`}>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`${styles.cell} ${cell ? styles.active : ''}`}
            >
              M
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default HeaderAnimationLetter
