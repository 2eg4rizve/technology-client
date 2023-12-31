import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";




const Navbar = () => {


    const { isDarkMode, setIsDarkMode } = useContext(AuthContext);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        // You can save the theme preference to local storage if needed.
    };



    const { user, logOut } = useAuth();

    const navLink = <>

        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold" : ""
            }
        >
            Home
        </NavLink>

        <div className="mr-[20px]"></div>

        <NavLink
            to="/brands"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold" : ""
            }
        >
            All Brand
        </NavLink>

        <div className="mr-[20px]"></div>

        <NavLink
            to="/addProduct"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold" : ""
            }
        >
            Add Product
        </NavLink>

        <div className="mr-[20px]"></div>


        <NavLink
            to="/myCarts"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold" : ""
            }
        >
            My Cart
        </NavLink>

        <div className="mr-[20px]"></div>

        <NavLink
            to="/myProducts"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold" : ""
            }
        >
            My Product
        </NavLink>

        <div className="mr-[20px]"></div>


        <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold" : ""
            }
        >
            About
        </NavLink>

        <div className="mr-[20px]"></div>

        <NavLink
            to="/speciality"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold" : ""
            }
        >
            Speciality
        </NavLink>

        <div className="mr-[20px]"></div>

        <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold" : ""
            }
        >
            Blog
        </NavLink>


        <div className="mr-[20px]"></div>

        <NavLink
            to="/contactUs"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold" : ""
            }
        >
            Contact Us

        </NavLink>







    </>


    return (
        <div className="mb-[10px] sticky top-0 z-50 " style={{ background: isDarkMode ? "#45474B" : "white" }}>

            <div className="navbar bg-base-100 " style={{ background: isDarkMode ? "#45474B" : "white", color: isDarkMode ? "white" : "black" }}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" style={{ background: isDarkMode ? "#45474B" : "white", color: isDarkMode ? "white" : "black" }}>
                            {navLink}
                        </ul>
                    </div>
                    <img className="w-[25px] h-[25px]" src="https://i.ibb.co/cbpN0pr/logo1.jpg" alt="" />
                    <a className="btn btn-ghost normal-case text-xl ml-[-1px]">The Riz  </a>


                </div>
                <div className="navbar-center hidden lg:flex" style={{ background: isDarkMode ? "#45474B" : "white", color: isDarkMode ? "white" : "black" }}>
                    <ul className="menu menu-horizontal px-1 text-[20px]" style={{ background: isDarkMode ? "#45474B" : "white", color: isDarkMode ? "white" : "black" }}>
                        {navLink}
                    </ul>
                </div>

                <div className="navbar-end ">

                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <div className=" flex flex-col justify-center">
                                        <p>{user.displayName}</p>

                                    </div>

                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </label>
                                </div>

                                <div>

                                    <button
                                        onClick={logOut}
                                        className="btn btn-sm  btn-primary bg-[#78C1F3] text-black">Logout
                                    </button>






                                </div>

                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  bg-[#78C1F3] pb-[100px] z-20">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>
                                    <button className="btn btn-sm  btn-ghost">{user.email}</button>

                                </li>
                                <li>
                                    <button
                                        onClick={logOut}
                                        className="btn btn-sm btn-primary bg-[#78C1F3] text-black">Logout</button>
                                </li>



                            </ul>
                        </div>
                            :
                            <div>
                                <Link to='/login'>
                                    <button className="btn btn-sm  btn-primary bg-[#78C1F3] text-black">Login</button>
                                </Link>
                                /
                                <Link to='/register'>
                                    <button className="btn btn-sm text-black btn-primary bg-[#78C1F3]">Register</button>
                                </Link>




                            </div>






                    }




                </div>



            </div>
            {/* <div className="flex justify-end">
                <button
                    className="border-2 border-rose-700 mb-[10px] btn btn-sm flex "
                    style={{ background: isDarkMode ? "black" : "white", color: isDarkMode ? "white" : "black" }}
                    onClick={toggleTheme}

                >
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div> */}

            <div className="flex justify-end">
                <p>Light Mode</p>
                <label className="toggle-switch mx-[5px]">
                    <input
                        type="checkbox"
                        className="toggle"
                        onChange={toggleTheme}
                       
                    />
                    <span className="slider round"></span>
                </label>
                <p>Dark Mode</p>
            </div>


        </div>
    );
};

export default Navbar;