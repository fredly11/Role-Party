import Room from './Room'

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
    </div>   
        <Room  room={rooms[activeRoom]} users={users} />
</>
    )
}

export default Rooms
