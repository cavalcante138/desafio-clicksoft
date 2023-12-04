import React from 'react'
import { ActionView, BottomView, Container, Description, IconButton, Title, UserText, UserView } from './styled'
import { AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

interface Props {
  onPress: () => void;
  title: string;
  description: string;
  onDeletePress: () => void;
  onEditPress: () => void;
  onUserPress: () => void;
  username: string;
}

export default function PostBox({
  onPress,
  title,
  description,
  onDeletePress,
  onEditPress,
  onUserPress,
  username
}: Props) {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
      <Description>{description.substring(0, 70) + "... leia mais"}</Description>
      <BottomView>
        <UserView onPress={onUserPress}>
        <IconButton onPress={onUserPress}>
          <AntDesign name="user" size={24} color="white" />
        </IconButton>
          <UserText>{username}</UserText>
        </UserView>
        <ActionView>
          <IconButton onPress={onDeletePress}>
            <FontAwesome5 name="trash" size={16} color="white" />
          </IconButton>
          <IconButton onPress={onEditPress}>
          <MaterialIcons name="edit" size={20} color="white" />
          </IconButton>
        </ActionView>
      </BottomView>
    </Container>
  )
}
