"use client";
import { Check, EyeIcon, EyeOff } from "lucide-react";
import { PrimaryBtn } from "@/components/ui/buttons/primary-btn";
import { TextInput } from "@/components/ui/inputs/text-input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import { SignInWrapper } from "@/components/ui/wrappers/signin-wrapper";
import { ReviewInProgressDialog } from "@/components/ui/dialogs/onboarding/review-in-progress";
import { cn } from "@/lib/utils";
import { DictionariesContext } from "@/context/dictionary-context";

export const CompanyAccount = ({
  isBusiness,
  pageNo,
  nextPageNo,
  prevPageNo,
}: {
  isBusiness: boolean;
  pageNo: number;
  nextPageNo: () => void;
  prevPageNo: () => void;
}) => {
  const { dictionaries } = DictionariesContext();
  const {
    businessEmailText,
    businessRegistrationCertificateText,
    companyContactNoOptionalText,
    companyEmailText,
    companyInfoTextDescText,
    companyNameText,
    companyProfileDesc,
    completeOwnerInfoDescText,
    completeOwnerInfoText,
    completeText,
    continueText,
    createBusinessProfileText,
    didNotReceivedCodeText,
    enterBusinessEmailText,
    enterCompanyInfoText,
    firstNameText,
    industryText,
    lastNameText,
    passwordText,
    pleaseSpecifyText,
    resetPasswordDescText,
    resetPasswordText,
    roleText,
    verificationCodeSendToText,
    verificationCodeText,
    verifyYourBusinessEmailText,
    industryOptions,
  } = dictionaries;
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  //company details
  const [openReviewInProgress, setOpenReviewInProgress] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("others");
  const [specificationIfOthers, setSpecificationIfOthers] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [companyImageLink, setCompanyImageLink] = useState<string>("");

  //personal details
  const [ownerFName, setOwnerFName] = useState("");
  const [ownerLName, setOwnerLName] = useState("");
  const [ownerRole, setOwnerRole] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");

  function checkString() {
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;

    return {
      hasTenCharacters: password.length >= 10,
      hasSpecialCharacter: specialCharacters.test(password),
    };
  }
  return (
    <>
      <ReviewInProgressDialog
        open={openReviewInProgress}
        setOpen={setOpenReviewInProgress}
      />

      <section className="w-full">
        {pageNo === 1 && (
          <>
            <div>
              <SignInWrapper
                prevPageNo={prevPageNo}
                pageNo={pageNo}
                title={createBusinessProfileText}
                subTitle={enterBusinessEmailText}
                desc={companyProfileDesc}
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
          </>
        )}
        {pageNo === 2 && (
          <>
            <div>
              <SignInWrapper
                prevPageNo={prevPageNo}
                pageNo={pageNo}
                title={createBusinessProfileText}
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
                      {didNotReceivedCodeText}
                    </p>
                    <p className="text-[12px] text-main-primary cursor-pointer">
                      Resend code in 60s
                    </p>
                  </div>
                  <PrimaryBtn onClick={nextPageNo}>Verify</PrimaryBtn>
                </div>
              </SignInWrapper>
            </div>
          </>
        )}
        {pageNo === 3 && (
          <>
            <div>
              <SignInWrapper
                prevPageNo={prevPageNo}
                pageNo={pageNo}
                title={createBusinessProfileText}
                subTitle={resetPasswordText}
                desc={resetPasswordDescText}
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
                    ].map((val, index) => {
                      return (
                        <div
                          key={val}
                          className="flex items-center gap-2 text-[12px] text-[#818181] justify-start"
                        >
                          <div
                            className={cn(
                              "text-white rounded-full ",
                              (checkString()?.hasSpecialCharacter &&
                                index === 1) ||
                                (checkString()?.hasTenCharacters && index === 0)
                                ? "bg-green-400"
                                : "bg-[#818181]"
                            )}
                          >
                            <Check className="w-4 h-4" />
                          </div>
                          <p>{val}</p>
                        </div>
                      );
                    })}
                  </div>
                  <PrimaryBtn onClick={nextPageNo}>{continueText}</PrimaryBtn>
                </div>
              </SignInWrapper>
            </div>
          </>
        )}
        {pageNo === 4 && (
          <>
            <div>
              <SignInWrapper
                prevPageNo={prevPageNo}
                pageNo={pageNo}
                title={createBusinessProfileText}
                subTitle={enterCompanyInfoText}
                desc={companyInfoTextDescText}
              >
                <div className="mt-7 flex flex-col items-center gap-4 w-full">
                  <TextInput
                    value={companyName}
                    setValue={setCompanyName}
                    type="text"
                    title={companyNameText}
                    placeholder=""
                    inputStyle="input"
                  />

                  <TextInput
                    value={industry}
                    setValue={setIndustry}
                    type="select"
                    title={industryText}
                    placeholder=""
                    inputStyle="select"
                    options={industryOptions}
                  />

                  {industry === "others" && (
                    <TextInput
                      value={specificationIfOthers}
                      setValue={setSpecificationIfOthers}
                      type="text"
                      placeholder={pleaseSpecifyText}
                      inputStyle="input"
                    />
                  )}
                  <TextInput
                    value={companyPhone}
                    setValue={setCompanyPhone}
                    type="tel"
                    title={companyContactNoOptionalText}
                    placeholder=""
                    inputStyle="tel"
                  />
                  <TextInput
                    value={companyEmail}
                    setValue={setCompanyEmail}
                    type="email"
                    title={companyEmailText}
                    placeholder=""
                    inputStyle="input"
                  />
                  <TextInput
                    value={companyImageLink}
                    setValue={setCompanyImageLink}
                    type="file"
                    title={businessRegistrationCertificateText}
                    placeholder=""
                    inputStyle="image"
                  />

                  <PrimaryBtn onClick={nextPageNo}>{continueText}</PrimaryBtn>
                </div>
              </SignInWrapper>
            </div>
          </>
        )}
        {pageNo === 5 && (
          <>
            <div>
              <SignInWrapper
                prevPageNo={prevPageNo}
                pageNo={pageNo}
                title={createBusinessProfileText}
                subTitle={completeOwnerInfoText}
                desc={completeOwnerInfoDescText}
              >
                <div className="mt-7 flex flex-col items-center gap-4 w-full">
                  <TextInput
                    value={ownerFName}
                    setValue={setOwnerFName}
                    type="text"
                    title={firstNameText}
                    placeholder=""
                    inputStyle="input"
                  />
                  <TextInput
                    value={ownerLName}
                    setValue={setOwnerLName}
                    type="text"
                    title={lastNameText}
                    placeholder=""
                    inputStyle="input"
                  />
                  <TextInput
                    value={ownerRole}
                    setValue={setOwnerRole}
                    type="input"
                    title={roleText}
                    placeholder=""
                    inputStyle="input"
                  />
                  <TextInput
                    value={ownerPhone}
                    setValue={setOwnerPhone}
                    type="tel"
                    title={companyContactNoOptionalText}
                    placeholder=""
                    inputStyle="tel"
                  />
                  <p className="text-secondary text-start text-[12px]">
                    By continuing you agree that you read the{" "}
                    <span className="text-[#DCC631] underline">
                      Terms and Conditions
                    </span>{" "}
                    and{" "}
                    <span className="text-[#DCC631] underline">
                      Privacy Policies
                    </span>
                    .
                  </p>
                  <PrimaryBtn
                    onClick={() => {
                      setOpenReviewInProgress(true);
                    }}
                  >
                    {completeText}
                  </PrimaryBtn>
                </div>
              </SignInWrapper>
            </div>
          </>
        )}
      </section>
    </>
  );
};
