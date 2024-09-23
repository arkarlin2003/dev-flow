import { SignedOut, SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div>
      <SignedOut>
        <SignUp />
      </SignedOut>
    </div>
  );
};

export default SignUpPage;
