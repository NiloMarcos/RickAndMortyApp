import React, { useState, useEffect, useCallback } from 'react';
import { Ionicons } from "@expo/vector-icons";;
import api from '../../services/api';

import {ContainerAll, ContainerBack, ContainerInfo, Photo, Name, Gender, Status, Species} from './styles';

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
        <Ionicons name="arrow-back-outline" size={25} />
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