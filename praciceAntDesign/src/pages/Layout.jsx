import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import DebounceSearchBar from "../components/Debounce";
import Throttle from "../components/Throttle";
import PracticeThrottle from "../components/PracticeThrottle";
import styled from "styled-components";
import Observer from "../components/Observer";
import { Link } from "react-router-dom";
import PDFFile from "../components/PDFFile";
import { Badge, Descriptions, Button } from "antd";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Piechart from "../components/Piechart";
import PracticeUseState from "../components/PracticeUseState";

const { Header, Sider, Content } = Layout;

const LayoutPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  let abc = [
    { aa: 1, bb: 2, cc: 3 },
    {
      aa: 1,
      bb: 3,
      cc: 4,
    },
  ];

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: (
                <div>
                  <Link to="/nav2">nav2</Link>
                </div>
              ),
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {/* <DebounceSearchBar />
          <Board>
            <Throttle />
            <PracticeThrottle />
            <Observer />
          </Board>
          {abc.map((el) => (
            <div key={el.aa}>
              <div>{el.bb}</div>
            </div>
          ))} */}
          {/* <PDFDownloadLink document={<PDFFile />} fileName="test.pdf">
            download!!
          </PDFDownloadLink> */}
          <Button type="primary" size="large">
            Download PDF
          </Button>
          {/* <PDFFile /> */}
          <Piechart />
          <PracticeUseState />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;

const Board = styled.div`
  position: relative;
  display: flex;
  margin-top: 50px;
  width: 70vw;
  height: 800px;
  border: 2px solid purple;
`;
