import React, { useState, useEffect } from "react";
import { Card, CardImg } from 'reactstrap'
import axios from "axios";
import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field.").min(3, "Name must include at least three characters."),
    email: yup.string().email("Must be a valid email address.").required("Email is required."),
    password: yup.string().min(8, "Passwords must include at least eight characters.").required("Password is required."),
    terms: yup.boolean().oneOf([true], "You must accept the Terms and Conditions")
});

export default function Form() {
const [submitStop, setSubmitStop] = useState(true);

const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: ""
});

const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    terms: ""
});

const [user, setUser] = useState([])
const addNewUser = e => {
    const newUser = {
        id: Date.now(),
        name: e.name,
        email: e.email,
        password: e.password
    };

setUser([...user, newUser])
}

useEffect(() => {
    formSchema.isValid(formState).then(valid => {
        setSubmitStop(!valid);
    });
}, [formState]);

const formSubmit = e => {
    e.preventDefault();
    axios
    .post("https://reqres.in/api/users", formState)
    
    .then(res => {
        console.log("post", formState);
        addNewUser(res.data);

    setFormState({
        name: "",
        email: "",
        password: "",
        terms: ""
    });
    })
    .catch(error => console.log(error.response));
};

const validateChange = event => {
    yup.reach(formSchema, event.target.name)
    .validate(event.target.value)
    .then(valid => {
        setErrors({
            ...errors, [event.target.name]: ""
        });
    })
    .catch(err => {
        setErrors({
            ...errors, [event.target.name]: err.errors[0]
        });
    });
};

const inputChange = event => {
    event.persist();
    const newFormData = {
        ...formState, [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
    };

    validateChange(event);
    setFormState(newFormData)
};

return (
    <Card>
        
        <div style={{width: '40%', position: 'absolute', top: '20%', left: '10%', backgroundColor: "blue"}}>
            <h1>Begin Your Wunderlist Journey</h1>
    <form onSubmit={formSubmit}>
        <label style={{color: 'white'}} htmlFor="name">
            Name 
        <input
        type="text"
        name="name"
        data-cy="name"
        value={formState.name}
        onChange={inputChange}
        />
        {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
        </label>
        <label htmlFor="email">
            Email 
        <input
        type="text"
        name="email"
        data-cy="email"
        value={formState.email}
        onChange={inputChange}
        />
        {errors.email.length > 0 ? (<p className="error">{errors.email}</p>) : null}
        </label>
        <label htmlFor="password">
            Password 
            <input
            type="password"
            name="password"
            data-cy="password" 
            value={formState.password}
            onChange={inputChange}
            />
            {errors.password.length > 0 ? (
                <p className="error">{errors.password}</p>) : null}
        </label>
        <label htmlFor="terms" className="terms">
            <input
            type="checkbox"
            name="terms"
            checked={formState.terms}
            onChange={inputChange}
            />
            Terms of Service
        </label>
        <button data-cy="submit" disabled={submitStop}>Submit</button>
        {user.map((e) => (<div key={e.id}>
            <h2>Name: {e.name}</h2>
            <h2>Email: {e.email}</h2>
            <h3>Password: {e.password}</h3>
        </div>))}
    </form>
    </div>
    <CardImg src={require('./assets/calendar.jpg')} />
    </Card>
);
}