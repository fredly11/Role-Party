import Message from './Message'
import SendMessage from './SendMessage'

const Messages = ({messages, messageText, setText, onSend}) => {



 
    return (
        <>
            {messages.map((message) => (
                <Message key={message.id} message={message} />
            ))} 
            <SendMessage messageText={messageText} setText={setText} onSend={onSend}/>
        </>
    )
}

export default Messages
