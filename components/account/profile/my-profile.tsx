"use client";
import { ChangePasswordDialog } from "@/components/ui/dialogs/profile/change-password-dialog";
import { EditProfileDialog } from "@/components/ui/dialogs/profile/edit-profile-dialog";
import { EmailDialog } from "@/components/ui/dialogs/profile/email-dialog";
import { NameDialog } from "@/components/ui/dialogs/profile/name-dialog";
import { PhoneDialog } from "@/components/ui/dialogs/profile/phone-dialog";
import { RoleDialog } from "@/components/ui/dialogs/profile/role-dialog";
import { ChevronRight, Pencil, Trash } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
const personalData = [
  {
    title: "Business email",
    value: "tony.lam@company.com",
  },
  {
    title: "Role",
    value: "Operation executive - OPS",
  },
  {
    title: "Name",
    value: "Tony Lam",
  },
  {
    title: "Mobile number",
    value: "+852 9876 5432",
  },
  {
    title: "Change password",
    value: "***************",
  },
];
export const MyProfileComp = () => {
  const [openEditEmail, setOpenEditEmail] = useState(false);
  const [openEditRole, setOpenEditRole] = useState(false);
  const [openEditName, setOpenEditName] = useState(false);
  const [openEditPhone, setOpenEditPhone] = useState(false);
  const [openEditPassword, setOpenEditPassword] = useState(false);
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const handleEdit = (index: number) => {
    if (index === 0) {
      setOpenEditEmail(true);
    } else if (index === 1) {
      setOpenEditRole(true);
    } else if (index === 2) {
      setOpenEditName(true);
    } else if (index === 3) {
      setOpenEditPhone(true);
    } else if (index === 4) {
      setOpenEditPassword(true);
    }
  };
  return (
    <>
      <EmailDialog open={openEditEmail} setOpen={setOpenEditEmail} />
      <RoleDialog open={openEditRole} setOpen={setOpenEditRole} />
      <NameDialog open={openEditName} setOpen={setOpenEditName} />
      <PhoneDialog open={openEditPhone} setOpen={setOpenEditPhone} />
      <ChangePasswordDialog
        open={openEditPassword}
        setOpen={setOpenEditPassword}
      />
      <EditProfileDialog open={openEditProfile} setOpen={setOpenEditProfile} />

      <div className="p-4 flex flex-col gap-2 bg-white rounded-[7px]">
        <h5 className="text-h5 font-[600]">My Profile</h5>
        <div className="flex items-center gap-6 py-6">
          <Image
            src="/assets/mockups/profile.svg"
            alt="profile"
            width={100}
            height={100}
            className="object-cover rounded-full aspect-square"
          />
          <div className="flex items-center gap-4">
            <div
              onClick={() => {
                setOpenEditProfile(true);
              }}
              className="flex items-center gap-1 text-p2 text-globalPrimary cursor-pointer hover:underline"
            >
              <Pencil className="w-4 h-4" />
              <p>Add New</p>
            </div>
            <div className="flex items-center gap-1 text-p2 text-rose-400 cursor-pointer hover:underline">
              <Trash className="w-4 h-4" />
              <p className="">Delete</p>
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-col">
          {personalData?.map((val, index) => {
            return (
              <>
                <div
                  key={index}
                  className="flex flex-col justify-center gap-2 py-4 relative"
                >
                  <p className="text-p2 font-[500]">{val.title}</p>
                  <p className="text-secondary text-p3">{val.value}</p>
                  <ChevronRight
                    onClick={() => {
                      handleEdit(index);
                    }}
                    className="w-6 h-6 absolute right-[10px] text-secondary cursor-pointer"
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
