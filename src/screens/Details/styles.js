import styled from 'styled-components/native';

export const ContainerAll = styled.View`
  flex: 1;
`;

export const ContainerBack = styled.View`
  width: 100%;
  height: 100px;
  background-color: #c4c4c4;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_400Regular';
`;

export const ContainerInfo = styled.View`
  flex: 1;
  align-items: center;
  background-color: #023047;
  justify-content: center;
`;

export const Photo = styled.Image`
  width: 120px;
  height: 120px;
  margin-bottom: 35px;
  margin-top: 40px;
  border-radius: 7px;
`;

export const TextRequest = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_400Regular';
  color: #FFFFFF;
  width: 80%;
  height: 50px;
  text-align: center;
  background-color: #c4c4c4;
  margin: 10px;
  padding-top: 10px;

  border-radius: 8px;
  color: #000;
`;
