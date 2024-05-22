import { useNavigate } from 'react-router-dom'
import Icon from '../../atoms/Icon'
import styles from './styles.module.scss'

type ArticleCardProps = {
  id: number
  title: string
  desc: string
  date: string
  likeQuantity: number
  commentQuantity: number
  duration: string
  author: {
    label: string
    img: string
  }
}

const ArticleCard = ({
  id,
  title,
  desc,
  date,
  likeQuantity,
  commentQuantity,
  duration,
  author,
}: ArticleCardProps) => {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`article/${id}`)} className={styles.card}>
      <div className={styles.article_image}>
        <img alt="article image" src={author?.img} />
      </div>
      <div className={styles.author}>
        <img
          alt="picture profil"
          src="https://miro.medium.com/v2/resize:fill:40:40/1*mosLZsYBO_ih_9Mv-SBUEQ.png"
        />
        <a href="">{author?.label}</a>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className={styles.infos}>
        <span>{duration}</span>•<span>{date}</span>
      </div>
      <div className={styles.actions}>
        <ul>
          <li>
            <Icon name="clap" color="#6B6B6B" />
            <span>{likeQuantity}</span>
          </li>
          <li>
            <Icon name="chat_bubble" color="#6B6B6B" />
            <span>{commentQuantity}</span>
          </li>
        </ul>
        <Icon name="save" color="#6B6B6B" />
      </div>
    </div>
  )
}

export default ArticleCard
