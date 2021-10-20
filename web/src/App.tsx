import { useContext, useState } from 'react'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { SendMessageForm } from './components/SendMessageForm'
import { AuthContext } from './context/auth'
import styles from "./styles/app.module.scss"

export function App() {
  const { user } = useContext(AuthContext);

  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ""}`}>
      <MessageList/>
      { !!user ? <SendMessageForm/> : <LoginBox/>}
    </main>
  )
}

 
