"use client";
import { Check, EyeIcon, EyeOff } from "lucide-react";
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
import { SignInWrapper } from "../ui/wrappers/signin-wrapper";
import { DictionariesContext } from "@/context/dictionary-context";
export const SigninProfile = ({
  setIsSignIn,
}: {
  setIsSignIn: (value: boolean) => void;
}) => {
  const { dictionaries } = DictionariesContext();
  const {
    businessEmailText,
    changePasswordDescText,
    continueText,
    didntReceieveTheCodeText,
    enterBusinessEmailText,
    forgetPasswordDesc,
    forgetPasswordText,
    loginText,
    passwordText,
    resendCodeIn60Secs,
    resetPasswordText,
    setupBusinessAccountText,
    verificationCodeSendToText,
    verificationCodeText,
    verifyText,
    verifyYourBusinessEmailText,
    welcomeBackDesc,
    welcomeBackText,
  } = dictionaries;
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
      <section className="md:w-[440px] max-md:w-full max-md:px-4">
        {pageNo === 0 && (
          <div>
            <div className="flex flex-col gap-3 text-center">
              <h1 className="text-[24px] text-primary font-[600]">
                {welcomeBackText}
              </h1>
              <p className="text-[14px] text-secondary">{welcomeBackDesc}</p>
            </div>
            <div className="mt-10 flex flex-col items-center gap-4">
              <TextInput
                value={email}
                setValue={setEmail}
                type="email"
                title={businessEmailText}
                placeholder=""
                inputStyle="input"
              />
              <div className="relative w-full">
                <TextInput
                  value={password}
                  setValue={setPassword}
                  type={show ? "text" : "password"}
                  title={passwordText}
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
                {forgetPasswordText}
              </p>
              <PrimaryBtn onClick={() => {}}>{loginText}</PrimaryBtn>
              <SecondaryBtn
                onClick={() => {
                  setIsSignIn(false);
                }}
                className="text-black py-3"
              >
                {setupBusinessAccountText}
              </SecondaryBtn>
            </div>
          </div>
        )}
        {pageNo === 1 && (
          <div>
            <SignInWrapper
              prevPageNo={prevPageNo}
              pageNo={pageNo}
              title={forgetPasswordText}
              subTitle={enterBusinessEmailText}
              desc={forgetPasswordDesc}
            >
              <div className="mt-10 flex flex-col items-center gap-6">
                <TextInput
                  value={email}
                  setValue={setEmail}
                  type="email"
                  title={businessEmailText}
                  placeholder=""
                  inputStyle="input"
                />
                <PrimaryBtn onClick={nextPageNo}>{continueText}</PrimaryBtn>
              </div>
            </SignInWrapper>
          </div>
        )}
        {pageNo === 2 && (
          <div>
            <SignInWrapper
              prevPageNo={prevPageNo}
              pageNo={pageNo}
              title={forgetPasswordText}
              subTitle={verifyYourBusinessEmailText}
              desc={verificationCodeSendToText}
              showOtpEmail={true}
            >
              <div className="mt-10 flex flex-col items-center gap-6">
                <div className="flex flex-col items-start gap-1">
                  <p className="font-[500] text-[14px]">
                    {verificationCodeText}
                  </p>
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
                    {didntReceieveTheCodeText}
                  </p>
                  <p className="text-[12px] text-main-primary cursor-pointer">
                    {resendCodeIn60Secs}
                  </p>
                </div>
                <PrimaryBtn onClick={nextPageNo}>{verifyText}</PrimaryBtn>
              </div>
            </SignInWrapper>
          </div>
        )}
        {pageNo === 3 && (
          <div>
            <SignInWrapper
              prevPageNo={prevPageNo}
              pageNo={pageNo}
              title={forgetPasswordText}
              subTitle={resetPasswordText}
              desc={changePasswordDescText}
            >
              <div className="mt-7 flex flex-col items-center gap-4">
                <div className="relative w-full">
                  <TextInput
                    value={password}
                    setValue={setPassword}
                    type={show ? "text" : "password"}
                    title={passwordText}
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
                >
                  {continueText}
                </PrimaryBtn>
              </div>
            </SignInWrapper>
          </div>
        )}
      </section>
    </>
  );
};
