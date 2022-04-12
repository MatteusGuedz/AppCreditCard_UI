import React from 'react';
import {Card, Input} from '../../components';
import IconUser from '../../assets/icon-user.svg';
import IconCode from '../../assets/icon-code.svg';
import IconDate from '../../assets/icon-date.svg';
import IconNumber from '../../assets/icon-number.svg';
import {
    Container,
    Title,
    Subtitle,
    Content,
    Button,
    TextButton,
    Header,
    View
} from './styles';


const Home = () => {

  

    return (
        <Container>
          <Header>
            <Title>Meu Cartão</Title>
            <Subtitle>Insira os dados do cartão</Subtitle>
         </Header>

            <Content>

                    <Card />

                    <Input icon={<IconUser width={16} height={16}  />} />
                    <Input icon={<IconCode width={16} height={16}  />} />

                <View>
                    <Input icon={<IconDate width={16} height={16}  />}  width='45%' />
                    <Input icon={<IconNumber width={16} height={16}  />} width='45%' />
               </View>    
                    
                  
            </Content>


            <Button >
                <TextButton> Cadastrar </TextButton>
            </Button>
        </Container>
    )
      
};

export default Home;