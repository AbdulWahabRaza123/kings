"use client";
import { ArrowLeft, Check, EyeIcon, EyeOff } from "lucide-react";
import { PrimaryBtn } from "../ui/buttons/primary-btn";
import { TextInput } from "../ui/inputs/text-input";
import { SecondaryBtn } from "@/components/ui/buttons/secondary-btn";
import { ResetPasswordDialog } from "@/components/ui/dialogs/onboarding/reset-password";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import Image from "next/image";
import { SignInWrapper } from "../ui/wrappers/signin-wrapper";
export const SigninProfile = ({
  setIsSignIn,
}: {
  setIsSignIn: (value: boolean) => void;
}) => {
  const [pageNo, setPageNo] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [code, setCode] = useState("");
  const [openResetPass, setOpenResetPass] = useState(false);
  const nextPageNo = () => {
    setPageNo(pageNo + 1);
  };
  const prevPageNo = () => {
    setPageNo(pageNo - 1);
  };
  return (
    <>
      <ResetPasswordDialog open={openResetPass} setOpen={setOpenResetPass} />
      <section className="w-[440px]">
        {pageNo === 0 && (
          <div>
            <div className="flex flex-col gap-3 text-center">
              <h1 className="text-[24px] text-primary font-[600]">
                Welcome back
              </h1>
              <p className="text-[14px] text-secondary">
                Log in to your Power King Business account.
              </p>
            </div>
            <div className="mt-10 flex flex-col items-center gap-4">
              <TextInput
                value={email}
                setValue={setEmail}
                type="email"
                title="Business email"
                placeholder=""
                inputStyle="input"
              />
              <div className="relative w-full">
                <TextInput
                  value={password}
                  setValue={setPassword}
                  type={show ? "text" : "password"}
                  title="Password"
                  placeholder=""
                  inputClassName="relative w-full"
                  inputStyle="input"
                />
                {show ? (
                  <EyeIcon
                    onClick={() => {
                      setShow(!show);
                    }}
                    className="absolute right-[10px] top-[34px] text-gray-400 cursor-pointer"
                  />
                ) : (
                  <EyeOff
                    onClick={() => {
                      setShow(!show);
                    }}
                    className="absolute right-[10px] top-[34px] text-gray-400 cursor-pointer"
                  />
                )}
              </div>
              <p
                onClick={nextPageNo}
                className="text-main-primary text-[12px] cursor-pointer"
              >
                Forget Password?
              </p>
              <PrimaryBtn onClick={() => {}} className="text-white py-3">
                Login
              </PrimaryBtn>
              <SecondaryBtn
                onClick={() => {
                  setIsSignIn(false);
                }}
                className="text-black py-3"
              >
                Set up business account
              </SecondaryBtn>
            </div>
          </div>
        )}
        {pageNo === 1 && (
          <div>
            <SignInWrapper
              prevPageNo={prevPageNo}
              pageNo={pageNo}
              title="Forgot password"
              subTitle="Enter business email"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor."
            >
              <div className="mt-10 flex flex-col items-center gap-6">
                <TextInput
                  value={email}
                  setValue={setEmail}
                  type="email"
                  title="Business email"
                  placeholder=""
                  inputStyle="input"
                />
                <PrimaryBtn onClick={nextPageNo} className="text-white py-3">
                  Continue
                </PrimaryBtn>
              </div>
            </SignInWrapper>
          </div>
        )}
        {pageNo === 2 && (
          <div>
            <SignInWrapper
              prevPageNo={prevPageNo}
              pageNo={pageNo}
              title="Forgot password"
              subTitle="Verify your business email"
              desc="Enter the verification code sent to."
              showOtpEmail={true}
            >
              <div className="mt-10 flex flex-col items-center gap-6">
                <div className="flex flex-col items-start gap-1">
                  <p className="font-[500] text-[14px]">Verification code</p>
                  <InputOTP
                    maxLength={6}
                    value={code}
                    onChange={(value) => {
                      setCode(value);
                    }}
                  >
                    <InputOTPGroup className="flex items-center justify-center gap-2">
                      {[0, 1, 2, 3, 4, 5].map((val) => {
                        return (
                          <InputOTPSlot
                            key={val}
                            index={val}
                            className=" bg-white border-[1px] border-gray-400/40 h-[64px] w-[55px] text-[20px] font-[400]"
                          />
                        );
                      })}
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                  <p className="text-[12px] text-secondary">
                    Didn't receive the code?
                  </p>
                  <p className="text-[12px] text-main-primary cursor-pointer">
                    Resend code in 60s
                  </p>
                </div>
                <PrimaryBtn onClick={nextPageNo} className="text-white py-3">
                  Verify
                </PrimaryBtn>
              </div>
            </SignInWrapper>
          </div>
        )}
        {pageNo === 3 && (
          <div>
            <SignInWrapper
              prevPageNo={prevPageNo}
              pageNo={pageNo}
              title="Forgot password"
              subTitle="Reset password"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor."
            >
              <div className="mt-7 flex flex-col items-center gap-4">
                <div className="relative w-full">
                  <TextInput
                    value={password}
                    setValue={setPassword}
                    type={show ? "text" : "password"}
                    title="Password"
                    placeholder=""
                    inputClassName="relative w-full"
                    inputStyle="input"
                  />
                  {show ? (
                    <EyeIcon
                      onClick={() => {
                        setShow(!show);
                      }}
                      className="absolute right-[10px] top-[34px] text-gray-400 cursor-pointer"
                    />
                  ) : (
                    <EyeOff
                      onClick={() => {
                        setShow(!show);
                      }}
                      className="absolute right-[10px] top-[34px] text-gray-400 cursor-pointer"
                    />
                  )}
                </div>
                <div className="flex flex-col gap-2 items-start w-full">
                  {[
                    "At least 10 characters",
                    "Contains a special character",
                  ].map((val) => {
                    return (
                      <div
                        key={val}
                        className="flex items-center gap-2 text-[12px] text-[#818181] justify-start"
                      >
                        <div className="bg-[#818181] text-white rounded-full">
                          <Check className="w-4 h-4" />
                        </div>
                        <p>{val}</p>
                      </div>
                    );
                  })}
                </div>
                <PrimaryBtn
                  onClick={() => {
                    setOpenResetPass(true);
                  }}
                  className="text-white py-3"
                >
                  Continue
                </PrimaryBtn>
              </div>
            </SignInWrapper>
          </div>
        )}
      </section>
    </>
  );
};
