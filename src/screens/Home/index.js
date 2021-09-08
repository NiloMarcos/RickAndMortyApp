import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import Header from '../../components/Header';
import { Ionicons  } from '@expo/vector-icons';
import api from '../../services/api'
import {ContainerAll, Title, ContainerSearch, Input, ButtonFilter,ContainerPersonagens} from './styles';


export default function Home(){
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function handleCharacters(){
      const response = await api.get('/character');
      console.log(response.data);

      setCharacters(response.data);
    }
    handleCharacters();
  },[]);


  return (
    <ContainerAll>
      <Header />
      <Title>Bem vindo(a) ao Rick And Morty App</Title>

      <ContainerSearch>
        <Input placeholder="Filtre por personagem" />
        <ButtonFilter onPress={() => {}}>
          <Ionicons  name="flask" size={25} />
        </ButtonFilter>
      </ContainerSearch>

      <ContainerPersonagens>

      </ContainerPersonagens>
    </ContainerAll>
  );
}