import React, { Fragment, useState } from 'react';

const InputProduk = () => {

    const [nama, setNama] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { nama };
            const response = await fetch("http://localhost:5000/produk", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);

            window.location = "/";

        } catch (err) {
            console.error(err.message)
        }
    }

        return (
            <Fragment>
                <h1 className="text-center mt-5">List Produk</h1>
                <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                    <input 
                        type="name" 
                        className="form-control" 
                        value={nama} 
                        onChange={e => setNama(e.target.value)}
                    />
                    <button className="btn btn-info">Tambah Produk</button>
                </form>
            </Fragment>
        );
    }

export default InputProduk;
