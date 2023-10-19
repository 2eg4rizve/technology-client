import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const DarkMode = () => {

    const { isDarkMode, setIsDarkMode } = useContext(AuthContext);


    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        // You can save the theme preference to local storage if needed.
    };

    return (
        <div className="flex justify-end sticky top-24 z-50">

            <button
            className="border-2 border-rose-700"
            style={{ background: isDarkMode ? "black" : "white" , color: isDarkMode ? "white" : "black" } }
                onClick={toggleTheme}
               
            >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>

        </div>
    );
};

export default DarkMode;