import React from 'react';

const UserCard = ({user, index, setUsers}) => {
  
    async function removeUser() {
        const res = await fetch("http://localhost:4000/removeUser/"+index)
        const data = await res.json()

        setUsers(data.users)
        console.log(data)
    }

    return (
        <div className="card">
            <h4>{user.username}</h4>
            <h6>{user.message}</h6>
            <button onClick={removeUser}>Delete</button>
        </div>
    );
};

export default UserCard;