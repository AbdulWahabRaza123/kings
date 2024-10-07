import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { Menu } from "lucide-react";

export const NavDrawerComp = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className="bg-globalPrimary text-white py-4" onClick={showDrawer}>
        <Menu />
      </Button>
      <Drawer title="Menu" onClose={onClose} open={open}>
        {children}
      </Drawer>
    </>
  );
};
