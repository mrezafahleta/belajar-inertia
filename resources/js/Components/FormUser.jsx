import React from 'react'

export default function FormUser({ errors, submit, data, setData }) {

    const onChangeHandler = (e) => setData({ ...data, [e.target.id]: e.target.value })

    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-2">
                        <label
                            htmlFor="name"
                            className="form-label"
                        >
                            Name
                        </label>
                        <input

                            type="text"
                            name="name"
                            value={data.name}
                            onChange={onChangeHandler}
                            id="name"
                            className="form-control"
                        />
                        {errors.name && (<div className="text-danger text-sm">{errors.name}</div>)}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    {" "}
                    <div className="mb-2">
                        <label
                            htmlFor="username"
                            className="form-label"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={data.username}
                            onChange={onChangeHandler}
                            id="username"
                            className="form-control"
                        />
                        {errors.username && (<div className="text-danger text-sm">{errors.username}</div>)}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="form-label"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            value={data.email}
                            onChange={onChangeHandler}
                            id="email"
                            className="form-control"
                        />
                        {errors.email && (<div className="text-danger text-sm">{errors.email}</div>)}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    {" "}
                    <div className="mb-2">
                        <label
                            htmlFor="location"
                            className="form-label"
                        >
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            value={data.location}
                            onChange={onChangeHandler}
                            id="location"
                            className="form-control"
                        />
                        {errors.location && (<div className="text-danger text-sm">{errors.location}</div>)}
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="mb-2">
                        <label
                            htmlFor="location"
                            className="form-label"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={onChangeHandler}
                            id="password"
                            className="form-control"
                        />
                        {errors.password && (<div className="text-danger text-sm">{errors.password}</div>)}
                    </div>
                </div>

            </div>

            <button type="submit" className="btn btn-primary">Update</button>
        </>
    )
}
