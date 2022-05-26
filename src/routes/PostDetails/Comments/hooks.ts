import { useQuery } from 'react-query'
import { config } from '../../../config'
import { useParams } from 'react-router'
import { Comment } from '../../../types'

export function useCommentsProps() {
  const { postId } = useParams()
  const { isLoading, error, data } = useQuery<Comment[]>('comments', () => {
    return fetch(config.apiUrl + `/posts/${postId}/comments`).then((responsive) =>
      responsive.json()
    )
  })

  return {
    isLoading,
    error,
    comments: (data || []).map(({ id, name, email, body }) => ({ id, name, email, body }))
  }
}
