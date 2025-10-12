import { getAllUsers, getUserProfile } from "@/services/authServices";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = () =>
  useQuery({
    queryFn: getUserProfile,
    queryKey: ["get-user"],
    retry: false,
  });

export const useGetUsers = () =>
  useQuery({
    queryKey: ["get-users"],
    queryFn: getAllUsers,
    retry: false,
    // refetchOnWindowFocus: true,
  });
