import Room from './Room'
import AddRoom from './AddRoom'

const Rooms = ({rooms, activeRoom, users, addText, setAddText, onAddRoom}) => {
    console.log(rooms)
    return (
<>
    <div className='sidebar-container'>
        <h2>
            Rooms
        </h2>
        {rooms.map((room) => (
                 <div className='container' key={room.id}>
                    {room.name}
                 </div>
        ))} 
        <AddRoom  addText={addText} setAddText={setAddText} onAddRoom={onAddRoom}/>
    </div>   
        <Room key={rooms[activeRoom].id} room={rooms[activeRoom]} users={users} />
</>
    )
}

export default Rooms
