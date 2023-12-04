import { ActivityIndicator } from 'react-native'
import React from 'react'
import { Container } from './styled'

export default function Loading() {
  return (
    <Container>
        <ActivityIndicator size="large" color="#000" />
    </Container>
  )
}