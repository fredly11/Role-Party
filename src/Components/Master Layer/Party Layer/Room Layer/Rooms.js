import Room from './Room'
import AddRoom from './AddRoom'

const Rooms = ({rooms, activeRoom, users}) => {
    return (
<>
    <div className='sidebar-container'>
        <h2>
            Rooms
        </h2>
        {rooms.map((room) => (
                 <div className='container'>
                    {room.name}
                 </div>
        ))} 
        <AddRoom />
    </div>   
        <Room  room={rooms[activeRoom]} users={users} />
</>
    )
}

export default Rooms
