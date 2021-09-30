import React, { useState, useEffect } from 'react';
import { Ionicons } from "@expo/vector-icons";;
import api from '../../services/api';

import {ContainerAll, ContainerBack, BackButton, Title, ContainerInfo, Photo, TextRequest} from './styles';

export default function Details({ navigation, route }){
  const { id } = route.params;
  
  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
    async function loadCharacters() {
      const response = await api.get(`/character/${id}`);
      console.log(response.data);
      setCharacters(response.data);
    }

    loadCharacters();
    
  }, []);

  return (
    <ContainerAll>
      <ContainerBack>
        <BackButton onPress={() => navigation.navigate('Home')}>
          <Ionicons name="arrow-back-outline" size={30} color="#FFFFFF" />
        </BackButton>
        <Title>Caracteristicas dos personagens</Title>
      </ContainerBack>
      <ContainerInfo>
        <Photo source={{ uri: characters.image }} />
        <TextRequest>Nome: {characters.name}</TextRequest>
        <TextRequest>Status: {characters.status}</TextRequest>
        <TextRequest>Specie: {characters.species}</TextRequest>
        <TextRequest>Genero: {characters.gender}</TextRequest>
      </ContainerInfo>
    </ContainerAll>
  );
}