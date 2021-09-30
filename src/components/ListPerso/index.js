import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Container, ContainerPersonagens, ContainerText, Photo, TextApi, ContainerButton } from './styles';

export default function ListPerso({ data }) {
  return (
    <Container>
      <ContainerPersonagens>
        <Photo source={{ uri: data.image }} />
        <ContainerText>
          <TextApi numberOfLines={1}>Nome: {data.name}</TextApi>
          <TextApi numberOfLines={1}>Status: {data.status}</TextApi>
          <TextApi numberOfLines={1}>Specie: {data.species}</TextApi>
        </ContainerText>
        <ContainerButton>
          <Feather name="align-justify" size={25} color="#FFF"/>
        </ContainerButton>
      </ContainerPersonagens>
    </Container>
  );
}