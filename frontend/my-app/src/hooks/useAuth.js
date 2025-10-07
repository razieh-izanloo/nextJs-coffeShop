import { getUserProfile } from "@/services/authServices";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = () =>
  useQuery({
    queryFn: getUserProfile,
    queryKey: ["get-user"],
    retry: false,
  });
