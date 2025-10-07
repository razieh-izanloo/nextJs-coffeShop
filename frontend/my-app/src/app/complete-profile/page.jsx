"use client";
import { completeProfile } from "@/services/authServices";
import { useMutation } from "@tanstack/react-query";
import { TextField } from "components/textField";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const CompleteProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({ name, email });
      toast.success(message);
      router.push("/");
    } catch (err) {
      toast.error(err?.response?.data);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={submitHandler}>
      <TextField
        name="name"
        label="نام و نام خانوادگی"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        name="email"
        label="ایمیل"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" disabled={isPending}>
        تایید
      </button>
    </form>
  );
};

export default CompleteProfile