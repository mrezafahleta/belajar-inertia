import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import App from "../Layouts/App";

const Home = (props) => {
    const { auth } = usePage().props;

    return (
        <>
            <div className="container mt-3">
                <div className="card">
                    <div className="card-body">Inertia Web Developer</div>
                </div>
            </div>
        </>
    );
};

Home.layout = (page) => <App children={page} title="Home" />;

export default Home;
