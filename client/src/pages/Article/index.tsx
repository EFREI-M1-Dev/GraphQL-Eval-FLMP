import { useParams } from 'react-router-dom'

const Article = () => {
  const { id } = useParams()

  return (
    <div>
      <span>TEST {id}</span>
    </div>
  )
}

export default Article
