import React from 'react';

import { ScrollView } from 'react-native';

import { Message } from '../Message'
import { styles } from './styles';

export function MessageList(){

    const message = {
        id: '3',
        text: 'teste mensagem',
        user: {
            name: 'dino',
            avatar_url: 'http://github.com/DinowSauron.png', 
        }

    }

  return (
    <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="never"
    >
        <Message data={message}/>
    </ScrollView>
  );
}