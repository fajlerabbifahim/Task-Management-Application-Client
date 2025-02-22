import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://ft-real-state-server.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
