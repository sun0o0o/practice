import "./App.css";
import React from "react";
import { Layout, Menu } from "antd";
import styled from "styled-components";
import PdfFile from "./PDFFile";
import TestFile from "./testPDF";
import { Button } from "antd";
import { PDFDownloadLink } from "@react-pdf/renderer";

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <PDFDownloadLink document={<TestFile />} fileName="test.pdf">
        {({ loading, error }) =>
          loading ? "Loading document..." : <button>Download now!</button>
        }
      </PDFDownloadLink>
      <TestFile />
    </div>
  );
}

export default App;
