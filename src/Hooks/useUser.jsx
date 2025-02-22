import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const axiosSecure = useAxiosPublic();
  const { user, loading } = useAuth();

  const isAuthLoading = loading || !user?.email;

  const { data: userData, isLoading: queryLoading } = useQuery({
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  return [userData || null, isAuthLoading || queryLoading];
};

export default useUser;
