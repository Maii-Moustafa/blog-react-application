import { Link } from "react-router-dom";
import { useLogOut } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function NavBar() {
  const { logOut } = useLogOut();
  const { user } = useAuthContext();

  const handleClick = () => {
    logOut();
  };
  return (
    <>
      <div className="navbar bg-primary fixed top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Homepage</Link>
              </li>
              {/* <li><a>Portfolio</a></li>
        <li><a>About</a></li> */}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/" className=" normal-case text-xl">
            <div></div>
            <img className=" w-16" src="../src/assets/images/logo.png" alt="" />
            {/*------------------------------------------------------------------------------------- TODO: cursive font onthe logo :Gold rainbow */}
          </Link>
        </div>
        <div className="navbar-end">
          {/*------------------------------------------------------------------------------------- TODO: Dark & light mode */}
          <button
            className="btn btn-ghost btn-circle tooltip tooltip-bottom "
            data-tip="WIP :)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 tooltip  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="../src/assets/images/avatar1.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/*------------------------------------------------------------------------------------- TODO: Profile*/}
              <li className="tooltip tooltip-bottom " data-tip="WIP :)">
                <a className="justify-between ">
                  Profile
                  {/* <span className="badge">New</span> */}
                </a>
              </li>
              {!user && (
                <>
                  <li>
                    <Link to="/register">register</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}

              {user && (
                <li>
                  <span>{user.email}</span>

                  <button onClick={handleClick}>Logout</button>
                  <a></a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
