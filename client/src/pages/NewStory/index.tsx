import { ChangeEvent, useEffect, useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import styles from './styles.module.scss'

/* components */
import Navbar from '../../components/organisms/Navbar'

/* graphql */
/* import { CreateArticleInput } from '../../generated/graphql' */

const CREATE_ARTICLE = gql`
  mutation CreateArticle($input: CreateArticleInput!) {
    createArticle(createArticleInput: $input) {
      id
      title
      content
    }
  }
`

const NewStory = () => {
  const [formValues, setFormValues] = useState({
    title: '',
    content: '',
  })

  const [postArticle, { data, loading, error }] = useMutation(CREATE_ARTICLE)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit = async () => {
    try {
      const response = await postArticle({
        variables: { input: { title: 'test', content: 'test' } },
      })
      console.log(response)
    } catch (err) {
      console.error('Error posting article:', err)
    }
  }

  useEffect(() => {
    if (!loading) {
      if (data) {
        console.log('Article posted:', data)
      }
      if (error) {
        console.error('Error:', error)
      }
    }
  }, [data, loading, error])

  return (
    <div className={styles.page}>
      <Navbar
        publishAction={handleSubmit}
        canBeSend={formValues.title.length > 3 && formValues.content.length > 3}
      />
      <div className={styles.new_story}>
        <form>
          <input
            placeholder="Title"
            name="title"
            value={formValues.title}
            onChange={handleChange}
          />
          <textarea
            placeholder="Tell your story..."
            name="content"
            value={formValues.content}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  )
}

export default NewStory
