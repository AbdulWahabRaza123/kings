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
const industryOptions = [
  {
    label: "Others",
    value: "others",
  },
  {
    label: "Software",
    value: "software",
  },
];

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
                title="Create business profile"
                subTitle="Enter business email"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor."
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
          </>
        )}
        {pageNo === 2 && (
          <>
            <div>
              <SignInWrapper
                prevPageNo={prevPageNo}
                pageNo={pageNo}
                title="Create business profile"
                subTitle="Verify your business email"
                desc="Enter the verification code sent to"
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
          </>
        )}
        {pageNo === 3 && (
          <>
            <div>
              <SignInWrapper
                prevPageNo={prevPageNo}
                pageNo={pageNo}
                title="Create business profile"
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
                  <PrimaryBtn onClick={nextPageNo} className="text-white py-3">
                    Continue
                  </PrimaryBtn>
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
                title="Create business profile"
                subTitle="Enter company info"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor."
              >
                <div className="mt-7 flex flex-col items-center gap-4 w-full">
                  <TextInput
                    value={companyName}
                    setValue={setCompanyName}
                    type="text"
                    title="Company name"
                    placeholder=""
                    inputStyle="input"
                  />

                  <TextInput
                    value={industry}
                    setValue={setIndustry}
                    type="select"
                    title="Industry"
                    placeholder=""
                    inputStyle="select"
                    options={industryOptions}
                  />

                  {industry === "others" && (
                    <TextInput
                      value={specificationIfOthers}
                      setValue={setSpecificationIfOthers}
                      type="text"
                      placeholder="Please Specify"
                      inputStyle="input"
                    />
                  )}
                  <TextInput
                    value={companyPhone}
                    setValue={setCompanyPhone}
                    type="tel"
                    title="Country contact number (optional)"
                    placeholder=""
                    inputStyle="tel"
                  />
                  <TextInput
                    value={companyEmail}
                    setValue={setCompanyEmail}
                    type="email"
                    title="Company Email"
                    placeholder=""
                    inputStyle="input"
                  />
                  <TextInput
                    value={companyImageLink}
                    setValue={setCompanyImageLink}
                    type="file"
                    title="Business Registration Certificate"
                    placeholder=""
                    inputStyle="image"
                  />

                  <PrimaryBtn onClick={nextPageNo} className="text-white py-3">
                    Continue
                  </PrimaryBtn>
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
                title="Create business profile"
                subTitle="Complete owner info"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              >
                <div className="mt-7 flex flex-col items-center gap-4 w-full">
                  <TextInput
                    value={ownerFName}
                    setValue={setOwnerFName}
                    type="text"
                    title="First Name"
                    placeholder=""
                    inputStyle="input"
                  />
                  <TextInput
                    value={ownerLName}
                    setValue={setOwnerLName}
                    type="select"
                    title="Last Name"
                    placeholder=""
                    inputStyle="input"
                  />
                  <TextInput
                    value={ownerRole}
                    setValue={setOwnerRole}
                    type="input"
                    title="Role"
                    placeholder=""
                    inputStyle="input"
                  />
                  <TextInput
                    value={ownerPhone}
                    setValue={setOwnerPhone}
                    type="tel"
                    title="Country contact number (optional)"
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
                    className="text-white py-3"
                  >
                    Complete
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
