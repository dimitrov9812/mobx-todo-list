import React, { useContext, useState } from 'react';
import { StoreContext } from '../App';
import { useObserver } from 'mobx-react';
import { ToDoFormStyle } from './App.style';
const ToDoForm = () => {
    const store = useContext(StoreContext);
    const [task, setTask] = useState("");

    return useObserver(() => (
        <form style={ToDoFormStyle.form} onSubmit={e => {
            store.addToDo(task);
            setTask("");
            e.preventDefault();
        }}>
            <input style={ToDoFormStyle.input} type="text" value={task} onChange={e => setTask(e.target.value)} />
            <button style={ToDoFormStyle.button} type="submit">Add Task</button>
        </form>
    ))
}

export default ToDoForm;
