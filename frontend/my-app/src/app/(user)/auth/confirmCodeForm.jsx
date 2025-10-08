import Image from "next/image";
import OTPInput from "react-otp-input";

export const ConfirmCodeForm = ({
  onSubmit,
  otp,
  setOtp,
  onBack,
  time,
  onResendCode,
  otpResponse,
  isPending,
}) => {
  return (
    <div className="relative">
      <button onClick={onBack} className="cursor-pointer">
        <Image
          src="/images/icons/arrow-up.svg"
          alt="back to login page"
          width="30"
          height="30"
          className="absolute top-[-14px] left-0"
        />
      </button>
      {otpResponse && (
          <button onClick={onBack} className="text-chocolate-700 block cursor-pointer">Edit</button>
      )}
     
      <form onSubmit={onSubmit}>
        <p className="text-chocolate-700">Enter the verification code</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          inputType="number"
          renderSeparator={<span className="text-chocolate-300 mx-1">-</span>}
          renderInput={(props) => (
            <input
              {...props}
              className="border border-chocolate-300 bg-chocolate-50 outline-0 h-9 rounded-md mt-3 mb-1 p-0.5 text-center"
              style={{ width: "36px" }}
            />
          )}
        />
         {time > 0 ? (
        <small className="text-chocolate-700">seconds until resend code{time}</small>
      ) : (
        <button onClick={onResendCode} className="text-chocolate-700 cursor-pointer text-[12px]">Resend code</button>
      )}
        <button type="submit" className="btn btn-chocolate-500 w-full mt-5" disabled={isPending}>
          Confirm
        </button>
        
      </form>
    </div>
  );
};
