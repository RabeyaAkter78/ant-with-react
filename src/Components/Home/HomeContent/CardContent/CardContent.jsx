import React, { useState } from "react";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import img2 from "../../../../assets/images/bg-works.jpg";

import { Avatar, Button, Card, ConfigProvider, Modal } from "antd";
const { Meta } = Card;
function CardContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-slate-200 pb-20">
      <div className="container mx-auto ">
        <h1 className="text-4xl pt-20 text-center">
          Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
          Facere, excepturi!
        </h1>
        <p className="text-center pb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          nulla distinctio velit accusantium incidunt quod, alias modi, illum{" "}
          <br />
          corrupti in omnis esse recusandae aspernatur? Ipsam perferendis
          explicabo magnam quo blanditiis minus ipsum dolorem aspernatur
          praesentium.
        </p>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: "#00b96b",
              borderRadius: 2,

              // Alias Token
              colorBgContainer: "#f6ffed",
            },
            components: {
              Card: {
                colorBgContainer: "rgb(247,244,241)",
                borderRadiusLG: 5,
              },
            },
          }}
        >
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-5 gap-5 justify-center items-center">
            <Card
              className="text-center "
              style={{
                width: 300,
              }}
              cover={<img alt="example" className="h-72" src={img2} />}
            >
              <Meta
                className="text-center pb-8"
                title="Card title"
                description="This is the description"
              />
              <Button onClick={showModal}>Show More</Button>
              <Modal
                title="Product Details"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <div className="text-center">
                  <h1>Lorem ipsum dolor sit amet.</h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, doloremque.
                  </p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </div>
              </Modal>
            </Card>
          </div>
        </ConfigProvider>
      </div>
    </div>
  );
}

export default CardContent;
