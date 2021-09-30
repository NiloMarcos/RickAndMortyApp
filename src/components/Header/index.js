import React from 'react';
import { Image, Text, View } from 'react-native';

import Logo from '../../assets/Rick_and_Morty_logo.png';

import { ContainerAll, Photo } from './styles';

export default function Header() {
 return (
   <ContainerAll>
     <Photo source={Logo} />
   </ContainerAll>
  );
}