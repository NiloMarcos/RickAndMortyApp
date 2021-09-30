import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const ContainerPersonagens = styled.View`
  width: 95%;
  height: 100px;
  background-color: rgba(25, 26, 48, 0.8);
  margin: 0 10px;
  flex-direction: row;
  margin-top: 6px;
  border-radius: 8px;
`;


export const Photo = styled.Image`
  width: 100px;
  height: 100px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  `;

export const ContainerText = styled.View`
  justify-content: center;
  margin-left: 6px;
`;

export const TextApi = styled.Text`
  color: #FFFFFF;
  margin-left: 6px;
  font-size: 16px;
`;

export const ContainerButton = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  right: 15px;
  width: 30px;
  height: 30px;
  background-color: #e72f49;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`;