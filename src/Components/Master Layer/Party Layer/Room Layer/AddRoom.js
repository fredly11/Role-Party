import AddRoomButton from './AddRoomButton'

const AddRoom = ({onAddRoom, addText, setAddText}) => {
    return (
        <>
        <form className='room-add-form' onSubmit={onAddRoom}>
            <div className='form-control'>
                <label>Add Room</label>
                <input
                type='text'
                placeholder='Room Name'
                value={addText}
                onChange={(e) => setAddText(e.target.value)}
                />
            </div>
        </form>
        <div>
        <AddRoomButton onClick={onAddRoom}/>
        </div>
        </>
    )
}

export default AddRoom
