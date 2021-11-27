import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Head, usePage } from "@inertiajs/inertia-react";
import toast, { Toaster } from "react-hot-toast";

export default function App({ children, title }) {
    const { flash } = usePage().props;

    flash.type &&
        toast.success(flash.message, {
            duration: 3000,
        });

    return (
        <div>
            <Head title={title} />
            <Navbar />
            <div className="pt-3">
                <Toaster position="top-center" />
            </div>
            {children}
        </div>
    );
}
