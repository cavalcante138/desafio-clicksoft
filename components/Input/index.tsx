import React, { useRef, useState } from 'react'
import { Container, Label, TextInput } from './styled';

interface Props {
  label: string;
  onChange: (value: string) => void;
  value: string;
}

export default function Input({
  label,
  onChange,
  value
}: Props) {
  
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput
      onChangeText={onChange}
      value={value}
      />
    </Container>
  );
}