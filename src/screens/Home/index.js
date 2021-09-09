import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import Header from "../../components/Header";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import api from "../../services/api";
import {
  ContainerAll,
  ContainerSearch,
  Input,
  ButtonFilter,
  ContainerPersonagens,
  ListChars,
  ContainerTextApi,
  TextApi
} from "./styles";

export default function Home({navigation}) {
  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
    async function handleCharacters() {
      const response = await api.get(`/character`);
      // console.log(response.data.results);
  
      setCharacters(response.data.results);
    }

    handleCharacters();
  }, []);

  return (
    <ContainerAll>
      <Header />

      <ContainerSearch>
        <Input placeholder="Filtre por personagem" />
        <ButtonFilter onPress={() => {}}>
          <Ionicons name="flask" size={25} />
        </ButtonFilter>
      </ContainerSearch>
      
      {/* <Ionicons name="alert-circle-outline" size={25} /> */}

      <ListChars 
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={characters}
        keyExtractor={characters => characters.name}
        renderItem={({item}) => (
          <ContainerPersonagens onPress={() => navigation.navigate('Detalhes')}>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
            <ContainerTextApi>
              <TextApi>{item.name}</TextApi>
              <TextApi>{item.status}</TextApi>
              <TextApi>{item.species}</TextApi>
            </ContainerTextApi>
          </ContainerPersonagens>
        )}
      />

    </ContainerAll>
  );
}
