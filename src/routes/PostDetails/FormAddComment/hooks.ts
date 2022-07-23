import { useMutation, useQueryClient } from 'react-query'
import { config } from '../../../config'
import { useParams } from 'react-router'

type CommentProps = {
  name: string
  email: string
  text: string
}

export function useAddCommentProps() {
  const queryClient = useQueryClient()
  const comments: any = queryClient.getQueryData('comments')
  const { postId } = useParams()

  return useMutation(
    (comment: CommentProps) => {
      return fetch(config.apiUrl + `/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: comment.email,
          body: comment.text,
          name: comment.name
        })
      })
        .then((responsive) => responsive.json())
        .then((res) => comments.push(res))
    },
    {
      onSuccess: () => {
        queryClient.setQueryData('comments', comments)
      }
    }
  )
}
