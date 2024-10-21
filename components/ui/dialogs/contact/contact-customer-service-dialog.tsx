"use client";
import React, { useState } from "react";
import { DialogComp } from "../dialog";
import { PrimaryBtn } from "../../buttons/primary-btn";
import { SecondaryBtn } from "../../buttons/secondary-btn";
import { PrimaryTextarea } from "../../inputs/primary-input";
import { TextInput } from "../../inputs/text-input";

export const ContactCustomerServiceDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <DialogComp open={open} setOpen={setOpen}>
      <div className="flex flex-col gap-3">
        <div>
          <div className="flex flex-col items-start gap-2 relative">
            <h6 className="text-h6 font-[600]">Contact Customer Service</h6>
            <p className="text-p2 text-secondary">
              Leave your message here. Our Customer Service will contact you via
              email within 3 business days.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-start items-start py-3">
          <div className="flex flex-col gap-3 w-full">
            <TextInput
              placeholder=""
              setValue={setPhone}
              value={phone}
              inputStyle="tel"
              type="tel"
              title="Email"
            />
            <TextInput
              placeholder=""
              setValue={setEmail}
              value={email}
              inputStyle="input"
              type="email"
              title="Mobile number (optional)"
            />
            <TextInput
              placeholder=""
              setValue={setSubject}
              value={subject}
              inputStyle="input"
              type="text"
              title="Subject"
            />
            <PrimaryTextarea
              value={message}
              setValue={setMessage}
              placeholder="Message"
              rows={3}
            />
            <div className="flex items-center justify-center gap-2 mt-4">
              <SecondaryBtn
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </SecondaryBtn>
              <PrimaryBtn
                onClick={() => {
                  setStep(step + 1);
                }}
                className="bg-black rounded-full"
              >
                Save
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </DialogComp>
  );
};
