import Button from 'react-bootstrap/Button';

function ToDoItem({ todo, onDelete }) {
    return (
        <div className='container'>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <Button variant="danger" size="sm" onClick={() => { onDelete(todo) }}>Done</Button>
        </div>
    );
}

export default ToDoItem;