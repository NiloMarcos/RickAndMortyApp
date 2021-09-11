import styled from 'styled-components/native';

export const ContainerAll = styled.View`
  flex: 1;
  background-color: #343a40;
`;

export const ContainerSearch = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 35px;
`;

export const Input = styled.TextInput`
  background-color: #dfe7fd;
  width: 80%;
  height: 50px;
  padding-left: 15px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  font-size: 14px;
  font-family: 'Poppins_400Regular';
  margin-bottom: 5px;
`;

export const ButtonFilter = styled.TouchableOpacity`
  background-color: #dfe7fd;
  width: 40px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-left: 2px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  margin-bottom: 5px;
`;
export const ContainerPersonagens = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 5px;
  background-color: #1d3557;
  width: 100%;
  height: 100%;
`;

export const ContainerNavigation = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 15px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const ListChars = styled.FlatList`
  margin-right: 10px;
`;

export const ContainerTextApi = styled.View`
  margin-left: 15px;
  justify-content: center;
`;

export const TextApi = styled.Text`
  font-size: 14px;
  font-family: 'Poppins_400Regular';
  color: #FFFFFF;
`;

export const Photo = styled.Image`
  width: 100px; 
  height: 90px;
`;
