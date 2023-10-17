import { useParams } from "react-router-dom";

const Bdetails = () => {
    const { id } = useParams();
    console.log("B id : ",id)
    return (
        <div>
            
        </div>
    );
};

export default Bdetails;