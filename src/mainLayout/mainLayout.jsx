import {Outlet } from "react-router-dom";
import NavbarView from "../components/Navbar/NavbarView";
import FooterView from "../components/Footer/FooterView";
import "../mainLayout/layout.css"

function Layout (){
    return (
      <>
        <div className="layout">
          <header>
            <NavbarView />
          </header>
  
          <main className="content">
            
            <Outlet />
          </main>
  
          <FooterView />
        </div>
      </>
    );
}
export default Layout;