import { useUserDetailsProps, useUserPostsPreviewProps } from './hooks'
import { Flex, Button, Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export function UserDetailsWrap() {
  const { user, error, isLoading } = useUserDetailsProps()
  const { posts } = useUserPostsPreviewProps()

  if (isLoading || !user || !posts) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{'An error has occurred: ' + error}</div>
  }

  return (
    <Flex border={'1px solid black'} marginTop={'36px'} flexDirection={'column'}>
      <Flex>
        <Box minW={'53px'} borderRight={'1px solid black'} borderBottom={'1px solid black'}></Box>
        <Text
          padding={'12px 18px'}
          lineHeight={'40px'}
          fontSize={'35px'}
          borderRight={'1px solid black'}
          borderBottom={'1px solid black'}
          flexGrow={'1'}
        >
          {user.name}
        </Text>
        <Box borderBottom={'1px solid black'} minW={'53px'}></Box>
      </Flex>

      <Flex>
        <Box minW={'53px'} borderBottom={'1px solid black'} borderRight={'1px solid black'}></Box>
        <Flex
          flexGrow={'1'}
          borderRight={'1px solid black'}
          borderBottom={'1px solid black'}
          justifyContent={'center'}
        >
          <Text
            py="12px"
            textAlign={'center'}
            lineHeight={'17px'}
            fontSize={'18px'}
            borderRight={'1px solid black'}
            flexGrow={'1'}
          >
            {user.address.city}
          </Text>
          <Text
            py="12px"
            textAlign={'center'}
            lineHeight={'17px'}
            fontSize={'18px'}
            borderRight={'1px solid black'}
            flexGrow={'1'}
          >
            {user.email}
          </Text>
          <Text lineHeight={'17px'} fontSize={'18px'} flexGrow={'1'} py="12px" textAlign={'center'}>
            {user.phone}
          </Text>
          <Button
            h={'100%'}
            px={'28px'}
            borderRadius={'0'}
            borderRight={'1px solid white'}
            backgroundColor={'black'}
            color={'white'}
            lineHeight={'15px'}
            fontSize={'11px'}
            flexGrow={'1'}
            _hover={{
              opacity: 0.8
            }}
          >
            Написать сообщение
          </Button>
          <Button
            h={'100%'}
            px={'28px'}
            borderRadius={'0'}
            backgroundColor={'black'}
            color={'white'}
            lineHeight={'15px'}
            fontSize={'11px'}
            flexGrow={'1'}
            _hover={{
              opacity: 0.8
            }}
          >
            Предожить сходить на концерт
          </Button>
        </Flex>
        <Box minW={'53px'} borderBottom={'1px solid black'} flexGrow={'0'}></Box>
      </Flex>

      <Box borderTop={'1px solid black'} marginTop={'16px'} padding={'16px 62px 33px 53px'}>
        <Heading as={'h2'} lineHeight={'40px'} fontSize={'35px'}>
          Посты
        </Heading>
        <Flex paddingTop={'15px'} columnGap={'20px'}>
          {posts.map((post) => {
            return (
              <Flex
                flexDirection={'column'}
                key={post.id}
                border={'1px solid black'}
                padding={'14px 22px 17px 35px'}
                maxW={'50%'}
              >
                <Flex alignItems={'flex-start'} justifyContent={'space-between'} columnGap={'10px'}>
                  <Heading as={'h3'} lineHeight={'23px'} fontSize={'17px'}>
                    {post.title}
                  </Heading>
                  <Text>12.01.22</Text>
                </Flex>
                <Text
                  marginTop={'4px'}
                  color={'rgba(0, 0, 0, 0.41)'}
                  lineHeight={'17px'}
                  fontSize={'12px'}
                >
                  {post.body}
                </Text>
              </Flex>
            )
          })}
        </Flex>
        <Link to={`posts`}>
          <Button marginTop={'15px'} borderRadius={'0'}>
            Посмотреть все посты
          </Button>
        </Link>
      </Box>
    </Flex>
  )
}
