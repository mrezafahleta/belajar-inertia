import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";

import Guest from "../../Layouts/Guest";

// errors disini adalah umpan balik dari login controller -> store -> throw ValidationException:withMessagge
const Login = ({ errors }) => {
    const { data, setData, post } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    const onChangeHandler = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value,
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        post("/login", data);
    };

    // const [values, setValues] = useState({
    //     email: "",
    //     password: "",
    //     remember: "",
    // });
    const [pesan, setPesan] = useState(false);

    // const onChangeHandler = (e) => {
    //     setValues({
    //         ...values,
    //         [e.target.id]: e.target.value,
    //     });
    // };

    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     Inertia.post("/login", values);
    // };

    return (
        <>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        <form onSubmit={submitHandler} noValidate>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    value={data.email}
                                    onChange={onChangeHandler}
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                />
                                {errors && (
                                    <div className="text-danger">
                                        {errors.email}
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="password"
                                    className="form-label"
                                >
                                    Password
                                </label>
                                <input
                                    value={data.password}
                                    onChange={onChangeHandler}
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                />
                                {errors && (
                                    <div className="text-danger text-sm ">
                                        {errors.password}
                                    </div>
                                )}
                            </div>

                            <div className="form-checkbox">
                                <input
                                    value={data.remember}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            remember: e.target.checked,
                                        })
                                    }
                                    type="checkbox"
                                    id="remember"
                                    name="remember"
                                    className="form-check-input "
                                />
                                <label
                                    htmlFor="remember"
                                    className="form-label"
                                >
                                    Remember Me
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-sm"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                    <div className="card-footer">
                        <Link href="/register">Register</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

Login.layout = (page) => <Guest children={page} title="Login" />;

export default Login;
