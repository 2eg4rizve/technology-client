/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BCards = ({ brand }) => {
    const { id, name,imagelogo } = brand || {};
    return (
        <div>

            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="h-[200px] w-full" src={imagelogo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">id: {id}</h2>

                    <p className="text-[25px] font-bold">Name : {name} </p>

                    <Link to={`/brandDetails/${id}`}>
                        <button className="btn btn-primary mt-[15px]">See Detail</button>
                    </Link>

                    
                </div>
            </div>

        </div>
    );
};

export default BCards;