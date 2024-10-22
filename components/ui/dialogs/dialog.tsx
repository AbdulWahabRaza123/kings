"use client";
import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { DictionariesContext } from "@/context/dictionary-context";

export const DialogComp = ({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  children: React.ReactNode;
}) => {
  const { dictionaries } = DictionariesContext();
  const { closeText } = dictionaries;
  return (
    <Dialog open={open}>
      <DialogContent className="bg-white border-[1px] border-[#00f4ff] rounded-[20px] max-w-[600px] max-h-[90vh] overflow-auto flex flex-col gap-7 p-5">
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X
            className="h-4 w-4"
            onClick={() => {
              setOpen(false);
            }}
          />
          <span className="sr-only">{closeText}</span>
        </DialogPrimitive.Close>
        {children}
      </DialogContent>
    </Dialog>
  );
};
