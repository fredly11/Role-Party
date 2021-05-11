import React from 'react'

const Users = ({users}) => {
    return (
        <div className='users-container'>
            <h2>
                Users
            </h2>
            {users.map((user) => (
                    <div className='user-container'>
                        {user.name}
                    </div>
            ))}
        </div>
    )
}

export default Users
