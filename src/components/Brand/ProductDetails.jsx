import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";


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

    const { user } = useContext(AuthContext);


    const handleAddToCart = (id) => {
        console.log("handleAddToCart id : ", id);

        event.preventDefault();

        const myUserName = user?.displayName;
        const myUserEmail = user?.email;
        const myPhoto = nowProduct[0]?.photo;
        const myProductName = nowProduct[0]?.productName;
        const myBandName = nowProduct[0]?.bandName;
        const myType = nowProduct[0]?.type;
        const myPrice = nowProduct[0]?.price
        const myShortDescription = nowProduct[0]?.shortDescription
        const myRating = nowProduct[0]?.rating


        const newProduct = { myUserName, myUserEmail, myPhoto, myProductName, myBandName, myType, myPrice, myShortDescription, myRating }

        console.log(newProduct);


        fetch('https://technology-server-koh3hphxd-2eg4rizve.vercel.app/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log("add my cart : ", data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Wow...',
                        text: 'Product Add In Cart Successfully',

                    })
                }
            })

    }



    return (
        <div>
            {/* <p>{id}</p> */}
            <img className="w-full h-[300px]" src={nowProduct[0]?.photo} alt="" />
            <p className="mt-[50px] font-bold text-[20px] ml-[15px]" >Product Name : {nowProduct[0]?.productName}</p>
            <p className="mt-[10px] font-bold text-[20px] ml-[15px]">Band Name : {nowProduct[0]?.bandName}</p>
            <p className="mt-[10px] font-bold text-[20px] ml-[15px]">Type : {nowProduct[0]?.type}</p>
            <p className="mt-[10px] font-bold text-[20px] ml-[15px]">Price : {nowProduct[0]?.price} $</p>
            <p className="mt-[10px] font-bold text-[20px] ml-[15px] w-full">Description : {nowProduct[0]?.shortDescription}</p>
            <p className="mt-[10px] font-bold text-[20px] ml-[15px]">Rating : {nowProduct[0]?.rating} </p>




            <button onClick={() => handleAddToCart(id)} className="btn btn-primary w-full my-[100px]">Add to Cart</button>



        </div>
    );
};

export default ProductDetails;