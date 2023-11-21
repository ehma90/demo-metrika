import { useRouter } from "next/router";
import { FC, PropsWithChildren, useCallback, useEffect, useState } from "react";
import Sidebar from "./siderBar";
import DashboardHeader from "./header";
import Container from "@/components/Containter";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  const toggle = useCallback(() => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [open]);

  return (
    <div>
      <Sidebar open={open} toggle={toggle} />
      <main className=" md:pl-72 h-full bg-[#f7f6f6]">
        <DashboardHeader toggle={toggle} />
        <Container className=" py-4 h-fit">{children}</Container>
      </main>
    </div>
  );
};

export default Layout;
