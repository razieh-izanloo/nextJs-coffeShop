"use client";
import { Steam } from "@/components/coffesSteam/steam";
import { completeProfile } from "@/services/authServices";
import { useMutation } from "@tanstack/react-query";
import { TextField } from "components/textField";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const CompleteProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email.value || !/^\S+@\S+\.\S+$/.test(email.value))
      setError("Field is invalid");
    else {
      try {
        const { message } = await mutateAsync({ name, email });
        toast.success(message);
        router.push("/");
      } catch (err) {
        toast.error(err?.response?.data);
      }
      if (error) setError("");
    }
  };

  return (
    <div className="bg-chocolate-700 h-screen flex flex-col justify-center items-center">
      <div className="relative">
        <Steam />
        <Image src="/images/cup.png" alt="cup image" width="150" height="150" />
      </div>
      <strong className="text-chocolate-100 text-4xl font-bold mb-5">
        Cofforia
      </strong>
      <div className="bg-chocolate-200 w-fit p-5 rounded-[8px]">
      <h1 className="text-chocolate-300 text-2xl">Complete profile</h1>
        <form className="flex flex-col gap-3" onSubmit={submitHandler}>
          <TextField
            name="name"
            label="Name and surname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={(error && !name) && error}
          />
          <TextField
            name="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={((error && name) || !email) && error}
          />
          <button
            type="submit"
            className="btn btn-chocolate-500 w-full mt-5"
            disabled={isPending}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfile;
