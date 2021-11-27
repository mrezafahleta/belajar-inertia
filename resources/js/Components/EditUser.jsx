import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import FormUser from "./FormUser";
import Modal from "./ModalDialog";

// modal disini akan menerima state yg berisi user tadi
// jadi model skrng berisi data yang dipassing berdasarkan id
export default function EditUser({ close, model }) {
    // current state memasukkan data  data input ke data




    const { data, setData, put, errors, reset } = useForm({
        name: model.name,
        email: model.email,
        username: model.username,
        location: model.location,
        email_verified_at: model.email_verified_at,

    });

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('dataa');
        put(route('users.update', model.id), {
            data, onSuccess: () => {
                reset(), close()
            }
        });

    }

    useEffect(() => {
        setData({
            name: model.name,
            email: model.email,
            username: model.username,
            location: model.location,
            email_verified_at: model.email_verified_at,
        })
    }, [model])

    return (
        <div>
            <form onSubmit={submitHandler}>
                <FormUser errors={errors} setData={setData} data={data} submit={"Update"} />
            </form>

        </div>
    );
}
