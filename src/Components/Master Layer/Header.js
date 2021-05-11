import React from 'react'

const Header = ({party, activeRoom}) => {
    return (
        <div className='header'>
            <div className='header-party-container'>
                {party.name}
            </div>
            <div className='header-room-container'>
                {party.rooms[activeRoom].name}
            </div>
        </div>
    )
}

export default Header
