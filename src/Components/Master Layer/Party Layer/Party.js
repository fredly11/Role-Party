import Rooms from './Room Layer/Rooms'

const Party = ({party, users}) => {
    return (
        <>
            <Rooms key={party.id} rooms={party.rooms} activeRoom={party.activeRoom} users={users} />
        </>
    )
}

export default Party
