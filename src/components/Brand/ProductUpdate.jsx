/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";


const ProductUpdate = () => {

    const { id } = useParams();
    // console.log("ProductUpdate id : ", id);

    const { user } = useContext(AuthContext);

    const allBrands = useLoaderData();

    const [nowProduct, setNowProduct] = useState([]);

    useEffect(() => {
        const rec = allBrands?.filter(item => item._id == id)
        setNowProduct(rec)
    }, [allBrands, id])

    // const { UserName, userEmail, photo, productName, bandName, type, price, shortDescription, rating } = product || {};

    // console.log(nowProduct[0]?.productName);



    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;

        const UserName = form?.UserName?.value;
        const userEmail = form?.userEmail?.value;
        const photo = form.photo.value;
        const productName = form.productName.value;
        const bandName = form.bandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;


        const newProduct = { UserName, userEmail, photo, productName, bandName, type, price, shortDescription, rating }

        console.log(newProduct);

        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log("update product data : ", data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Wow...',
                        text: 'Product Updated successfully',
                        confirmButtonText: 'cool'

                    })
                }
            })




    }

    return (
        <div>
            <p className="text-5xl font-bold text-center my-[20px] pt-[20px]">Update Product : </p>


            <div className="bg-[#f4F3F0] p-10">


                <form onSubmit={handleUpdate}>


                    {/* User Name  */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='UserName' value={user?.displayName} placeholder="User Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    {/*User Email  */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='userEmail' value={user?.email} placeholder="User Name" className="input input-bordered w-full" />
                        </label>
                    </div>




                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' defaultValue={nowProduct[0]?.photo} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>

                    {/*Product Name */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='productName' defaultValue={nowProduct[0]?.productName} placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    {/* Band Name */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Band Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='bandName' defaultValue={nowProduct[0]?.bandName} placeholder="Band Name" className="input input-bordered w-full" />
                        </label>
                    </div>


                    {/* Type */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='type' defaultValue={nowProduct[0]?.type} placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>


                    {/* Price */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='price' defaultValue={nowProduct[0]?.price} placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>

                    {/* Short description */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Short description </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='shortDescription' defaultValue={nowProduct[0]?.shortDescription} placeholder="Short description " className="input input-bordered w-full" />
                        </label>
                    </div>


                    {/* Rating */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Rating </span>
                        </label>
                        <label className="input-group">
                            <input type="number" step="0.1"  min="0"  max="5" name='rating' defaultValue={nowProduct[0]?.rating} placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>



                    <input type="submit" value="Update" className="btn btn-block btn-primary mt-[20px]" />


                </form>

            </div>

        </div>
    );
};

export default ProductUpdate;