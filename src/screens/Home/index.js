import React from 'react';
import Header from '../../components/Header';
import { Ionicons  } from '@expo/vector-icons';
import {ContainerAll, Title, ContainerSearch, Input, ButtonFilter} from './styles';

export default function Home(){
  return (
    <ContainerAll>
      <Header />
      <Title>Bem vindo(a) ao Rick And Morty App</Title>

      <ContainerSearch>
        <Input placeholder="Filtre por personagem" />
        <ButtonFilter>
          <Ionicons  name="flask" size={25} />
        </ButtonFilter>
      </ContainerSearch>
    </ContainerAll>
  );
}