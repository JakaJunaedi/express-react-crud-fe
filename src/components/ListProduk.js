import React, { Fragment, useEffect, useState } from 'react';
import EditProduk from "./EditProduk";

export const ListProduk = () => {

    const [ nama, setNama ] = useState([])

    // Delete Produk //
    const deleteNampro = async (id) => {
        try {
            const deleteNampro = await fetch(`http://localhost:5000/produk/${id}`, {
                method: "DELETE"
            });

            setNama(nama.filter(nampro => nampro.produk_id !== id))
            console.log(deleteNampro);
        
        } catch (err) {
            console.error(err.massage)
        }
    } 

    const getProduk = async () => {
        try {
            const response = await fetch("http://localhost:5000/produk")
            const jsonData = await response.json();
            console.log(jsonData);

            setNama(jsonData);

        } catch (err) {
            console.error(err.massage)
        }
    }

    useEffect(() => {
       getProduk(); 
    }, []);

    console.log(nama);
    return (
        <Fragment>
            {" "}
            <table className="table mt-5">
                <thead className="thead-dark text-center">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nama Produk</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Hapus</th>
                    </tr>
                </thead>
                <tbody>
                    {nama.map(nampro => (
                        <tr key={nampro.produk_id}>
                            <th></th>
                            <td>{nampro.nama}</td>
                            <td><button className="btn btn-default"><EditProduk nampro={nampro} /></button></td>
                            <td><button className="btn btn-danger" onClick={() => deleteNampro(nampro.produk_id)}>Hapus</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}
