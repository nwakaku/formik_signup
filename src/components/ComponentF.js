import React, { useContext} from 'react'
import { UserContext } from '../userContext';

function ComponentF() {
    const [{users}] = useContext(UserContext)
    return (
        <div>
            useContext Name - {users.name}
        </div>
    )
}

export default ComponentF
