import { Outlet } from "react-router-dom";
import {FC} from 'react'
import { Navigation } from './navigation/navigation';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

const Layout: FC = () => {
    return (
        <>
        <div className="wrapper">
        <Header />
        <Navigation />
        <Outlet/>
      </div>
      <Footer/>
      </>
    )

        
    
}

export {Layout};