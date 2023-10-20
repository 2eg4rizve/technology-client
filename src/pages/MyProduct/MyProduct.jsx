import { ScrollRestoration, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import MyProductsCard from "./MyProductsCard";


const MyProduct = () => {
    const products = useLoaderData();
    const { user } = useContext(AuthContext);
    const [myProducts, setMyProducts] = useState([]);

    useEffect(() => {
        const rec = products.filter(item => item?.userEmail == user?.email)
        setMyProducts(rec)
    }, [products, user?.email])
    return (
        <div>

            <ScrollRestoration />
            <p className="text-5xl font-bold text-center my-[20px] pt-[20px] mb-[50px]">My Added Products</p>

            {
              myProducts.map(myProduct => <MyProductsCard key={myProduct._id} myProduct={myProduct} ></MyProductsCard>)

            }

        </div>
    );
};

export default MyProduct;