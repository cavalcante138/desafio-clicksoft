import Header from '../components/Header';
import { router, useLocalSearchParams } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { Body, Container, Icon, Line, UserContainer, UserInfo, UserInfoText, UserInfoTextBold, Username } from './user-styled';
import { useEffect } from 'react';
import useApi from '../hooks/useApi';
import Loading from '../components/Loading';
import { StatusBar } from 'expo-status-bar';

interface Item {
  post: string;
  description: string;
}

export default function User() {
  const userInfo = useLocalSearchParams();

  const { getUser, user, loading } = useApi();

  useEffect(() => {
    getUser(userInfo.userId.toString());
  },[]);

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
        {loading && <Loading />} 
        {!loading && userInfo &&
        <UserContainer>
          <Icon>
            <AntDesign name="user" size={48} color="white" />
          </Icon>
          <Username>{userInfo.name}</Username>
          <Line />
          {user &&
          <>
          <UserInfo>
                <UserInfoTextBold>Email:</UserInfoTextBold> 
              <UserInfoText>{user.email ? user.email : ''}
            </UserInfoText>
          </UserInfo>
          <Line />
          <UserInfo>
                <UserInfoTextBold>Username:</UserInfoTextBold> 
              <UserInfoText>{user.username ? user.username : ''}
            </UserInfoText>
          </UserInfo>
          <Line />
          <UserInfo>
                <UserInfoTextBold>website:</UserInfoTextBold> 
              <UserInfoText>{user.website ? user.website : ''}
            </UserInfoText>
          </UserInfo>
          <Line />
          </>
          }
        </UserContainer>}
      </Body>
    </Container>
  );
}
