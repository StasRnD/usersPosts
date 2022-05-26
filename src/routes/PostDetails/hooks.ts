import { useQuery } from 'react-query'
import { config } from '../../config'
import { useParams } from 'react-router'
import { Post, Comment } from '../../types'

export function usePostDetailsProps() {
  const { postId } = useParams()
  const { isLoading, error, data } = useQuery<Post>('post', () => {
    return fetch(config.apiUrl + `/posts/${postId}`).then((responsive) => responsive.json())
  })

  return {
    isLoading,
    error,
    post: data
  }
}
