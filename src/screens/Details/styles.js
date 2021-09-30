import styled from 'styled-components/native';

export const ContainerAll = styled.View`
  flex: 1;
`;

export const ContainerBack = styled.View`
  width: 100%;
  height: 100px;
  background-color: #343a40;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-bottom-width: 2px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 10px;
  margin-top: 16px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_400Regular';
  margin-top: 16px;
  color: #FFFFFF;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  align-items: center;
  background-color: #343a40;
  justify-content: center;
`;

export const Photo = styled.Image`
  width: 160px;
  height: 160px;
  margin-bottom: 35px;
  border-radius: 7px;
`;

export const TextRequest = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_400Regular';
  color: #FFFFFF;
  width: 85%;
  height: 50px;
  text-align: center;
  background-color: #6c757d;
  margin: 10px;
  padding-top: 10px;

  border-radius: 8px;
  color: #FFFFFF;
`;
