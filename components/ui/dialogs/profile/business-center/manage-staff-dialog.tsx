import React, { useState } from "react";
import { DialogComp } from "../../dialog";
import { Switch } from "antd";
import { SecondaryBtn } from "@/components/ui/buttons/secondary-btn";
import { PrimaryBtn } from "@/components/ui/buttons/primary-btn";
import { DetailCard } from "@/components/ui/cards/detail-card";
import { ArrowLeft, CircleX, Info } from "lucide-react";
import { TextInput } from "@/components/ui/inputs/text-input";
import { ConfirmationDialog } from "../../confirmation-dialog";
import { DictionariesContext } from "@/context/dictionary-context";
export const ManageStaffDialog = ({
  open,
  setOpen,
  edit = false,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
  edit?: boolean;
}) => {
  const { dictionaries } = DictionariesContext();
  const {
    accountStatusText,
    activeText,
    activityText,
    addText,
    anInvitationEmailText,
    businessEmailText,
    cancelText,
    removeStaffText,
    roleText,
    staffDetailsText,
    updateText,
  } = dictionaries;
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [stepEdit, setStepEdit] = useState(0);
  const [openConfirm, setOpenConfirm] = useState(false);
  const handleEdit = (index: number) => {
    setStepEdit(index);
  };
  const handleDelete = () => {};
  return (
    <>
      <ConfirmationDialog
        onSubmit={handleDelete}
        open={openConfirm}
        setOpen={setOpenConfirm}
        title={removeStaffText}
        desc="Are you sure you want to remove this staff member? It cannot be undone."
      />
      <DialogComp open={open} setOpen={setOpen}>
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-[18px] font-[600]">
              {edit ? (
                <div className="flex items-center gap-2">
                  {stepEdit > 0 && (
                    <div
                      onClick={() => {
                        setStepEdit(0);
                      }}
                      className="p-2 rounded-full bg-[#EFEFEF] flex items-center justify-center cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </div>
                  )}
                  <h1 className="text-[18px] font-[600]">{staffDetailsText}</h1>
                </div>
              ) : (
                "Add a staff member"
              )}
            </h1>
          </div>
          {!edit && (
            <>
              <div className="flex flex-col gap-4 mt-4">
                <TextInput
                  value={email}
                  setValue={setEmail}
                  type="email"
                  inputStyle="input"
                  placeholder=""
                  title={businessEmailText}
                />
                <TextInput
                  value={role}
                  setValue={setRole}
                  type="text"
                  inputStyle="input"
                  placeholder=""
                  title={roleText}
                />
                <div className="flex items-center gap-2 text-secondary">
                  <Info className="w-4 h-4" />
                  <p className="text-p3">{anInvitationEmailText}</p>
                </div>
                <div className="flex items-center justify-center gap-2 mt-4 w-full">
                  <SecondaryBtn
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    {cancelText}
                  </SecondaryBtn>
                  <PrimaryBtn
                    onClick={() => {
                      setOpen(false);
                    }}
                    className="bg-black rounded-full"
                  >
                    {addText}
                  </PrimaryBtn>
                </div>
              </div>
            </>
          )}
          {edit && (
            <>
              {stepEdit === 0 && (
                <div>
                  <div className="py-4 flex flex-col">
                    <div className="flex items-center justify-between py-4">
                      <h1 className="text-p2 font-[500]">
                        {accountStatusText}
                      </h1>
                      <div className="flex items-center gap-2">
                        <PrimaryBtn
                          onClick={() => {}}
                          className="w-auto bg-[#67D08D] text-black py-1"
                        >
                          {activeText}
                        </PrimaryBtn>
                        <Switch
                          defaultChecked
                          value={isActive}
                          onChange={(checked) => {
                            setIsActive(checked);
                          }}
                        />
                      </div>
                    </div>
                    {[
                      { title: businessEmailText, desc: "tony@gmail.com" },
                      {
                        title: roleText,
                        desc: "Operational",
                      },
                    ].map((val, index) => {
                      return (
                        <>
                          <DetailCard
                            description={val.desc}
                            title={val.title}
                            handleEdit={() => handleEdit(index + 1)}
                            key={index}
                          />
                        </>
                      );
                    })}
                  </div>
                  {edit && (
                    <div
                      onClick={() => {
                        setOpenConfirm(true);
                      }}
                      className="flex items-center gap-2 cursor-pointer text-rose-600 text-p3 mt-4"
                    >
                      <CircleX className="w-4 h-4" />
                      <p>{removeStaffText}</p>
                    </div>
                  )}
                </div>
              )}
              {stepEdit === 1 && (
                <>
                  <TextInput
                    value={email}
                    setValue={setEmail}
                    type="email"
                    inputStyle="input"
                    placeholder=""
                    title={businessEmailText}
                  />
                  <div className="flex items-center justify-center gap-2 mt-4 w-full">
                    <SecondaryBtn
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      {cancelText}
                    </SecondaryBtn>
                    <PrimaryBtn
                      onClick={() => {
                        setOpen(false);
                      }}
                      className="bg-black rounded-full"
                    >
                      {updateText}
                    </PrimaryBtn>
                  </div>
                </>
              )}
              {stepEdit === 2 && (
                <>
                  <TextInput
                    value={role}
                    setValue={setRole}
                    type="text"
                    inputStyle="input"
                    placeholder=""
                    title={roleText}
                  />
                  <div className="flex items-center justify-center gap-2 mt-4 w-full">
                    <SecondaryBtn
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      {cancelText}
                    </SecondaryBtn>
                    <PrimaryBtn
                      onClick={() => {
                        setOpen(false);
                      }}
                      className="bg-black rounded-full"
                    >
                      {updateText}
                    </PrimaryBtn>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </DialogComp>
    </>
  );
};
