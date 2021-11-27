import React from "react";
import Navbar from "../Components/Navbar";
import { Head } from "@inertiajs/inertia-react";

export default function Guest({ children, title }) {
    return (
        <div>
            <Navbar />
            <div className="mt-5 d-flex justify-content-center align-items-center">
                <Head title={title} />

                {children}
            </div>
        </div>
    );
}
