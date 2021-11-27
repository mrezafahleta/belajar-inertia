import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import EditUser from "../../Components/EditUser";
import ModalDialog from "../../Components/ModalDialog";
import Pagination from "../../Components/Pagination";
import UserCreate from "../../Components/UserCreate";
import useModalDialog from "../../Hooks/useModalDialog";
import App from "../../Layouts/App";

export default function Index(props) {
    const { data: users, links, from } = props.users;
    const [state, setState] = useState([])
    const [openModalAdd, closeModalAdd, modalAdd] = useModalDialog()
    const [openModalEdit, closeModalEdit, modalEdit] = useModalDialog()
    const [openModalDelete, closeModalDelete, modalDelete] = useModalDialog()

    //  (user) => ini adalah data yg di trigger dri function tadi
    // dan mengahasilkan data user berasarkan id yang diklik
    const openEditDialog = (user) => {
        setState(user)
        openModalEdit()
        // console.log(user);
    }

    const openDeleteDialog = (user) => {
        setState(user)
        openModalDelete()


    }

    const deleteUser = () => {
        Inertia.delete(
            route('users.destroy', state.id), {
            onSuccess: () => closeModalDelete()
        }
        );
    }

    // const [xModalButton, , modalx] = useModalDialog()

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">Card Header</div>
                    <div className="card-body">

                        <ModalDialog size="lg" trigger={modalAdd} title="Tambah Data ">
                            <UserCreate close={closeModalAdd} />
                        </ModalDialog>
                        <ModalDialog size="lg" trigger={modalEdit} title={`Edit Data ${state.name}`}>
                            <EditUser model={state} close={closeModalEdit} />
                        </ModalDialog>
                        <ModalDialog size="sm" trigger={modalDelete} title={`Delete Data ${state.name}`}>
                            <h4>Apakah kamu yakin inging menghapus data</h4>
                            <div className="d-flex justify-content-between">
                                <button onClick={closeModalDelete} className="btn btn-danger">Cancel</button>
                                <button onClick={deleteUser} className="btn btn-primary">Delete</button>
                            </div>
                        </ModalDialog>

                        <button onClick={openModalAdd} className="btn btn-primary mb-1">Add Data</button>

                        <table className="table table-striped table-bordered  table-sm ">
                            <thead className="bg-dark text-white">
                                <tr className="text-sm-center">
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Location</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm-center">
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{from + index}</td>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.location}</td>
                                        <td className="text-center">
                                            <div className="dropdown">
                                                <button
                                                    className="btn p-0 btn-sm "
                                                    type="button"
                                                    id="dropdownMenuButton1"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="bi bi-three-dots-vertical"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                    </svg>
                                                </button>
                                                <ul
                                                    className="dropdown-menu"
                                                    aria-labelledby="dropdownMenuButton1"
                                                >
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                        >
                                                            View
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <button

                                                            className="dropdown-item"
                                                            // ketika ini diklik akan menjalankan function
                                                            // function openEditDialog(user) 
                                                            // user adalah data data berdasarkan id
                                                            onClick={() => openEditDialog(user)}
                                                        >
                                                            Edit
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            className="dropdown-item"
                                                            onClick={() => openDeleteDialog(user)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* cara membuat pagination di inertia */}
                        <Pagination links={links} />
                    </div>
                </div>
            </div>
        </>
    );
}

Index.layout = (page) => <App children={page} title="Users" />;
