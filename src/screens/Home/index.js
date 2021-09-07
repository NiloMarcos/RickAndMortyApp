import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import { Ionicons  } from '@expo/vector-icons';
import api from '../../services/api'
import {ContainerAll, Title, ContainerSearch, Input, ButtonFilter,ContainerPersonagens} from './styles';


export default function Home(){
  
  async function handleSearch(){
    const response = await api.get('/character');
    console.log(response.data); 
  }
  
  return (
    <ContainerAll>
      <Header />
      <Title>Bem vindo(a) ao Rick And Morty App</Title>

      <ContainerSearch>
        <Input placeholder="Filtre por personagem" />
        <ButtonFilter onPress={() => handleSearch()}>
          <Ionicons  name="flask" size={25} />
        </ButtonFilter>
      </ContainerSearch>

      <ContainerPersonagens>

      </ContainerPersonagens>
    </ContainerAll>
  );
}