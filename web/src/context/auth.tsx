import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";


type AuthResponse = {
    token: string;
    user: {
        id: string;
        avatar_url: string;
        name: string;
        login: string;
    }
}

type AuthProviderProps = {
    children: ReactNode;
}

type User = {
    id: string;
    name: string;
    login: string;
    avatar_url: string;
}

type AuthContextData = {
    user: User | null;
    signInUrl: string;
    signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: AuthProviderProps) {
    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${import.meta.env.VITE_GITHUB_WEB_CLIENT_ID}`
    const [user, setUser] = useState<User | null>(null);
    
    async function signIn(githubCode: string ) {
        const response = await api.post<AuthResponse>("authenticate", {
            code: githubCode
        });

        const { token, user} = response.data;
        
        localStorage.setItem("@dowhile:token", token);
        
        api.defaults.headers.common.authorization = `Bearer ${token}`

        setUser(user);
    }

    function signOut() {
        setUser(null);
        localStorage.removeItem("@dowhile:token");
    }

    useEffect(() => {
        const token = localStorage.getItem("@dowhile:token");

        if(token) {
            api.defaults.headers.common.authorization = `Bearer ${token}`
            api.get<User>("profile").then(res => {
                setUser(res.data)
            });
        }
    }, [])

    useEffect(() => {
        const url = window.location.href;
        const hasGithubcode = url.includes("?code=");

        if(hasGithubcode) {
            const [urlWithoutCode, githubCode] = url.split("?code=");

            window.history.pushState({}, "", urlWithoutCode);

            signIn(githubCode);
        }
    },[])


    return (
        <AuthContext.Provider value={{
            signInUrl,
            signOut,
            user
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}