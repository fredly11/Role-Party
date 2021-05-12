import Messages from './Message Layer/Messages'
import Users from './Users'
import { useState } from 'react'

const Room = ({room, users}) => {
    //Room is state for adjusting the text in message box and adjusting array of messages
    const[messageText, setText] = useState(' ')
    const[messages, setMessages] = useState(room.messages)


    //Adds new message to room's messages
  const sendMessage = () => {
    const id = messages.length + 1
    const timeStamp = '4/5/2021' 
    const user = 'Darth Tater'
    const newMessage = { id, user, timestamp: timeStamp, text: messageText }
    setMessages([...messages, newMessage])
  }

  //Handles sending with button or enter
    const onSend = (e) => {
        e.preventDefault()
        sendMessage({ messageText })
        setText('')
    } 


    return (
        <>
        <div className='main-container'>
            <Messages key={room.id} messages={messages} messageText={messageText} setText={setText} onSend={onSend}/>
        </div>
         <Users users={users} />
        </>
    )
}

export default Room
