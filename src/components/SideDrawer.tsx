import React from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";

type SideDrawerProps = {
  children: React.ReactNode;
  onClose: () => void;
  flag: boolean;
};

const SideDrawer = ({ children, onClose, flag }: SideDrawerProps) => {
  return (
    <Drawer
      PaperProps={{ sx: { width: "45vw" } }}
      anchor="left"
      open={flag}
      onClose={onClose}
    >
      <Typography
        sx={{ fontSize: 21, marginBottom: 10, textAlign: "center" }}
        color="text.primary"
        gutterBottom
      >
        Your Prefered Colors
      </Typography>
      {children}
    </Drawer>
  );
};

export default SideDrawer;
