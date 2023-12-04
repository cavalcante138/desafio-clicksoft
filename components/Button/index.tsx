import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { ButtonContainer, ButtonText } from './styled';

interface Props {
    onPress?: () => void;
    label: string;
}

export default function Button({
    onPress,
    label,  
}: Props) {
    return (
        <ButtonContainer onPress={onPress}>
            <ButtonText>{label}</ButtonText>
        </ButtonContainer>
    )
}
