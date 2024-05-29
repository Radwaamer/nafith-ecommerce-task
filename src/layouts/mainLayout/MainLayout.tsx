import Header from "@components/common/header/Header";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import { Header, Footer } from "@components/common";

const MainLayout = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        if(window.location.pathname=="/"){
            navigate('/products/1');
        }
    },[])
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;