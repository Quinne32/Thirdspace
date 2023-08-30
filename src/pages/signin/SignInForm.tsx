import Link from "next/link";
import { BASE_URL } from "../../utils/constants";
import React, { useState } from "react";
import { useRouter } from 'next/router';

type Props = {};

const SignInForm = (props: Props) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    checkFormValidity();
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    checkFormValidity();
  };

  const checkFormValidity = () => {
    if (email.trim() !== "" && email.includes("@") && password.trim() !== "") {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

    console.log(email, "email");
    console.log(password, "password");
  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify({email : email, password : password}),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (response) {       
        const bearerToken = data.token; // Extract the token from the response
        localStorage.setItem('bearerToken', bearerToken); // Store the token securely
        router.push('/available-bounties');
        console.log(response,"data"); 
        return bearerToken;
    }

      // setEmail("");
      // setPassword("");
      //setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={(e) => formSubmitHandler(e)}
      action="" className="font-dmSans">
        <div className="space-y-[8px] md:space-y-[16px] ">
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="email"
              className="font-normal md:font-medium text-base md:text-lg"
            >
              Email
            </label>
            <input
              value={email}
              onChange={emailChangeHandler}
              type="email"
              name="email"
              id="email"
              required
              placeholder="Type here"
              className="signUpInput"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label
              htmlFor="password"
              className="font-normal md:font-medium text-base md:text-lg"
            >
              Password
            </label>
            <input
              value={password}
              onChange={passwordChangeHandler}
              type="password"
              name="password"
              id="password"
              required
              placeholder="Type here"
              className="signUpInput"
            />
          </div>
        </div>

        <button
            type="submit"
            className="mt-[30px] md:mt-[50px]  item just hover:btnBackgroundGradient bg-[#141414] cursor-pointer rounded-[8px] h-[50px] w-full  font-semibold  text-base md:text-lg "
            disabled={!isFormValid}
          >
            Proceed
          </button>

        <div className="flex flex-row  gap-2 items-center justify-center mt-4 text-base">
          <p className="font-normal text-base md:font-medium md:text-lg">
            {" "}
            Don’t have an account?{" "}
          </p>
          <Link href="/signup" className="font-semibold text-base md:text-lg">
            Sign Up
          </Link>
        </div>

        {isLoading && (
          <div className="flex items-center justify-center -mt-80 ">
            <div className="h-36 w-36 relative">
              <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
                <div className="w-36 h-36 border-4 buttonGradient rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
        )}
      </form>
    </>
  );
};

export default SignInForm;
