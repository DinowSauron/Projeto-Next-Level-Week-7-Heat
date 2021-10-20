import styles from "./styles.module.scss"
import logoImg from "../../assets/logo.svg"
import {api} from "../../services/api"
import io from "socket.io-client";
import { useEffect, useState } from "react"

type Message = {
    id: string;
    text: string;
    user: {
        name: string;
        avatar_url: string;
    }
}

let messagesQueue: Message[] = [];

const socket = io("http://localhost:4000");



socket.on("new_message", (new_message: Message) => {
    messagesQueue.push(new_message);
})

export function MessageList() {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        setInterval(() => {
            if (messagesQueue.length > 0) {
                setMessages(prevState => [
                    messagesQueue[0],
                    prevState[0],
                    prevState[1],
                ].filter(Boolean));
                messagesQueue.shift();
            }
        },)
    }, [])

    useEffect(() => {
        api.get<Message[]>("messages/last3").then(res => {
            setMessages(res.data);
        })
    }, []);

    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                 {messages.map(data => (
                    <li className={styles.message} key={data.id}>
                        <p className={styles.messageContent}>{data.text}</p>
                        <div className={styles.messageUser}>
                            <div className={styles.userImage}>
                                <img src={data.user.avatar_url} alt={data.user.name} />
                            </div>
                            <span>{data.user.name}</span>
                        </div>
                    </li>

                 ))} 

            </ul>
        </div>
    )
}