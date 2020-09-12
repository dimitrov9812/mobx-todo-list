import React, { useContext, useState } from 'react';
import { StoreContext } from '../App';
import { useObserver } from 'mobx-react';

const ToDoForm = () => {
    const store = useContext(StoreContext);
    const [task, setTask] = useState("");

    return useObserver(() => (
        <form onSubmit={e => {
            store.addToDo(task);
            setTask("");
            e.preventDefault();
        }}>
            <input type="text" value={task} onChange={e => setTask(e.target.value)} />
            <button type="submit">Add Task</button>
        </form>
    ))
}

export default ToDoForm;
