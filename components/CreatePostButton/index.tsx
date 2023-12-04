import React from 'react'
import { Button } from './styled'
import { AntDesign } from '@expo/vector-icons';

interface Props {
  onPress?: () => void;
}

export default function CreatePostButton({
  onPress = () => { }
}: Props = {
  }) {
  return (
    <Button onPress={onPress}>
      <AntDesign name="pluscircle" size={58} color="#E7749A" />
    </Button>
  )
}
