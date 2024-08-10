import React from "react";
import { Button, Carousel, ConfigProvider, Space } from "antd";
import img from "../../../../assets/images/bg-hero.jpg";
function Banner() {
  return (
    <div className=" w-full">
      <div className="container mx-auto ">
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
              Carousel: {
                marginXXS: 10,
                fontSize: 14,
                colorBgContainer: "rgb(30,28,28)",
                colorText: "rgba(21,21,21,0.88)",
              },
              Button: {
                contentFontSize: 20,
                paddingBlock: 10,
                borderRadius: 5,
              },
            },
          }}
        >
          <Carousel autoplay>
            <div className="relative w-full h-screen flex justify-center items-center">
              <img
                className="absolute top-0 left-0 w-full object-cover"
                src={img}
                alt="Background img"
              />

              <div className="relative text-center p-52">
                <h1 className="text-6xl font-bold mb-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h1>
                <p className="mb-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores saepe tempore sapiente perferendis alias facilis!
                  Commodi, rem, exercitationem natus sapiente inventore
                  consectetur aliquid mollitia nam, ut repellendus molestias ea
                  asperiores quibusdam molestiae enim labore facilis quaerat
                  cum. Architecto, expedita recusandae.
                </p>
                <Button type="primary">Join Us</Button>
              </div>
            </div>
            <div className="relative w-full h-screen flex justify-center items-center">
              <img
                className="absolute top-0 left-0 w-full object-cover"
                src={img}
                alt="Background img"
              />

              <div className="relative text-center p-52">
                <h1 className="text-6xl font-bold mb-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h1>
                <p className="mb-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores saepe tempore sapiente perferendis alias facilis!
                  Commodi, rem, exercitationem natus sapiente inventore
                  consectetur aliquid mollitia nam, ut repellendus molestias ea
                  asperiores quibusdam molestiae enim labore facilis quaerat
                  cum. Architecto, expedita recusandae.
                </p>
                <Button type="primary">Join Us</Button>
              </div>
            </div>
            <div className="relative w-full h-screen flex justify-center items-center">
              <img
                className="absolute top-0 left-0 w-full object-cover"
                src={img}
                alt="Background img"
              />

              <div className="relative text-center p-52">
                <h1 className="text-6xl font-bold mb-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h1>
                <p className="mb-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores saepe tempore sapiente perferendis alias facilis!
                  Commodi, rem, exercitationem natus sapiente inventore
                  consectetur aliquid mollitia nam, ut repellendus molestias ea
                  asperiores quibusdam molestiae enim labore facilis quaerat
                  cum. Architecto, expedita recusandae.
                </p>
                <Button type="primary">Join Us</Button>
              </div>
            </div>
          </Carousel>
        </ConfigProvider>
      </div>
    </div>
  );
}

export default Banner;
