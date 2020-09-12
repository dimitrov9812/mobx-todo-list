import React, { useContext } from 'react';
import { StoreContext } from '../App';
import { useObserver } from 'mobx-react';

const ToDoHeader = () => {
    const store = useContext(StoreContext);

    return useObserver(() => (
        <h1>{store.taskCount} Bugs</h1>
    ))
}

export default ToDoHeader;
