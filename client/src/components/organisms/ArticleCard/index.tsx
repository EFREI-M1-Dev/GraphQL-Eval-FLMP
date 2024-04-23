import Icon from '../../atoms/Icon'
import styles from './styles.module.scss'

const ArticleCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.article_image}>
        <img
          alt="article image"
          src="https://miro.medium.com/v2/resize:fit:1358/1*8ahtIIqHbHUNoA-gyk4ALQ.jpeg"
        />
      </div>
      <div className={styles.author}>
        <img
          alt="picture profil"
          src="https://miro.medium.com/v2/resize:fill:40:40/1*mosLZsYBO_ih_9Mv-SBUEQ.png"
        />
        <a href="">Alternative penguin</a>
      </div>
      <h3>Title</h3>
      <p>Description</p>
      <div className={styles.infos}>
        <span>13min read</span>•<span>mar 12, 2024</span>
      </div>
      <div className={styles.actions}>
        <ul>
          <li>
            <Icon name="clap" color="#6B6B6B" />
            <span>3.7K</span>
          </li>
          <li>
            <Icon name="chat_bubble" color="#6B6B6B" />
            <span>65</span>
          </li>
        </ul>
        <Icon name="save" color="#6B6B6B" />
      </div>
    </div>
  )
}

export default ArticleCard
