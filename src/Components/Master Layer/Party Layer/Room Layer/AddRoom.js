import React from 'react'

const AddRoom = () => {
    return (
        <form className='room-add-form'>
            <div className='form-control'>
                <label>Add Room</label>
                <input
                type='text'
                placeholder='Room Name'
                value='Death Star'
                />
            </div>
        </form>
    )
}

export default AddRoom
