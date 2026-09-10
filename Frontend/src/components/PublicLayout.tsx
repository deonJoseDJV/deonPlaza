import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </>
  );
};


export default PublicLayout;