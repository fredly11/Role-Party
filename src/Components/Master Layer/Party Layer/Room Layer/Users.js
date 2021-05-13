const Users = ({users}) => {
    return (
        <div className='users-container'>
            <h2>
                Users
            </h2>
            {users.map((user) => (
                    <div key={user.id} className='user-container'>
                        {user.name}
                    </div>
            ))}
        </div>
    )
}

export default Users
