import { useEffect, useState } from "react";
import BCards from "./BCards";

const Brand = () => {


    const [brands, setBrands] = useState([]);

    useEffect(() => {

        fetch("brandData.json")
            .then(res => res.json())
            .then(data => setBrands(data))

    }, [])


    return (
        <div>

            <p className="text-5xl font-bold text-center my-[40px] pt-[40px]">BRAND</p>

            <div className="grid  grid-cols-1 lg:grid-cols-3 gap-10 ">

                {
                    brands.map(brand => <BCards key={brand.id} brand={brand}></BCards>)


                }







            </div>

        </div>
    );
};

export default Brand;