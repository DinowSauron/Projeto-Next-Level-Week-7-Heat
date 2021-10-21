import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import {UserPhoto} from '../UserPhoto'
import { styles } from './styles';

import LogoSvg from "../../assets/logo.svg";
import { useAuth } from '../../hooks/auth';

export function Header() {
const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <LogoSvg />

      <View style={styles.logoutButton}>

        {user && (
        <TouchableOpacity onPress={signOut}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
        )}
        
        {user ? <UserPhoto imageUri={user.avatar_url}/> : <UserPhoto imageUri=""/> }
      </View>
      
    </View>
  );
}