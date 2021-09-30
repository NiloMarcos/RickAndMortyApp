import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import { ContainerAll, ListEpi, Title } from './styles';
import Header from '../../components/Header';
import EpisoList from '../../components/EpisoList';

export default function Episodes() {
  const [epis, setEpis] = useState([]);

  useEffect(() => {
    async function loadEpi(){
      const response = await api.get('/episode')
      console.log(response.data);
      setEpis(response.data.results);
    }

    loadEpi()
  },[]);
  
  return (
    <ContainerAll>
      <Header />
      <Title>Todos os episodios de Rick And Morty</Title>
      <ListEpi 
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={epis}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <EpisoList data={item} />}
      />
    </ContainerAll>
  )
}