import ToDoItem from "./ToDoItem";
import Card from 'react-bootstrap/Card';

function ToDo(props) {
    return (
        <div className="container d-grid gap-5 my-3" >
            <h3 className="my-3">ToDo List</h3>
            {props.todo.length === 0 ?
                <Card className="text-center" bg="dark" text="light" style={{ width: '30rem' }}>
                    <Card.Body className="text-center">
                        <Card.Text>
                            Nothing To Do <br />
                            Add a New Task
                        </Card.Text>
                    </Card.Body>

                </Card> :
                props.todo.map((todo) => {
                    return (
                        <Card className="text-center" bg="dark" text="light" style={{ width: '30rem' }}>
                            <Card.Body className="text-center">
                                <Card.Text>
                                    <ToDoItem todo={todo} key={todo.sno} onDelete={props.delete} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    );
                })}
        </div>
    );
}

export default ToDo;