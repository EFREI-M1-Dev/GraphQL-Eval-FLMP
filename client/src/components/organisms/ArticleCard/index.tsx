import { useNavigate } from 'react-router-dom'
import Icon from '../../atoms/Icon'
import styles from './styles.module.scss'
import { Article } from '../../../generated/graphql'
import moment from 'moment'

const ArticleCard = ({
  id,
  title,
  author,
  content,
  createdAt,
  image,
}: Article) => {
  const navigate = useNavigate()

  return (
    <div
      id={id.toString()}
      onClick={() => navigate(`article/${id}`)}
      className={styles.card}
    >
      <div className={styles.article_image}>
        <img alt="article image" src={image || ''} />
      </div>
      <div className={styles.author}>
        <img alt="picture profil" src={author?.avatar || ''} />
        <a href="">{author?.username}</a>
      </div>
      <h3>{title}</h3>
      <p>{content?.substring(0, 160)}..</p>
      <div className={styles.infos}>
        <span>3 min</span>•<span>{moment(createdAt).format('DD/MM/YY')}</span>
      </div>
      <div className={styles.actions}>
        <ul>
          <li>
            <Icon name="clap" color="#6B6B6B" />
            <span>29</span>
          </li>
          <li>
            <Icon name="chat_bubble" color="#6B6B6B" />
            <span>4</span>
          </li>
        </ul>
        <Icon name="save" color="#6B6B6B" />
      </div>
    </div>
  )
}

export default ArticleCard
