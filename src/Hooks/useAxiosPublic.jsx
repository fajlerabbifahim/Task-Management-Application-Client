import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "task-management-application-server-beryl.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
