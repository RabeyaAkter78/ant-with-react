import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import img from "../../../../assets/images/logo.png";
import img2 from "../../../../assets/images/bg-works.jpg";
import img3 from "../../../../assets/images/easy-customise.jpg";

import { Avatar, Button, Card, ConfigProvider } from "antd";
const { Meta } = Card;
function CardContent() {
  return (
    <div className="bg-slate-500 pb-20">
      <div className="container mx-auto ">
        <h1 className="text-4xl pt-10 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
          excepturi!
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
                colorBgContainer: "rgb(212,175,135)",
              },
              Button: {
                defaultBg: "rgb(231,140,42)",
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
              <Button>Order</Button>
            </Card>
            <Card
              className="text-center "
              style={{
                width: 300,
              }}
              cover={<img alt="example" className="h-72" src={img} />}
            >
              <Meta
                className="text-center pb-8"
                title="Card title"
                description="This is the description"
              />
              <Button>Order</Button>
            </Card>
            <Card
              className="text-center "
              style={{
                width: 300,
              }}
              cover={<img alt="example" className="h-72" src={img3} />}
            >
              <Meta
                className="text-center pb-8"
                title="Card title"
                description="This is the description"
              />
              <Button>Order</Button>
            </Card>
          </div>
        </ConfigProvider>
      </div>
    </div>
  );
}

export default CardContent;
