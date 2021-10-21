import React, { createContext, useContext, useState} from 'react'
import { CLIENT_ID } from "../../env.js"

import * as AuthSessions from 'expo-auth-session';


type User = {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
}

type AuthContextData = {

    user: User | null;
    isSigningIng: boolean;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
}

type AuthProviderProps = {
    children: React.ReactNode;
}

type AuthResponse = {
    token: string;
    user: User;
}

type AuthorizationResponse = {
    params: {
        code?: string;
    }
}

export const AuthContext = createContext({} as AuthContextData);

const scope = 'read:user';



function AuthProvider({ children }: AuthProviderProps) {

    const [isSigningIng, setIsSigningIng] = useState(false);
    const [user, setUser] = useState<User | null>(null);




    async function signIn() {
        const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${scope}`
        console.log("rodou aqui")
        const { params } = await AuthSessions.startAsync({ authUrl }) as AuthorizationResponse;
        console.log("Daqui não passa...")
        console.log(params)
    }

    async function signOut() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user,
            isSigningIng
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { 
    AuthProvider,
    useAuth
}