import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BdetailsCard from "./BdetailsCard";

const Bdetails = () => {
    const { id } = useParams();


    // const allBrands = useLoaderData();

    // console.log("B all : ",allBrands);

    let bName = "";
    if (id == 1) {
        bName = "Apple";
    }
    else if (id == 2) {
        bName = "Hp";
    }
    // console.log("B id : ", id);
    // console.log(bName);

    // const [findBrands, setFindBrands] = useState();

    // useEffect(() => {
    //     const rec = allBrands?.filter(item => item.name == bName);

    //     setFindBrands(rec);

    // }, [id, allBrands, bName])

    // console.log("findBrands : ", findBrands)



    // const [myBrand, setMyBrand] = useState();


    // const rec = findBrands?.filter(item => item.name == bName);

    // setMyBrand(rec);


    const [allBrands, setAllBrands] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setAllBrands(data))
    }, [id])

    // console.log(allBrands);


    const [myBrand, setMyBrand] = useState();

    useEffect(() => {
        const rec = allBrands?.filter(item => item.bandName == bName);

        setMyBrand(rec);


    }, [id, allBrands, bName])

    // console.log("my-brand", myBrand);










    return (
        <div>

            <p className="text-center text-5xl font-bold my-[50px]">{bName} {id}</p>
            {/* <p className="text-center text-5xl font-bold my-[50px]">{findBrands?.length}</p> */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    myBrand?.map(product => <BdetailsCard key={product._id} product={product}> </BdetailsCard>)
                }

            </div>

        </div>
    );
};

export default Bdetails;