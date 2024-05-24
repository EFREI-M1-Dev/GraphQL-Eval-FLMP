import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import moment from 'moment/moment'

/* components */
import Navbar from '../../components/organisms/Navbar'
import Icon from '../../components/atoms/Icon'
import Button from '../../components/atoms/Button'

/* graphql */
import {
  Article,
  useCreateLikeMutation,
  useDeleteLikeMutation,
  useGetArticleQuery,
  useGetHasUserLikedArticleQuery,
  useGetNumberLikeQuery,
  useRemoveArticleMutation,
} from '../../generated/graphql.tsx'

/* hooks */
import { decodedToken } from '../../hooks/decodedToken.tsx'

const ArticlePage = () => {
  const { id } = useParams()
  const [nbrLikes, setNbrLikes] = useState<number | null>(null)
  const [userHasLikedArticle, setUserHasLikedArticle] = useState<
    boolean | null
  >(null)
  const navigate = useNavigate()

  const { loading, data, refetch } = useGetArticleQuery({
    variables: { id: parseInt(id || '') },
  })
  const [article, setArticle] = useState<Article>()
  const idUserConnected = decodedToken()
  const currentUser = idUserConnected === article?.author?.id

  const [createLike] = useCreateLikeMutation()
  const [deleteLike] = useDeleteLikeMutation()
  const [deleteArticle] = useRemoveArticleMutation()

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

  const getUserLiked = useGetHasUserLikedArticleQuery({
    variables: { id: parseInt(id || '') },
  })

  useEffect(() => {
    if (getLikesNbr.data) {
      setNbrLikes(getLikesNbr.data.getArticleLikesCount)
    }
  }, [getLikesNbr.loading, getLikesNbr.data])

  useEffect(() => {
    if (getUserLiked.data) {
      setUserHasLikedArticle(getUserLiked.data.hasUserLikedArticle)
    }
  }, [getUserLiked.loading, getUserLiked.data])

  const handleClickStateLike = async () => {
    console.log(userHasLikedArticle)
    if (userHasLikedArticle) {
      try {
        const { data } = await deleteLike({
          variables: { id: parseInt(id || '') },
        })
        if (data?.removeLike) {
          getLikesNbr.refetch()
          getUserLiked.refetch()
        }
      } catch (err) {
        console.error('Error liked article:', err)
      }
    } else {
      try {
        const { data } = await createLike({
          variables: { id: parseInt(id || '') },
        })
        if (data?.createLike) {
          getLikesNbr.refetch()
          getUserLiked.refetch()
        }
      } catch (err) {
        console.error('Error liked article:', err)
      }
    }
  }

  const handleDeleteArticle = async () => {
    try {
      const { data } = await deleteArticle({
        variables: { id: parseInt(id || '') },
      })
      console.log(data)
      if (data?.removeArticle) {
        navigate('/')
      }
    } catch (err) {
      console.error('Error delete article:', err)
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
                <Button widthAuto underline onClick={handleDeleteArticle}>
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
              <div
                className={userHasLikedArticle ? styles.article_liked : ''}
                onClick={handleClickStateLike}
              >
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
