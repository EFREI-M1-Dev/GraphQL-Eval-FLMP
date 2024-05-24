import styles from './styles.module.scss'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/organisms/Navbar'
import { Article, useGetArticleQuery } from '../../generated/graphql.tsx'
import { useEffect, useState } from 'react'
import moment from 'moment/moment'
import Icon from '../../components/atoms/Icon'
import {decodedToken} from "../../hooks/decodedToken.tsx";
import Button from "../../components/atoms/Button";

const ArticlePage = () => {
  const { id } = useParams()
  const { loading, data, refetch } = useGetArticleQuery({
    variables: { id: parseInt(id || '') },
  })
  const [article, setArticle] = useState<Article>()
  const idUserConnected = decodedToken();
  const currentUser = idUserConnected === article?.author?.id;

  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    if (data) {
      setArticle(data?.article as Article)
    }
  }, [loading, data])

  return (
    <div>
      <Navbar />

      <div className={styles.article}>
        <div className={styles.width}>
          {
            !currentUser ? <></> :
                <div className={styles.userlogged__bar}>
                  <p>
                    Vous êtes l'auteur de cet article, vous pouvez :
                  </p>
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
          }
          <div className="user-logged" >
          </div>
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
              <Icon name="clap" color="#6B6B6B" />

              <Icon name="chat_bubble" color="#6B6B6B" />
            </div>

            <div className={styles.content}>{article?.content}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlePage
