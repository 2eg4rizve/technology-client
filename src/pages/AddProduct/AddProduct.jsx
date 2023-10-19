import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const AddProduct = () => {


    const { user } = useContext(AuthContext);

    // console.log(user)

    const handleAdd = event => {
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



        fetch('http://localhost:5000/products',{
            method: 'POST',
            headers: {
                'content-type': 'application/json' 
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("add coffee : ",data)
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Wow...',
                    text: 'Product add successfully',
                   
                  })
            }
        })
    }
    return (
        <div>
            <p className="text-5xl font-bold text-center my-[20px] pt-[20px]">Add Product</p>

            <div className="bg-[#EEEEEE] p-10">


                <form onSubmit={handleAdd}>


                    {/*User Name  */}
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



                     {/* Photo */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered w-full" required/>
                        </label>
                    </div>

                    {/*Product Name */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='productName' placeholder="Product Name" className="input input-bordered w-full" required />
                        </label>
                    </div>

                    {/* Band Name */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Band Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='bandName' placeholder="Band Name" className="input input-bordered w-full" required />
                        </label>
                    </div>


                    {/* Type */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='type' placeholder="Type" className="input input-bordered w-full" required />
                        </label>
                    </div>


                    {/* Price */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name='price' placeholder="Type" className="input input-bordered w-full" required />
                        </label>
                    </div>

                    {/* Short description */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Short description </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='shortDescription' placeholder="Short description " className="input input-bordered w-full" required />
                        </label>
                    </div>


                    {/* Rating */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Rating </span>
                        </label>
                        <label className="input-group">
                            <input  type="number" step="0.1"  min="0"  max="5" name='rating' placeholder="Rating" className="input input-bordered w-full" required/>
                        </label>
                    </div>






                    <input type="submit" value="Add" className="btn btn-block btn-primary mt-[20px]" />


                </form>

            </div>


        </div>
    );
};

export default AddProduct;




//   {/* Rating */}
//   <div className="form-control w-full mb-4">
//   <label className="label">
//       <span className="label-text">Rating </span>
//   </label>
//   <label className="input-group">
//       <input type="text" name='rating' placeholder="Rating" className="input input-bordered w-full" />
//   </label>
// </div>