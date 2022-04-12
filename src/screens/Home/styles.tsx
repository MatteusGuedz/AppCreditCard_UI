import  styled from 'styled-components/native';



export const Container = styled.View`
    width: 100%;
    height: 100%;
    flex:1;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: #4e455e10;

`;

export const Header = styled.View`
    width: 100%;
  

`;


export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color:#4e455e;
`;


export const Subtitle = styled.Text`
    font-weight: 300;
    color: #4e455e;

`;


export const Content = styled.View` 
    width: 100%;
    background-color: #ffffff;
    padding: 20px;
    
    border-radius: 20px;
    align-items: center;

`;
export const View = styled.View` 
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;



export const Button = styled.TouchableOpacity`
    width: 100%;
    background-color: #6a1b9a;
    height: 60px;
    align-items: center;
    justify-content: center;
    border-radius:55px;
`;


export const TextButton = styled.Text`
    color: #ffffff;
`;

