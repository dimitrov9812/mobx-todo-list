import React, { useContext } from 'react';
import { StoreContext } from '../App';
import { useObserver } from 'mobx-react';
import { ToDoHeaderStyle } from './App.style';

const ToDoHeader = () => {
    const store = useContext(StoreContext);

    const clear = () => {
        store.clear();
    }

    return useObserver(() => (
        <div>
            <button style={ToDoHeaderStyle.button}onClick={() => clear()}><h3>Clear</h3></button>
            <div style={ToDoHeaderStyle.wrap}>

                <h1>{store.taskCount} Tasks</h1>
            </div>
        </div>
    ))
}

export default ToDoHeader;
