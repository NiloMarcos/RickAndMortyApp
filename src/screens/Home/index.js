import React, { useState, useEffect, useCallback } from "react";
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
  TextApi,
  Photo,
  ContainerNavigation,
  BackScreen,
  NextScreen
} from "./styles";

export default function Home({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function handleCharacters() {
      const response = await api.get(`/character`);
      setCharacters(response.data.results);
    }
    handleCharacters();
  }, []);

  // const filterCharacter = characters.filter((character) => {
  //   return character.name.toLowerCase().includes(filter.toLowerCase());
  // });

  return (
    <ContainerAll>
      <Header />

      <ContainerSearch>
        <Input
          placeholder="Filtre por personagem"
          value={filter}
          onChangeText={(text) => setFilter(text)}
        />
        <ButtonFilter onPress={() => { }}>
          <Ionicons name="flask" size={25} />
        </ButtonFilter>
      </ContainerSearch>

      <ListChars
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={characters}
        keyExtractor={(characters) => characters.id.toString()}
        renderItem={({ item }) => (
          <ContainerPersonagens onPress={() => navigation.navigate("Detalhes", { id: item.id })}>
            <Photo source={{ uri: item.image }} />
            <ContainerTextApi>
              <TextApi>Nome: {item.name}</TextApi>
              <TextApi>Status: {item.status}</TextApi>
              <TextApi>Specie: {item.species}</TextApi>
            </ContainerTextApi>
          </ContainerPersonagens>
        )}
      />
    </ContainerAll>
  );
}
