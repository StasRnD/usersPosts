import { Box, Button, Flex, FormLabel, Input, Textarea } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAddCommentProps } from './hooks'
import { useState } from 'react'
import { Comment } from '../../../types'

const validationObj = Yup.object({
  email: Yup.string()
    .required('Поле обязательно для заполнения')
    .email('Ожидается email типа ivanov@mail.ru'),
  name: Yup.string()
    .required('Поле обязательно для заполнения')
    .min(2, 'Имя должно быть не менне ем из 2 букв'),
  text: Yup.string()
    .min(5, 'Комментарий должен состоять минимум из 5 букв')
    .required('Поле обязательно для заполнения')
})

type CommentsProps = {
  onAddComment: () => void
}

export const FormAddComment = ({ onAddComment }: CommentsProps) => {
  const [newComment, setNewComment] = useState({
    email: '543',
    name: '3245',
    text: '543'
  })
  useAddCommentProps(newComment)

  const formik = useFormik({
    initialValues: {
      name: '',
      text: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log(values)
      onAddComment()
    },

    validationSchema: validationObj
  })

  return (
    <Box
      backgroundColor={'lightgrey'}
      w={'50%'}
      p={'20px'}
      position={'absolute'}
      bottom={'300%'}
      left={'25%'}
      zIndex={'1'}
    >
      <form onSubmit={formik.handleSubmit} noValidate>
        <Flex flexDirection="column" mx="auto">
          <FormLabel htmlFor="name" m="0">
            Введите Ваше имя
          </FormLabel>
          <Input
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="name"
            name="name"
            type="text"
          />
          {formik.touched.name && formik.errors.name ? (
            <Box color="red" marginBottom="20px">
              {formik.errors.name}
            </Box>
          ) : null}

          <FormLabel htmlFor="email" m="0">
            Введите email
          </FormLabel>
          <Input
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="email"
            type="email"
            name="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <Box color="red" marginBottom="20px">
              {formik.errors.email}
            </Box>
          ) : null}
          <FormLabel htmlFor="text" m="0">
            Ваш комментарий
          </FormLabel>
          <Input
            value={formik.values.text}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="text"
            type="text"
            name="text"
          />
          {formik.touched.text && formik.errors.text ? (
            <Box color="red" marginBottom="20px">
              {formik.errors.text}
            </Box>
          ) : null}
          <Button type="submit" w="80%" mx="auto" marginTop="50px">
            Отправить комментарий
          </Button>
        </Flex>
      </form>
    </Box>
  )
}
