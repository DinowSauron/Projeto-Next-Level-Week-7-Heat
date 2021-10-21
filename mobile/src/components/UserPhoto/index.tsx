import React from 'react';

import { Image } from 'react-native';
import AvatarImg from '../../assets/avatar.png';
import { LinearGradient } from "expo-linear-gradient"
import { styles } from './styles';
import { COLORS } from '../../theme';

const SIZES = {
    Small: {
        containerSize: 32,
        avatarSize: 28,
    },
    Normal: {
        containerSize: 48,
        avatarSize: 42,
    },
}

type PhotoProps = {
    imageUri: string | undefined;
    sizes?: 'Small' | 'Normal';
}

export function UserPhoto({imageUri, sizes = "Normal"}: PhotoProps){

    const {containerSize, avatarSize} = SIZES[sizes];
    const AvatarDefault = Image.resolveAssetSource(AvatarImg).uri;

    return (
        <LinearGradient
            colors={[COLORS.PINK, COLORS.YELLOW]}
            start={{x: 0, y:0.8}}
            end={{x:0.9, y:1}}
            style={[
                styles.container,
                {
                    width: containerSize,
                    height: containerSize,
                    borderRadius: containerSize / 2,
                }
            ]}
        >
            <Image 
                style={[styles.avatar, {
                    width: avatarSize,
                    height: avatarSize,
                    borderRadius: avatarSize / 2,
                }]}
                source={{ uri: imageUri || AvatarDefault}}
            />
        </LinearGradient>
    );
}