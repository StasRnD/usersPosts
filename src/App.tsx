import React from 'react'
import { ChakraProvider, Flex, Button, Box, Heading } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { UsersWrap as Users } from './routes/Users'
import { UserDetailsWrap as UserDetails } from './routes/UserDetails'
import { UserPostsWrap as UserPosts } from './routes/UserPosts'
import { PostDetailsWrap as PostDetails } from './routes/PostDetails'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Flex backgroundColor={'#101010'} px={'60px'} justifyContent={'space-between'}>
          <Heading
            as={'h2'}
            color={'white'}
            lineHeight={'60px'}
            fontSize={'28px'}
            w={'100%'}
            alignItems={'center'}
          >
            CONCEPT CLUB
          </Heading>
          <Flex alignItems={'center'} columnGap={'12px'}>
            <Button borderRadius={'0'} lineHeight={'17px'} fontSize={'14px'} p={'11px 49px'}>
              Версия для слабовидящих
            </Button>
            <Button borderRadius={'0'} lineHeight={'17px'} fontSize={'14px'} p={'11px 57px'}>
              Мой профиль
            </Button>
          </Flex>
        </Flex>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:userId" element={<UserDetails />} />
          <Route path="/:userId/posts" element={<UserPosts />} />
          <Route path="/:userId/posts/:postId" element={<PostDetails />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </ChakraProvider>
  )
}

export default App
