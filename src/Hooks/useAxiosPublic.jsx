import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://task-management-application-server-beryl.vercel.app",
  baseURL: "http://localhost:3000",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
