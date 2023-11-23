import { ReactNode } from "react";
import { Header, Footer } from "@/components";
import { LayoutWrap } from "./layout.s";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrap>
      <Header />
      {children}
      <Footer />
    </LayoutWrap>
  );
};
