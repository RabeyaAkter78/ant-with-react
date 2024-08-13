import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";

function GridcardContent() {
  return (
    <div className="container mx-auto">
      <div className="my-5">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="Europe Street beat" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="Europe Street beat" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="Europe Street beat" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default GridcardContent;
