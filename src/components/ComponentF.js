import React, { useContext} from 'react'
import { UserContext } from '../userContext';

function ComponentF() {
    const user = useContext(UserContext)
    return (
        <div>
            useContext Name - {user}
        </div>
    )
}

export default ComponentF
