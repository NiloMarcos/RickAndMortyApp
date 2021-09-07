import styled from 'styled-components/native';

export const ContainerAll = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  text-align: center;
  margin-top: 15px;
  font-size: 16px;
  font-family: Poppins_400Regular_Italic;
`;

export const ContainerSearch = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
`;

export const Input = styled.TextInput`
  background-color: #dfe7fd;
  width: 80%;
  height: 50px;
  padding-left: 15px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  font-size: 14px;
  font-family: Poppins_400Regular;
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
`;