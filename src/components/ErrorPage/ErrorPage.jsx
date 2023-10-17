import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>

            <h2 className="mb-[40px] ml-[10px]">Oops!!</h2>

            <h2 className="mb-[40px] ml-[10px]"> Page Not Found!!</h2>

            <Link to="./"><button className="btn btn-primary ml-[10px]">Go back To Home</button></Link>



        </div>
    );
};

export default ErrorPage;