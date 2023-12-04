import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import { router, useLocalSearchParams } from 'expo-router';
import { Body, Container, Description, IconButton, PostContainer, Title, UserView } from './view-post-styled';
import { AntDesign } from '@expo/vector-icons';
import { UserText } from '../components/PostBox/styled';

interface Item {
  post: string;
  description: string;
}

export default function ViewPost() {
  const post = useLocalSearchParams();

  const onUserSearch = () => {
    router.push({ pathname: `/user`, params: { userId: post.userId, name: post.name }  });
  }

  return (
    <Container>
      <StatusBar style={'dark'} />
      <Header 
      canGoBack={true}
      onGoBack={() => {
          router.back();
      }}
      />
      <Body>
        <PostContainer>
          <Title>{post.post}</Title>
          <Description>{post.description}</Description>
          <UserView onPress={onUserSearch}>
        <IconButton onPress={onUserSearch}>
          <AntDesign name="user" size={24} color="white" />
        </IconButton>
          <UserText>{post.name}</UserText>
        </UserView>
        </PostContainer>
      </Body>
    </Container>
  );
}
