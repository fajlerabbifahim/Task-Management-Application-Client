import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export default useAuth;
