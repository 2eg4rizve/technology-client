import { useEffect, useState } from "react";
import { ScrollRestoration, useParams } from "react-router-dom";
import BdetailsCard from "./BdetailsCard";


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Bdetails = () => {
    const { id } = useParams();


    // const allBrandsImage = useLoaderData();

    // console.log("B all : ",allBrands);

    let img1;
    let img2;
    let img3;
    let img4;
    let img5;
    let img6;

    let bName = "";
    if (id == 1) {
        bName = "Apple";
        img1 = "https://i.ibb.co/BBnbF9t/photo-1611186871348-b1ce696e52c9-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg"

        img2 = "https://i.ibb.co/k0PvsqY/photo-1494173853739-c21f58b16055-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg"

        img3 = "https://i.ibb.co/h27knrV/photo-1531554694128-c4c6665f59c2-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg"

        img4 = "https://i.ibb.co/yP44Zgw/iphone-11-pro-max-silver-smartphone.jpg"
        img5 = "https://i.ibb.co/kXCBVXw/macbook-air-m2-chip-midnight-01-500x500.webp"
        img6 = "https://i.ibb.co/hCWMDhW/01-mai-2020-rostov-russie-black-applewatch-et-airpods-blancs-avec-bo-te-sur-fond-jaune-vif.jpg"


    }
    else if (id == 2) {
        bName = "Hp";
        img1 = " https://i.ibb.co/9ZYBGnt/photo-1604684768394-52a862c2955a-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg"
        img2 = "https://i.ibb.co/HnS9dPM/photo-1589561084283-930aa7b1ce50-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg"
        img3 = "https://i.ibb.co/4gkW1jK/photo-1565375706404-082d37dd1f5d-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg"

        img4 = "https://i.ibb.co/nfmxkX9/15s-fq2597tu-01-500x500.jpg"
        img5 = "https://i.ibb.co/mcVYhnL/hp-15s-spruce-blue-02-500x500.jpg"
        img6 = "https://i.ibb.co/R2TBn4B/135w-05-500x500.jpg"

    }
    else if (id == 3) {
        bName = "Samsung";
        img1 = "https://i.ibb.co/KWjMTYG/photo-1610945415295-d9bbf067e59c-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg"
        img2 = "https://i.ibb.co/GHw5hwq/photo-1597762470488-3877b1f538c6-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg"
        img3 = "https://i.ibb.co/TDfRqZ6/photo-1522202195465-df8a5f26fa15-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg"
        img4 = "https://i.ibb.co/5Rmmr9d/galaxy-a03s-001-500x500.webp"
        img5 = "https://i.ibb.co/Kx6QGtn/c24f390fhw-02-500x500.jpg"
        img6 = "https://i.ibb.co/kB8SX1K/lf22t350fhnxza-500x500.jpg"
    }
    else if (id == 4) {
        bName = "Sony";
        img1 = "https://i.ibb.co/ZWJF9hH/photo-1617468264204-92588bd6485a-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg"
        img2 = "https://i.ibb.co/j4wCHbn/photo-1617468264185-e6535390e9a4-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg"
        img3 = "https://i.ibb.co/WHKS1mm/photo-1577174881658-0f30ed549adc-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg"
        img4 = "https://i.ibb.co/wNcDWt2/bravia-kd-32w830k-01-500x500.webp"
        img5 = "https://i.ibb.co/YhYqD5k/alpha-a6400-1-500x500.jpg"
        img6 = "https://i.ibb.co/d62C9TK/bravia-kd-85x90k-01-500x500.webp"
    }
    else if (id == 5) {
        bName = "Google";
        img1 = "https://i.ibb.co/6NnZygS/photo-1525004351186-bdc426f3efaa-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg"
        img2 = "https://i.ibb.co/qdSL4GL/photo-1636373873339-721de2167b29-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg"
        img3 = "https://i.ibb.co/mtttLXR/photo-1630855796530-b5d8c7737863-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg"
        img4 = "https://i.ibb.co/y0NCYFN/pixel-7-obsidian-500x500.webp"
        img5 = "https://i.ibb.co/1GSfJdh/h2c-nest-mini-001-500x500.jpg"
        img6 = "https://i.ibb.co/Q697hBy/pixel-fold-porcelain-500x500.webp"

    }
    else if (id == 6) {
        bName = "Intel";
        img1 = "https://i.ibb.co/QpRTbbf/photo-1662221070761-2af5c07ed269-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg"
        img2 = "https://i.ibb.co/RpvNHbb/y-Yq-JKJ0-GO64.jpg"
        img3 = "https://i.ibb.co/k3Sz0G6/photo-1602837385569-08ac19ec83af-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg"



    }





    const [allBrands, setAllBrands] = useState();

    useEffect(() => {
        fetch('https://technology-server-7itb96szo-2eg4rizve.vercel.app/products')
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

    if (myBrand?.length === 0) {
        return <div>
            <ScrollRestoration />

            <p className="text-center text-5xl font-bold my-[50px]">{bName} </p>

            <p className="text-center text-4xl font-bold my-[50px]">No Product Found </p>


            <p className="text-center text-4xl font-bold my-[50px]">Sorry , There Are No Product </p>




        </div>
    }
    else {
        return (
            <div>
                <ScrollRestoration />

                <p className="text-center text-5xl font-bold my-[50px]">{bName} </p>




                <Swiper
                    style={{
                        "--swiper-pagination-color": "red",
                        "--swiper-navigation-color": "green",
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"

                >

                    <SwiperSlide><img className='h-[600px] w-full  object-contain' src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[600px] w-full  object-contain' src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[600px] w-full  object-contain' src={img3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[600px] w-full  object-contain' src={img4} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[600px] w-full  object-contain' src={img5} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[600px] w-full  object-contain' src={img6} alt="" /></SwiperSlide>






                </Swiper>
                {/* <p className="text-center text-5xl font-bold my-[50px]">{findBrands?.length}</p> */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-[100px]">
                    {
                        myBrand?.map(product => <BdetailsCard key={product._id} product={product}> </BdetailsCard>)
                    }

                </div>

            </div>
        );

    }
};

export default Bdetails;








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