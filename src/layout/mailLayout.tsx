import CustomHeader from "@/components/common/customHeader";
const MainLayout = ({ children }:any) => {
  return (
    <div>
      <CustomHeader />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
