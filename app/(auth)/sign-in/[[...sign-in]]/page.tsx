import { SignedOut, SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </div>
  );
};

export default SignInPage;
