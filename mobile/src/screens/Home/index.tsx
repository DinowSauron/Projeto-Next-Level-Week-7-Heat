import React from 'react'

import { View,KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from "./styles";

import {Header} from "../../components/Header"
import { MessageList } from '../../components/MessageList';
import { SignInBox } from '../../components/SignInBox';
import { useAuth } from '../../hooks/auth';
import { SendMessageForm } from '../../components/SendMessageForm';


export function Home() {
    const { user } = useAuth();

    return (
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === "ios" ? 'padding' : undefined}
        >
            <View style={styles.container}>
                <Header/>
                <MessageList/>
                {/* <SendMessageForm /> */}
                {user ? <SendMessageForm /> : <SignInBox/> }
            </View>
        </KeyboardAvoidingView>
    )
}