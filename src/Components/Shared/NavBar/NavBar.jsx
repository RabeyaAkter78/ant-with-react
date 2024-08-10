import React, { useState } from "react";
import "antd/dist/reset.css";
import { Button, Drawer, Layout, Menu, theme } from "antd";
import logo from "../../../assets/images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
const { Header } = Layout;
function NavBar() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const labels = ["Home", "About", "Contact", "Join Us"];
  const items = labels.map((label, index) => ({
    key: index + 1,
    label: label,
  }));

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <div className=" w-full">
      <div className="container mx-auto">
        <Layout>
          <Header className="bg-slate-700 px-4 md:px-8 xl:px-16 flex items-center justify-between">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8 md:h-10 md:w-10 xl:h-12 xl:w-12 rounded-full"
                src={logo}
                alt="Logo"
              />
            </div>

            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={items}
              className="flex-1 justify-center font-bold text-xl hidden md:flex bg-transparent border-none "
            />

            <div className="md:hidden">
              <Button
                icon={<RxHamburgerMenu />}
                onClick={showDrawer}
                className="border-none"
              />
            </div>

            <div className="flex-shrink-0 hidden md:block">
              <Button type="primary">Login</Button>
            </div>
          </Header>
          {/* for sm device responsive */}
          <Drawer
            title="Menu"
            placement="right"
            onClose={onClose}
            open={drawerVisible}
          >
            <Menu
              theme="light"
              mode="vertical"
              defaultSelectedKeys={["1"]}
              items={items}
              className="bg-transparent border-none"
            />
            <Button type="primary" className="mt-4 w-full">
              Login
            </Button>
          </Drawer>
        </Layout>
      </div>
    </div>
  );
}

export default NavBar;
