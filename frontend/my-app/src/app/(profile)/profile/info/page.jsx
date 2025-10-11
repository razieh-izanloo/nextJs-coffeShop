"use client";
import { TextField } from "@/components/textField";
import { useGetUser } from "@/hooks/useAuth";
import { updateProfile } from "@/services/authServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const InfoProfile = () => {
  const { data, isLoading } = useGetUser();
  const { user } = data || {};
  let updateUser = {};

  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({});
  const { isPending, mutateAsync } = useMutation({
    mutationFn: updateProfile,
  });

  useEffect(() => {
    if (user && Object.keys(user).length) {
      setFormData(updateUser);
    }
  }, [user]);

  if (isLoading) return <>loading....</>;
  const includeKey = ["name", "email", "biografy", "phoneNumber"];

  includeKey.forEach((item) => (updateUser[item] = user[item]));

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync(formData);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
      toast.success(message);
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <>
      <h1>اطلاعات کاربری</h1>
      {Object.keys(user).length && (
        <form onSubmit={submitHandler}>
          {Object.keys(updateUser).map((item) => (
            <TextField
              name={item}
              key={item}
              label={item}
              value={formData[item] || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          ))}
          <button type="submit" disabled={isLoading || isPending}>
            تایید
          </button>
        </form>
      )}
      {/* {updateUser.name} */}
    </>
  );
};

export default InfoProfile;
