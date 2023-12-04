import React from 'react'
import { Button } from './styled'
import { AntDesign } from '@expo/vector-icons';

interface Props {
  onPress?: () => void;
}

export default function CloseButton({
  onPress = () => { }
}: Props = {
  }) {
  return (
    <Button onPress={onPress}>
      <AntDesign name="close" size={24} color="#FFF" />
    </Button>
  )
}
