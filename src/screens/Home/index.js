import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
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
} from "./styles";

export default function Home({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

  const parPage = 5;

  useEffect(() => {
    handleCharacters();
  }, []);

  async function handleCharacters() {
    const response = await api.get(`/character/?page=${page}`);
    setCharacters(response.data.results);
    setPage(page + 1);
  }

  // const filterCharacter = characters.filter((character) => {
  //   return character.name.toLowerCase().includes(filter.toLowerCase());
  // });

  return (
    <ContainerAll>
      <ContainerSearch>
        <Input
          placeholder="Filtre por personagem"
          value={filter}
          onChangeText={(text) => setFilter(text)}
        />
        <ButtonFilter onPress={() => {}}>
          <Ionicons name="flask" size={25} />
        </ButtonFilter>
      </ContainerSearch>

      <ListChars
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={characters}
        keyExtractor={(characters) => characters.id.toString()}
        renderItem={({ item }) => (
          <ContainerPersonagens
            onPress={() => navigation.navigate("Detalhes", { id: item.id })}
          >
            <Photo source={{ uri: item.image }} />
            <ContainerTextApi>
              <TextApi>Nome: {item.name}</TextApi>
              <TextApi>Status: {item.status}</TextApi>
              <TextApi>Specie: {item.species}</TextApi>
            </ContainerTextApi>
          </ContainerPersonagens>
        )}
        onEndReached={handleCharacters}
        onEndReachedThreshold={0.1}
      />
    </ContainerAll>
  );
}
