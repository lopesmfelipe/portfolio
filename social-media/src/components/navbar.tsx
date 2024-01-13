import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to={"/"} className="link-text">
          {"Home | "}
        </Link>
        {!user ? (
          <Link to={"/login"} className="link-text">
            {"Login | "}
          </Link>
        ) : (
          <Link to={"/createpost"} className="link-text">
            {"Create-Post"}
          </Link>
        )}
      </div>

      <div className="user">
        {user && (
          <>
            <p> {user?.displayName} </p>
            <img
              src={auth.currentUser?.photoURL || ""}
              width="100"
              height="100"
            />
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
      </div>
    </div>
  );
};
