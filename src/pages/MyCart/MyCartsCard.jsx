/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import Swal from "sweetalert2";


const MyCartsCard = ({ myCart, myCarts, setMyCarts }) => {

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
                fetch(`https://technology-server-7itb96szo-2eg4rizve.vercel.app/carts/${_id}`, {
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

                            const remaining = myCarts.filter(item => item._id !== _id)
                            setMyCarts(remaining)
                        }

                    })

            }
        })

    }

    return (
        <div>
            <div className="flex flex-col shadow-lg p-[20px] mt-[50px] border-2">
                <div className="">
                    <figure><img className="h-[500px] w-full  object-contain" src={myPhoto} alt="Movie" /></figure>
                </div>

                <div className="mt-[30px]">

                    <h2 className="font-bold">Product Name : {myProductName}</h2>
                    <h2 className="font-bold">Brand : {myBandName}</h2>
                    <h2 className="font-bold">Type : {myType}</h2>
                    <h2 className="font-bold">Price : {myPrice} $</h2>
                    <h2 className="font-bold">Description : {myShortDescription} </h2>
                    <h2 className="font-bold">Rating : {myRating} / 5</h2>


                </div>

                <div className="my-[30px]">
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-primary w-full">Delete
                    </button>
                </div>


            </div>


        </div>
    );
};

export default MyCartsCard;