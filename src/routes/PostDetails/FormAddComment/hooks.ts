import { useQuery } from 'react-query'
import { useMutation, useQueryClient } from 'react-query'
import { config } from '../../../config'
import { useParams } from 'react-router'
import { Comment } from '../../../types'

type NewComment = {
  email: string
  name: string
  text: string
}

export function useAddCommentProps(values: NewComment) {
  const { postId } = useParams()
}
