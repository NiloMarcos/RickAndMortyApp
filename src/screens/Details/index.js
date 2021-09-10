import React, { useState, useEffect } from 'react';
import { Ionicons } from "@expo/vector-icons";;
import api from '../../services/api';

import {ContainerAll, ContainerBack, BackButton, Title, ContainerInfo, Photo, Name, Gender, Status, Species} from './styles';

export default function Details({ navigation, route}){
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
          <Ionicons name="arrow-back-outline" size={30} />
        </BackButton>
        <Title>Caracteristicas dos personagens</Title>
      </ContainerBack>
      <ContainerInfo>
        <Photo source={{ uri: characters.image }} />
        <Name>{characters.name}</Name>
        <Status>{characters.status}</Status>
        <Species>{characters.species}</Species>
        <Gender>{characters.gender}</Gender>
      </ContainerInfo>
    </ContainerAll>
  );
}