import CustomHeader from "@/components/common/customHeader";
import Footer from "@/components/common/footer";
const MainLayout = ({ children }: any) => {
  return (
    <div>
      <CustomHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
