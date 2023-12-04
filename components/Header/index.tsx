import React from 'react'
import { Container, GoBackButton, GoBackText, Logo } from './styled'
import { Ionicons } from '@expo/vector-icons'; 

interface Props {
    canGoBack?: boolean;
    onGoBack?: () => void;      
}

export default function Header({
    canGoBack = false,
    onGoBack = () => {}
}: Props = {
}) {
  return (
    <Container>
        {canGoBack && <GoBackButton onPress={onGoBack}>
        <Ionicons name="ios-arrow-back-circle-sharp" size={36} color="black" />
        </GoBackButton>}
        <Logo>X</Logo>
    </Container>
  )
}
