import Navbar from "./Components/Header";
import ToDo from "./Components/ToDo";
import Footer from "./Components/Footer";
import { useState } from "react";
import AddTask from "./Components/AddTask"

function App() {
    const onDelete = (todo) => {
        setTodo(Todo.filter((e) => {
            return e !== todo;
        }));
    }

    const addTodo = (title, desc) => {
        let sno = Todo.length + 1; //Gives value of the index of last element in Todo + 1
        const currentTodo = {
            sno: sno,
            title: title,
            desc: desc
        }
        setTodo([...Todo, currentTodo]);
        console.log(currentTodo);
    }

    const [Todo, setTodo] = useState([

    ]);
    return (
        <>
            <Navbar title="ToDo List" />
            <AddTask addTodo={addTodo} />
            <ToDo todo={Todo} delete={onDelete} />
            <Footer />
        </>
    );
}

export default App;
