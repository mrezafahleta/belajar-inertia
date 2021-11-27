import React from "react";
import App from "../Layouts/App";
const Dashboard = () => {
    return (
        <>
            <div className="container mt-3">Dashbaord</div>
        </>
    );
};

Dashboard.layout = (page) => <App children={page} title="Dashboard" />;

export default Dashboard;
