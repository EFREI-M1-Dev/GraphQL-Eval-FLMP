import { useNavigate } from 'react-router-dom'
import Icon from '../../atoms/Icon'
import styles from './styles.module.scss'

type ArticleCardProps = {
  id?: number
  article: {
    title?: string
    desc?: string
    date?: string
    duration?: string
    likeQuantity?: number
    commentQuantity?: number
    author?: {
      label?: string
      img?: string
    }
  }
}

const ArticleCard = ({
    id,
    article
}: ArticleCardProps) => {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`article/${id}`)} className={styles.card}>
      <div className={styles.article_image}>
        <img alt="article image" src={article.author?.img} />
      </div>
      <div className={styles.author}>
        <img
          alt="picture profil"
          src="https://miro.medium.com/v2/resize:fill:40:40/1*mosLZsYBO_ih_9Mv-SBUEQ.png"
        />
        <a href="">{article.author?.label}</a>
      </div>
      <h3>{article.title}</h3>
      <p>{article.desc}</p>
      <div className={styles.infos}>
        <span>{article.duration}</span>•<span>{article.date}</span>
      </div>
      <div className={styles.actions}>
        <ul>
          <li>
            <Icon name="clap" color="#6B6B6B" />
            <span>{article.likeQuantity}</span>
          </li>
          <li>
            <Icon name="chat_bubble" color="#6B6B6B" />
            <span>{article.commentQuantity}</span>
          </li>
        </ul>
        <Icon name="save" color="#6B6B6B" />
      </div>
    </div>
  )
}

export default ArticleCard
