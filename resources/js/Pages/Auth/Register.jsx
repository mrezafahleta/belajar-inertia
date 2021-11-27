import { Link } from "@inertiajs/inertia-react";
import React from "react";
import Guest from "../../Layouts/Guest";

export default function Register() {
    return (
        <>
            Register
            <Link href="/login">Login</Link>
        </>
    );
}

Register.layout = (page) => <Guest children={page} title="Register" />;
