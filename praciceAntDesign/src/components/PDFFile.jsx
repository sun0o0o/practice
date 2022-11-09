import React from "react";
import { Badge, Descriptions, Button } from "antd";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Document, Page, PDFDownloadLink } from "@react-pdf/renderer";

const PDFFile = () => {
  return (
    <div>
      <Container>
        <Document>
          <Page>
            <Title>SandBox Report</Title>
            <FileTitle>ㄱㅇㄷㅇ</FileTitle>
            {/*-----------------BasicInfo--------------------*/}
            <AnalysisTitle>1. Basic Info</AnalysisTitle>
            <Desc
              size="small"
              title="Basic Info"
              bordered
              labelStyle={{ backgroundColor: "#b4b4b4", width: "15%" }}
              contentStyle={{ backgroundColor: "#fff", width: "35%" }}
              column={2}
            >
              <Descriptions.Item label="Task ID">ㄹㄹ</Descriptions.Item>
              <Descriptions.Item label="Start time">ㄹㄹ</Descriptions.Item>
              <Descriptions.Item label="End time">ㄹㄹ</Descriptions.Item>
              <Descriptions.Item label="Duration">ㄹㄹ</Descriptions.Item>
            </Desc>
            {/*-----------------FileInfo--------------------*/}
            <Desc
              size="small"
              title="File Info"
              bordered
              labelStyle={{ backgroundColor: "#b4b4b4", width: "15%" }}
              contentStyle={{ backgroundColor: "#fff", width: "35%" }}
              column={2}
            >
              <Descriptions.Item label="file name">ㄹㄹ</Descriptions.Item>
              <Descriptions.Item label="file type">ㄹㄹ</Descriptions.Item>
              <Descriptions.Item label="file size">ㄹㄹ</Descriptions.Item>
              <Descriptions.Item label="MD5">ㄹㄹ</Descriptions.Item>
              <Descriptions.Item label="SHA1">ㄹㄹ</Descriptions.Item>
              <Descriptions.Item label="SHA256">ㅇㅇㅇ</Descriptions.Item>
            </Desc>
            {/*-----------------Dynamic analysis--------------------*/}
            <AnalysisTitle>2. Dynamic analysis</AnalysisTitle>
            {/*-----------------Process--------------------*/}
            <Desc
              title="2.1 Process"
              bordered
              size="small"
              labelStyle={{ backgroundColor: "#b4b4b4", width: "15%" }}
              contentStyle={{ backgroundColor: "#fff" }}
              column={1}
            >
              <Descriptions.Item label="Total Process Count">
                ㄹㄹ
              </Descriptions.Item>
              <Descriptions.Item label="Malicious Process Count">
                ㄹㄹ
              </Descriptions.Item>
              <Descriptions.Item label="Suspicious Process Count">
                ㄹㄹ
              </Descriptions.Item>
            </Desc>
          </Page>
        </Document>
      </Container>
    </div>
  );
};

export default PDFFile;

const Container = styled.div`
  padding: 20px;
  background-color: #fff;
`;
// const Container = styled.div`
//     position: relative;
//     overflow-y: auto;
//     width: 100%;
//     height: 100%;
//     border: 1px solid purple;
// `;
const Title = styled.p`
  color: #000;
  font-size: 22px;
  font-weight: 900;
`;
const FileTitle = styled.div`
  background: linear-gradient(to right, #282c34, #9992);
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin-bottom: 20px;
  p {
    margin-left: 10px;
    font-size: 22px;
    color: #fff;
    font-weight: 800;
  }
`;
const AnalysisTitle = styled.p`
  color: #000;
  font-size: 20px;
  font-weight: 800;
  color: #5500ff;
`;
const Desc = styled(Descriptions)`
  margin-bottom: 20px;
`;
