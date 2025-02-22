import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const axiosSecure = useAxiosPublic();
  const { user } = useAuth();

  if (!user || !user.email) {
    console.log("User not logged in yet");
    return [null, true]; // Return loading state
  }

  console.log("User Info:", user.email);

  const { data: userData, isLoading } = useQuery({
    queryKey: ["userData", user.email], // user.email sure ache
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user.email}`);
      return res.data;
    },
    enabled: !!user.email, // Only run if user.email exists
  });

  console.log("Fetched User Data:", userData);

  return [userData, isLoading];
};

export default useUser;
