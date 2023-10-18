/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";


const BdetailsCard = ({ product }) => {

    const { _id, UserName, userEmail, photo, productName, bandName, type, price, shortDescription, rating } = product || {};
    // console.log("product code _id : ",_id)


    return (
        <div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Product Name : {productName}</h2>
                    <h2 className="card-title">Brand : {bandName}</h2>
                    <h2 className="card-title">Type : {type}</h2>
                    <h2 className="card-title">Price : {price} $</h2>
                    <h2 className="card-title">Rating : {rating} </h2>

                    <Link to={`/productDetail/${_id}`}>
                        <button className="btn btn-primary w-full">Details</button>
                    </Link>

                    <Link to={`/productUpdate/${_id}`}>
                        <button className="btn btn-primary w-full">Update</button>
                    </Link>








                </div>
            </div>

        </div>
    );
};

export default BdetailsCard;