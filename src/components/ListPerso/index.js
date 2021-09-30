import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Container, ContainerPersonagens, ContainerText, Photo, TextApi, ContainerButton } from './styles';

import { useNavigation } from '@react-navigation/native';

export default function ListPerso({ data }) {
  const navigation = useNavigation();

  return (
    <Container>
      <ContainerPersonagens>
        <Photo source={{ uri: data.image }} />
        <ContainerText>
          <TextApi numberOfLines={1}>Nome: {data.name}</TextApi>
          <TextApi numberOfLines={1}>Status: {data.status}</TextApi>
          <TextApi numberOfLines={1}>Specie: {data.species}</TextApi>
        </ContainerText>
        <ContainerButton onPress={() => navigation.navigate('Detalhes', {id: data.id})}>
          <Feather name="align-justify" size={25} color="#FFF"/>
        </ContainerButton>
      </ContainerPersonagens>
    </Container>
  );
}