import React, { useState } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddStudent() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");
    const [subjects, setSubject] = useState("");
    const navigate = useNavigate();

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSubject(prevSubjects => [...prevSubjects, value]);
        } else {
            setSubject(prevSubjects => prevSubjects.filter(subject => subject !== value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (subjects.length === 0) {
            alert("Please select at least one subject.");
            return;
        }
        console.log(name)
        console.log(age)
        console.log(course)
        console.log(subjects)
        Axios.post('http://localhost:8000/addstudent', { name, age, course, subjects })
        .then(response => {
            console.log('Response:', response.data);
            navigate('/', { replace: true });
            window.location.reload();
            alert("New Student added");
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    console.log(subjects)

    return (
        <div className='App'>
            <h1>Add a New Student</h1>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Student Details</legend>
                    <div>
                        <label class="col-form-label mt-4" for="inputDefault">Name</label>
                        <input type="text" class="form-control" placeholder="Input Name" id="inputDefault" required onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label for="exampleInputEmail1" className="form-label mt-4">Age</label>
                        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Age" required onChange={(e) => setAge(e.target.value)} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your data with anyone else.</small>
                    </div>
                    <div>
                        <label for="exampleInputEmail1" className="form-label mt-4">Course</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Course" required onChange={(e) => setCourse(e.target.value)} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your data with anyone else.</small>
                    </div>
                </fieldset>
                <fieldset>
                        <legend className="mt-10">Subjects</legend>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Computer Programming" id="flexCheckDefault" onChange={handleCheckboxChange}/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Computer Programming
                                </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="IT Elective : Frameworks" id="flexCheckDefault" onChange={handleCheckboxChange}/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    IT Elective : Frameworks
                                </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Capstone Project 1" id="flexCheckDefault" onChange={handleCheckboxChange}/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Capstone Project 1
                                </label>
                        </div>
                    </fieldset>
                    <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddStudent