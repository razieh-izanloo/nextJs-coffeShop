"use client";
import { useEffect, useState } from "react";
import { SignInForm } from "./signinForm";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { checkOtp, getOtp } from "@/services/authServices";
import { ConfirmCodeForm } from "./confirmCodeForm";
import { useRouter } from "next/navigation";
import { Steam } from "@/components/coffesSteam/steam";
import Image from "next/image";

const RESEND_TIME = 90;

const AuthPage = () => {
  //step 1--------------------------
  const [phoneNumber, setPhoneNumber] = useState({ phone: "", error: false });
  const [step, setStep] = useState(1);
  const [time, setTime] = useState(0);

  const [otp, setOtp] = useState("");

  const {
    data: otpResponse,
    error,
    isPending,
    mutateAsync: mutateGetOtp,
  } = useMutation({
    mutationFn: getOtp,
  });

  const phoneNumberHandler = (e) => {
    setPhoneNumber((prev) => ({ ...prev, phone: e.target.value }));
  };

  const getCodeConfirm = async (e) => {
    e.preventDefault();
    const regexPhoneNumber = new RegExp(
      /^(098|0098|98|\+98|0)?9(0[0-5]|[1 3]\d|2[0-3]|9[0-9]|41)\d{7}$/g
    );

    if (!regexPhoneNumber.test(phoneNumber.phone)) {
      setPhoneNumber((prev) => ({ ...prev, error: true }));
    } else {
      if (phoneNumber.error)
        setPhoneNumber((prev) => ({ ...prev, error: false }));
      try {
        await mutateGetOtp({ phoneNumber: phoneNumber.phone });
        toast.success(`The code was sent to the number ${phoneNumber.phone}`);
        setStep(2);
        setTime(RESEND_TIME);
        setOtp("");
      } catch (err) {
        toast.error(err?.response?.data);
      }
    }
  };

  //step 2 --------------------------------
  const router = useRouter();
  const { mutateAsync: mutateCheckOtp, isPending: isLoadingSendCode } =
    useMutation({
      mutationFn: checkOtp,
    });

  const sendConfirmCode = async (e) => {
    e.preventDefault();
    try {
      const { user } = await mutateCheckOtp({
        phoneNumber: phoneNumber.phone,
        otp,
      });
      toast.success("welcome!");
      router.push(user.isActive ? "/homePage" : "/complete-profile");
    } catch (err) {
      toast.error("Invalid confirm code!");
    }
  };

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const onResendCode = () => {
    getCodeConfirm();
  };

  //end step2--------------------------------
  const renderStep = (step) => {
    switch (step) {
      case 1:
        return (
          <SignInForm
            phoneNumber={phoneNumber}
            onChange={phoneNumberHandler}
            onSubmit={getCodeConfirm}
            isPending={isPending}
          />
        );

      case 2:
        return (
          <ConfirmCodeForm
            otp={otp}
            setOtp={setOtp}
            onSubmit={sendConfirmCode}
            onBack={() => setStep((s) => s - 1)}
            time={time}
            onResendCode={onResendCode}
            otpResponse={otpResponse}
            isPending={isLoadingSendCode}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className="bg-chocolate-700 h-screen flex flex-col justify-center items-center">
      <div className="relative">
        <Steam />
        <Image src="/images/cup.png" alt="cup image" width="150" height="150" />
      </div>
      <h1 className="text-chocolate-100 mb-5">Cofforia</h1>
      <div className="bg-chocolate-200 w-fit p-5 rounded-[8px]">
        {renderStep(step)}
      </div>
    </div>
  );
};

export default AuthPage;
