/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import Swal from "sweetalert2";


const MyCartsCard = ({ myCart ,myCarts,setMyCarts }) => {

    const { _id, myUserName, myUserEmail, myPhoto, myProductName, myBandName, myType, myPrice, myShortDescription, myRating } = myCart || {};

   

    const handleDelete = id => {
        console.log("delete id :  ", id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )

                            const remaining = myCarts.filter(cof => cof._id !== _id)
                            setMyCarts(remaining)
                        }

                    })

            }
        })

    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl mb-[30px]">
                <figure><img className="h-[150px]" src={myPhoto} alt="Movie" /></figure>
                <div className="card-body">

                    <h2 className="card-title">Product Name : {myProductName}</h2>
                    <h2 className="card-title">Brand : {myBandName}</h2>
                    <h2 className="card-title">Type : {myType}</h2>
                    <h2 className="card-title">Price : {myPrice} $</h2>
                    <h2 className="card-title">Description : {myShortDescription} </h2>
                    <h2 className="card-title">Rating : {myRating} </h2>

                    <div className="card-actions justify-end">
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MyCartsCard;