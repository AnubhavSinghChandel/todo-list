import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function AddTask(props) {
    // Using useState to change state of title and desc so that new task can be added
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        props.addTodo(title, desc); // Passing title and desc to add new Task
        setTitle("");
        setDesc("");
    }

    return (
        <div className="container">
            <h3 className="my-3">Add a New Task</h3>
            <div className="container">
                <Form onSubmit={submit}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Task Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter task to be done" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="DescriptionTextarea">
                        <Form.Label>Task Description</Form.Label>
                        <Form.Control as="textarea" rows={3} required placeholder='Enter task description here' value={desc} onChange={(e) => setDesc(e.target.value)} />
                        <Form.Control.Feedback type="invalid">
                            Please fill out this field.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Add Task
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default AddTask;