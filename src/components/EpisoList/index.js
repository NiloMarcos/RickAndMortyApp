import React from 'react';
import { ContainerAll, ContainerInfo, EpisodesDescriptions } from './styles';

export default function EpisoList({ data }) {
 return (
  <ContainerAll>
    <ContainerInfo>
      <EpisodesDescriptions>{data.name}</EpisodesDescriptions>
      <EpisodesDescriptions>{data.episode}</EpisodesDescriptions>
      <EpisodesDescriptions>{data.air_date}</EpisodesDescriptions>
    </ContainerInfo>
  </ContainerAll>
  );
}