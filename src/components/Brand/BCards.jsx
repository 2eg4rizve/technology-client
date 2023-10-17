/* eslint-disable react/prop-types */


const BCards = ({ brand }) => {
    const { id, name } = brand || {};
    return (
        <div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title">id: {id}</h2>
                    <p>name : {name} </p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See Detail</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BCards;