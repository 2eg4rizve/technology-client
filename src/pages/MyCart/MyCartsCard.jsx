/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const MyCartsCard = ({myCart}) => {
    
    const { _id,myUserName, myUserEmail, myPhoto, myProductName,myBandName, myType, myPrice, myShortDescription, myRating } = myCart || {};

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
                        <button className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MyCartsCard;