import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div >
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
