import React from 'react';
import {

    Btn,
    TextButton,
  
} from './styles';


interface PropsButton {
    txtButton: string,
    ConsoleButton:string
}


const Button = ({txtButton, ConsoleButton}: PropsButton) => {


  

    return (
        

 

            <Btn onPress={()=> console.log({ConsoleButton})}>
                <TextButton>{txtButton} </TextButton>
            </Btn>
       
    )
      
};

export default Button;