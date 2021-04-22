import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

// import "./Signup.css";

const SignUp = (props) => {
    const [state, setstate] = useState({

        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
        errors: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            password2: "",
        },

    });

    const handleInputChange = (event) => {
        // let { categories } = state;
        // let newCategoryArray = [];
        //
        // categories.forEach((item) => {
        //     if (item.name === event.target.name)
        //         item.isChecked = event.target.checked;
        // });
        // setstate({ ...state, categories: categories });
        //
        // categories.forEach((item) => {
        //     if (item.isChecked)
        //         newCategoryArray.push(item.name);
        // });
        // setstate({ ...state, categorySet: newCategoryArray });

    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(state.categorySet);

    };

    const formValChange = (event) => {
        event.preventDefault();
        const validEmailRegex = RegExp(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );
        const { name, value } = event.target;
        let errors = { ...state.errors };
        switch (name) {
            case "firstName":
                if (value.length < 3) {
                    errors.firstName = "First Name must be 3 characters long!";
                } else {
                    errors.firstName = "";
                    setstate({
                        ...state,
                        firstName: value,
                    });
                }
                break;
            case "lastName":
                if (value.length < 3) {
                    errors.lastName = "Last Name must be 3 characters long!";
                } else {
                    errors.lastName = "";
                    setstate({
                        ...state,
                        lastName: value,
                    });
                }
                break;
            case "email":
                if (!validEmailRegex.test(value)) {
                    errors.email = "Email is not valid!";
                } else {
                    errors.email = "";
                    setstate({
                        ...state,
                        email: value,
                    });
                }
                break;

            case "password":
                if (value.length < 6) {
                    errors.password = "Password must be 6 characters long!";
                } else {
                    errors.password = "";
                    setstate({
                        ...state,
                        password: value,
                    });
                }
                break;
            case "password2":
                if (value !== state.password) {
                    errors.password2 = "Passwords must match!";
                } else {
                    errors.password2 = "";
                    setstate({
                        ...state,
                        password2: value,
                    });
                }
                break;
            default:
                break;
        }

        setstate({
            ...state,
            errors,
            [name]: value,
        });
    };
    const { errors } = state;
    return (
        <Form className="ContainerSignUp" onSubmit={handleSubmit} noValidate>
            <h4 className="display-4 signupTitle">Create Account</h4>
            <hr />
            <Form.Group controlId="formBasicFName">
                <Form.Label>First name</Form.Label>
                <Form.Control
                    type="text"
                    name="firstName"
                    className={
                        errors.firstName.length > 0
                            ? "is-invalid form-control"
                            : "form-control"
                    }
                    placeholder="First name"
                    onChange={formValChange}
                />
                {errors.firstName.length > 0 && (
                    <span className="invalid-feedback">{errors.firstName}</span>
                )}
            </Form.Group>
            <Form.Group controlId="formBasicLName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    type="text"
                    name="lastName"
                    className={
                        errors.lastName.length > 0
                            ? "is-invalid form-control"
                            : "form-control"
                    }
                    placeholder="Last name"
                    value={state.lastName}
                    onChange={formValChange}
                />
                {errors.lastName.length > 0 && (
                    <span className="invalid-feedback">{errors.lastName}</span>
                )}
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    className={
                        errors.email.length > 0 ? "is-invalid form-control" : "form-control"
                    }
                    placeholder="Enter email"
                    onChange={formValChange}
                />
                {errors.email.length > 0 && (
                    <span className="invalid-feedback">{errors.email}</span>
                )}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    className={
                        errors.password.length > 0
                            ? "is-invalid form-control"
                            : "form-control"
                    }
                    placeholder="Password"
                    onChange={formValChange}
                />
                {errors.password.length > 0 && (
                    <span className="invalid-feedback">{errors.password}</span>
                )}
            </Form.Group>

            <Form.Group controlId="formBasicPassword2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password2"
                    className={
                        errors.password2.length > 0
                            ? "is-invalid form-control"
                            : "form-control"
                    }
                    placeholder="Confirm Password"
                    onChange={formValChange}
                />
                {errors.password2.length > 0 && (
                    <span className="invalid-feedback">{errors.password2}</span>
                )}
            </Form.Group>



            <button
                id="signup-btn"
                className="btn btn-primary"
                type="submit"
            >
                SIGN UP
            </button>

        </Form>
    );
};
export default SignUp;
