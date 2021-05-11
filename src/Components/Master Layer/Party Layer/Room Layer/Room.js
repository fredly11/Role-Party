import Messages from './Message Layer/Messages'
import Users from './Users'

const Room = ({room, users}) => {
    return (
        <>
        <div className='main-container'>
            <Messages key={room.id} messages={room.messages} />
        </div>
             <Users users={users} />
        </>
    )
}

export default Room
