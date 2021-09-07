import React from 'react';
import LogoHeader from '../../assets/Rick_and_Morty_logo.png';
import {ContainerAll, Logo} from './styles';

export default function Header(){
  return (
    <ContainerAll>
      <Logo source={LogoHeader} />
    </ContainerAll>
  );
}