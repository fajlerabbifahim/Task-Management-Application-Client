import useAxiosPublic from "./useAxiosPublic";
import useUser from "./useUser";
import { useQuery } from "@tanstack/react-query";

const useTask = () => {
  const axiosPublic = useAxiosPublic();
  const [userData] = useUser();

  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tasks", userData?.email],
    queryFn: async () => {
      if (!userData?.email) {
        throw new Error("User email not available");
      }
      const res = await axiosPublic.get(`/task/${userData.email}`);
      return res.data;
    },
    enabled: !!userData?.email,
  });

  // Logging the fetched tasks
  console.log("use task from task hook ", tasks);

  return [tasks, isLoading, refetch];
};

export default useTask;
