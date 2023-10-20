/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const MyProductsCard = ({ myProduct }) => {

    const { _id, UserName, userEmail, photo, productName, bandName, type, price, shortDescription, rating } = myProduct || {};

    return (
        <div>

            <div className="card card-compact bg-base-100 shadow-xl mt-[50px] border-2">
                <figure><img className="h-[200px] w-full  object-contain" src={photo} alt="Shoes" /></figure>
                <div className="card-body  mt-[20px] ">
                    <h2 className="card-title">Product Name : {productName}</h2>
                    <h2 className="card-title">Brand : {bandName}</h2>
                    <h2 className="card-title">Type : {type}</h2>
                    <h2 className="card-title">Price : {price} $</h2>
                    <h2 className="card-title">Description : {shortDescription} $</h2>
                    
                    <h2 className="card-title pb-[20px]">Rating : {rating} / 5</h2>

                    <button className="btn btn-primary mb-[10px]">DELETE</button>
                    <button className="btn btn-primary mb-[10px]">Update</button>

                   








                </div>
            </div>

        </div>
    );
};

export default MyProductsCard;