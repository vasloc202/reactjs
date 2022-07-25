import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import News from "../../components/News";
import Footer from "../../components/Footer";
type Props = {};

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <div>
        <News />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default WebsiteLayout;
