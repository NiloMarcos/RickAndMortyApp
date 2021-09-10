import React, { useState, useEffect, useCallback } from 'react';
import {View, Text, Alert} from 'react-native';

import api from '../../services/api';

export default function Details({ navigation, route}){
  const { id } = route.params;
  
  const [ characters, setCharacters ] = useState(undefined);

  useEffect(() => {
    async function loadCharacters() {
      const response = await api.get(`/character/${id}`);
      console.log(response.data);
      setCharacters(response.data);
    }

    loadCharacters();
    
  }, []);

  return (
    <View style={{marginTop: 15}}>
      <Text></Text>
    </View>
  );
}