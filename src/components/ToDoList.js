import React, { useContext } from 'react';
import { StoreContext } from '../App';
import { useObserver } from 'mobx-react';

const ToDoList = () => {
    const store = useContext(StoreContext);

    const renderList = () => {
        if (store.todos.length >= 1) {
            return (
                <ul>
                    {store.todos.map((task) => <li>{task}</li>)}
                </ul>
            )
        } else {
            return (
                <div>
                    <h3>Type something to insert in the list...</h3>
                </div>
            )
        }
    }
    return useObserver(() => (
        <div>
            {renderList()}
        </div>
    ))
}

export default ToDoList;
