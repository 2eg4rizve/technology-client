/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BCards = ({ brand }) => {
    const { id, name } = brand || {};
    return (
        <div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title">id: {id}</h2>
                    <p>name : {name} </p>

                    <Link to={`/brandDetails/${id}`}>
                        <button className="btn btn-primary">See Detail</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default BCards;