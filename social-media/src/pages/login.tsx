import { useNavigate } from "react-router-dom";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

export const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };

  return (
    <div className="login-container">
      Login page
      <p> Sign In With Google To Continue </p>
      <button onClick={signInWithGoogle} className="sign-in-button"> Sign In With Google </button>
    </div>
  );
};
