import { arrowUp, userSignIn, signUp, gitHub } from "@/assets";
import Logo from "@/components/ui/Logo";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "../ui/Modal";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
useState;

type Props = {};

const Home = (props: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <div className="">
        <Head>
          <title>ThirdSpace </title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/Logo.svg" />
        </Head>

        <div className="">
          <Logo />

          <h1 className="text-center text-white font-medium text-8xl  mt-20 font-roboto">
            Earn Rewards for <br /> Your Skills
          </h1>

          <p className="text-center text-white font-normal  mt-6 font-inter  text-sm   ">
            Connect your GitHub account, join bounties, and earn rewards for
            your coding skills. Our smart <br /> contracts ensure fair payouts
            and easy payment processing
          </p>

          <div className="flex flex-col md:flex-row text-white gap-10 justify-center mt-10">
            <Link href="/#sigUpModal" className="  flex   btnBorderGradient2  ">
              <button
                className="flex justify-center items-center mx-auto gap-8"
                onClick={() => setShowModal(true)}
              >
                <p className="">Sign In</p>

                <div className="btnBackgroundGradient rounded-full w-[45px] h-[45px] items-center flex justify-end ">
                  <BsArrowUpRight className=" w-6 h-6  mx-auto flex" />
                </div>
              </button>
            </Link>
            <Link
              href="/#sigUpModal"
              className="btnBackgroundGradient flex w-[170px] h-[65px] rounded-[50px]"
            >
              <button
                className="flex justify-center items-center mx-auto gap-8"
                onClick={() => setShowModal(true)}
              >
                <p>Sign Up</p>
                <div className="bg-black rounded-full w-[45px] h-[45px] items-center flex justify-end ">
                  <BsArrowUpRight className=" w-6 h-6  mx-auto flex" />
                </div>
              </button>
            </Link>
          </div>

          {/* GitHub SignUp Modal */}
          <div id="sigUpModal">
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
              <div className="mx-auto items-center text-center text-white ">
                <h2 className=" font-bold text-3xl text-center font-roboto mt-10">
                  Sign Up
                </h2>

                <p className="mt-5  font-roboto">
                  Seamlessly integrate your GitHub account with our platform.
                  Sign in and start <br /> completing bounties to earn rewards
                  for your coding skills
                </p>

                <h3 className="font-medium text-xl font-roboto mt-20 mb-10">
                  Continue with
                </h3>

                <div className="border-2 border-[#1F1F1F]  rounded-[8px]  w-[500px] h-[62px] mx-auto items-center flex justify-center mb-32 ">
                  <Link href="/github-auth" className=" ">
                    <button className=" text-white flex justify-center items-center gap-8 ">
                      <BsGithub className=" w-10 h-10" />
                      <p className="font-normal text-xl font-roboto">Github</p>
                    </button>
                  </Link>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
