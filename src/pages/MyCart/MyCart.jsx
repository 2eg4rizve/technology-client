import { useContext, useEffect, useState } from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import MyCartsCard from "./MyCartsCard";


const MyCart = () => {
    

    const carts = useLoaderData();
    // console.log("all carts : ",carts);

    const { user } = useContext(AuthContext);
    // console.log("user : ",user);
    // console.log(user.email);

    const [myCarts, setMyCarts] = useState([]);

    useEffect(() => {
        const rec = carts.filter(item => item?.myUserEmail == user?.email)
        setMyCarts(rec)
    }, [carts, user?.email])

    // const rec = carts.filter(item => item?.myUserEmail == user?.email)
    // setMyCarts(rec);

  
    // console.log("myCarts item : ",myCarts);
    // const [newMyCarts,setNewMyCarts] = useState(myCarts)



    return (
        <div>
            <ScrollRestoration />
            <p className="text-5xl font-bold text-center my-[20px] pt-[20px]">My Carts</p>

            {
                myCarts.map(myCart => <MyCartsCard key={myCart._id}  myCart={myCart} myCarts={myCarts} setMyCarts={setMyCarts} > </MyCartsCard>)

            }

        </div>
    );
};

export default MyCart;