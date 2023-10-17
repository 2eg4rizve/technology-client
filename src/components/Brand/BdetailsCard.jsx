/* eslint-disable no-unused-vars */


const BdetailsCard = ({ product }) => {

    const { UserName, userEmail, photo, productName, bandName, type, price, shortDescription, rating } = product || {};


    return (
        <div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>{bandName}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BdetailsCard;