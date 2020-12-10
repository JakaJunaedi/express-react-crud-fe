import React, { Fragment, useState } from 'react';

const EditProduk = ({nampro}) => {
    console.log(nampro);

    const [ nama, setNama ] = useState(nampro.nama);

    // Button submit edit
    const updateNama = async e => {
        e.preventDefault();
        try {
            const body = { nama };
            const response = await fetch(`http://localhost:5000/produk/${nampro.produk_id}`, {
                method: "PUT",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(body)
            });
            // cek status ok
            console.log(response);

            // redirect
            window.location = "/"

        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            
            {/** --- Button Modal ---- */}
            <button 
                type="button" 
                className="btn btn-warning" 
                data-toggle="modal" 
                data-target={`#id${nampro.produk_id}`}
            >
                Edit Produk
            </button>

            <div className="modal" id={`id${nampro.produk_id}`}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        {/** ---- Modal Header --- */}
                        <div className="modal-header">
                            <h4 className="modal-title">Modal Heading</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        {/** ----- Modal Body ---- */}
                        <div className="modal-body">
                            <input type="text" className="form-control" value={nama}
                            onChange={e => setNama(e.target.value)}
                            />
                        </div>

                        {/* ----- Modal Footer ---*/}
                        <div className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-info" 
                                data-dismiss="modal"
                                onClick={e => updateNama(e)}
                            >
                                Edit
                            </button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default EditProduk;