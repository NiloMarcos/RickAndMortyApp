import React from 'react';
import Header from '../../components/Header';

import {ContainerAll, Title} from './styles';

export default function Home(){
  return (
    <ContainerAll>
      <Header />
      <Title>Its a home screen</Title>
    </ContainerAll>
  );
}