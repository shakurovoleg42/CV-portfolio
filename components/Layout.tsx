import { FC, PropsWithChildren } from "react";
import Header from "./Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full flex flex-row">
      <Header />
      <main className="flex-1 pl-[150px] sm:pl-[200px] md:pl-[250px] lg:pl-[300px]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
