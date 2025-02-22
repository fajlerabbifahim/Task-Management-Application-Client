import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Login = () => {
  const { signinWithGoogle } = useAuth();
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const userData = await signinWithGoogle(googleProvider);
    const user = userData.user;
    const newUser = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    };

    axiosPublic.post("/user", newUser).then(() => {});
    localStorage.setItem("user", "loggedIn");
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2 w-full py-3 border rounded-xl shadow-md bg-white hover:bg-gray-100 transition"
        >
          <FcGoogle size={24} />
          <span className="text-lg font-medium">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
