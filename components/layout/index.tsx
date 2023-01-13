import Navbar from "../navbar";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={inter.className}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
