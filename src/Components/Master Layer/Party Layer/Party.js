import Rooms from './Room Layer/Rooms'
import { useState } from 'react'

const Party = ({party, users}) => {
    const [addText, setAddText] = useState('') 
    const [rooms, setRooms] = useState(party.rooms)
    
    const addRoom = () => {
        const id = rooms.length + 1
        const messages = []
        const newRoom = {id, name: addText, messages}
        setRooms([...rooms, newRoom])
    }


    const onAddRoom = (e) => {
        e.preventDefault()
        addRoom({ addText })
        setAddText('')
    }

    return (
        <>
            <Rooms rooms={rooms} activeRoom={party.activeRoom} users={users} addText={addText} setAddText={setAddText} onAddRoom={onAddRoom}/>
        </>
    )
}

export default Party
