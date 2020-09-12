import React from 'react';
import { useLocalStore } from 'mobx-react';
import ToDoHeader from './components/ToDoHeader';
import ToDoForm from './components/TodoForm';
import ToDoList from './components/ToDoList';

export const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        todos: ["Buy Milk", "Buy Eggs"],
        addToDo: (task) => {
            store.todos.push(task);
        },
        get taskCount() {
            return store.todos.length;
        }
    }));

    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}

const App = () => {
    return (
        <StoreProvider>
            <div>
                <ToDoHeader />
                <ToDoList />
                <ToDoForm />
            </div>
        </StoreProvider>
    )
}

export default App;