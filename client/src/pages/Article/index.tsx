import styles from './styles.module.scss'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/organisms/Navbar'
import {
  Article,
  useCreateLikeMutation,
  useGetArticleQuery,
  useGetNumberLikeQuery,
} from '../../generated/graphql.tsx'
import { useEffect, useState } from 'react'
import moment from 'moment/moment'
import Icon from '../../components/atoms/Icon'
import { decodedToken } from '../../hooks/decodedToken.tsx'
import Button from '../../components/atoms/Button'

const ArticlePage = () => {
  const { id } = useParams()
  const [nbrLikes, setNbrLikes] = useState<number | null>(null)

  const { loading, data, refetch } = useGetArticleQuery({
    variables: { id: parseInt(id || '') },
  })
  const [article, setArticle] = useState<Article>()
  const idUserConnected = decodedToken()
  const currentUser = idUserConnected === article?.author?.id

  const [createLike] = useCreateLikeMutation()

  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    if (data) {
      setArticle(data?.article as Article)
    }
  }, [loading, data])

  const getLikesNbr = useGetNumberLikeQuery({
    variables: { id: parseInt(id || '') },
  })

  useEffect(() => {
    if (getLikesNbr.data) {
      setNbrLikes(getLikesNbr.data.getArticleLikesCount)
    }
  }, [getLikesNbr.loading, getLikesNbr.data])

  const handleClickStateLike = async () => {
    try {
      const { data } = await createLike({
        variables: { id: parseInt(id || '') },
      })
      if (data?.createLike) {
        getLikesNbr.refetch()
      }
    } catch (err) {
      console.error('Error posting article:', err)
    }
  }

  return (
    <div>
      <Navbar />

      <div className={styles.article}>
        <div className={styles.width}>
          {!currentUser ? (
            <></>
          ) : (
            <div className={styles.userlogged__bar}>
              <p>Vous êtes l'auteur de cet article, vous pouvez :</p>
              <div className={styles.userlogged}>
                <Button widthAuto underline>
                  <Icon name="write" color="#242424" />
                  <span>Modifier</span>
                </Button>
                <Button widthAuto underline>
                  <Icon name="trash" color="#242424" />
                  <span>Supprimer</span>
                </Button>
              </div>
            </div>
          )}
          <div className="user-logged"></div>
          <div className={styles.head}>
            <img
              src={
                article?.image || 'http://localhost:3000/static/article-1.png'
              }
              alt={article?.title || ''}
            />

            <h1>{article?.title}</h1>

            <div className={styles.head__user}>
              <img
                src={
                  article?.author?.avatar ||
                  'http://localhost:3000/static/avatar-1.png'
                }
                alt={article?.author?.username + "'s Logo"}
              />
              <div className={styles.head__details}>
                <p>{article?.author?.username}</p>
                <p>
                  <span>3 min read</span>
                  &nbsp;·&nbsp;
                  <span>
                    {moment(article?.createdAt).format('MMM D, YYYY')}
                  </span>
                </p>
              </div>
            </div>

            <div className={styles.misc}>
              <div onClick={handleClickStateLike}>
                <Icon name="clap" color="#6B6B6B" />
                <span>{nbrLikes}</span>
              </div>

              <div>
                <Icon name="chat_bubble" color="#6B6B6B" />
                <span>4</span>
              </div>
            </div>

            <div className={styles.content}>{article?.content}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlePage
