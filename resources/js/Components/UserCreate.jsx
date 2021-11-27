import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import FormUser from "./FormUser";
import Modal from "./ModalDialog";

export default function UserCreate({ close }) {
    // current state memasukkan data  data input ke data




    const { data, setData, post, errors, reset } = useForm({
        name: "",
        email: "",
        username: "",
        location: "",
        email_verified_at: "",
        password: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route('users.store'), {
            data, onSuccess: () => {
                reset(), close()
            }
        });

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                {/* <FormUser errors={errors} data={data} submit={"Update"} /> */}
                <FormUser {...{ errors, data, setData, submit: 'Create' }} />
            </form>

        </div>
    );
}
