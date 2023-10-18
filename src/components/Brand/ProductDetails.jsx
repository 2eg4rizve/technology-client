import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const ProductDetails = () => {

    const { id } = useParams();
    // console.log("ProductDetails id : ", id);

    const allBrands = useLoaderData();

    const [nowProduct, setNowProduct] = useState([]);

    useEffect(() => {
        const rec = allBrands.filter(item => item._id == id)
        setNowProduct(rec)
    }, [allBrands, id])

    //  const newProduct = { UserName, userEmail, photo, productName, bandName, type, price, shortDescription, rating }

    // console.log("nowProduct : ",nowProduct);
    // console.log("nowProduct : ",nowProduct[0]);
    // console.log("nowProduct : ",nowProduct[0]?.bandName);

    return (
        <div>
            <p>{id}</p>
            <img className="w-full h-[300px]" src={nowProduct[0]?.photo} alt="" />
            <p>Product Name : {nowProduct[0]?.productName}</p>
            <p>Band Name : {nowProduct[0]?.productName}</p>
            <p>Type : {nowProduct[0]?.type}</p>
            <p>Price : {nowProduct[0]?.price} $</p>
            <p>Description : {nowProduct[0]?.shortDescription}</p>
            <p>Rating : {nowProduct[0]?.rating} </p>

        </div>
    );
};

export default ProductDetails;