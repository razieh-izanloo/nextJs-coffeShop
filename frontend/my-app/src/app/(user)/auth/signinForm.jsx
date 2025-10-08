import { TextField } from "@/components/textField";

export const SignInForm = (props) => {
  const { phoneNumber, onChange, onSubmit, isPending } = props;

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="Please enter your mobile number"
        name="phoneNumber"
        onChange={onChange}
        value={phoneNumber.phone}
        error={phoneNumber.error && "Enter the contact number correctly"}
      />
      <button
        type="submit"
        disabled={isPending}
        className="btn btn-chocolate-500 w-full mt-5"
      >
        Send OTP
      </button>
    </form>
  );
};
