import React from 'react';
import { useLocalStore } from 'mobx-react';
import ToDoHeader from './components/ToDoHeader';
import ToDoForm from './components/TodoForm';
import ToDoList from './components/ToDoList';
import { mainApp } from './components/App.style';

export const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        todos: ["Buy Milk", "Buy Eggs"],
        addToDo: (task) => {
            store.todos.push(task);
        },
        get taskCount() {
            return store.todos.length;
        },
        clear: () => {
            store.todos = [];
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
            <div style={mainApp.wrap}>
                <div style={mainApp.container}>
                    <ToDoHeader />
                    <ToDoList />
                    <ToDoForm />
                </div>
            </div>
        </StoreProvider>
    )
}

export default App;