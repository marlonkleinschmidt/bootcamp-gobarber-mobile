// ------------------------------------------------------------
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper'


// ------------------------------------------------------------
export const Container = styled.View`
  flex: 1; /* vai fazer ocupar todo o tamanho dentro do container*/
  align-items: center; /* Centraliza itens na horizontal.*/
  justify-content: center; /* Centraliza conteudo na vertical.*/
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px; /* para que nada fique encostando nas laterais*/
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute; /* elemento fica sobreposto a todos os outros em uma nova pagina com os demais elementos ao fundo */
  left: 0;
  right: 0;
  bottom: 0;
  background: #312e38; /**#312e38 */
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px; /* verifica espaço na parte de baixo da tela e corrige posição */

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;

`;