const Message = ({ message }) => {
    return (
        <div className='container'>
        <div className='user-name'>
            {message.user}
            <div className='timestamp'>{message.timestamp}</div>
        </div>
        {message.text}
        </div>
    )
}

export default Message
