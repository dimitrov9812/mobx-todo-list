import React, { useContext } from 'react';
import { StoreContext } from '../App';
import { useObserver } from 'mobx-react';

const ToDoList = () => {
    const store = useContext(StoreContext);

    return useObserver(() => (
        <ul>
            {store.todos.map((task) => <li>{task}</li>)}
        </ul>
    ))
}

export default ToDoList;
