import Message from './Message'
import SendMessage from './SendMessage'

const Messages = ({messages}) => {
 
    return (
        <>
            {messages.map((message) => (
                <Message key={message.id} message={message} />
            ))} 
            <SendMessage />
        </>
    )
}

export default Messages
