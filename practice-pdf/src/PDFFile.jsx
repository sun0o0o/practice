import React from "react";
import { Badge, Descriptions } from "antd";
import styled from "styled-components";
import { useEffect, useState } from "react";
import {
  Document,
  Page,
  Text,
  PDFDownloadLink,
  View,
} from "@react-pdf/renderer";

const PDFFile = () => {
  return (
    <Document>
      <Page title="first page" orientation="landscpae">
        <Text>why why why</Text>
        <View>
          <Container>
            <Title>SandBox Report</Title>
            <FileTitle>aaa</FileTitle>
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
              <Descriptions.Item label="Task ID">aa</Descriptions.Item>
              <Descriptions.Item label="Start time">aa</Descriptions.Item>
              <Descriptions.Item label="End time">aa</Descriptions.Item>
              <Descriptions.Item label="Duration">aa</Descriptions.Item>
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
              <Descriptions.Item label="file name">aa</Descriptions.Item>
              <Descriptions.Item label="file type">aa</Descriptions.Item>
              <Descriptions.Item label="file size">aa</Descriptions.Item>
              <Descriptions.Item label="MD5">aa</Descriptions.Item>
              <Descriptions.Item label="SHA1">aa</Descriptions.Item>
              <Descriptions.Item label="SHA256">aa</Descriptions.Item>
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
                aa
              </Descriptions.Item>
              <Descriptions.Item label="Malicious Process Count">
                aa
              </Descriptions.Item>
              <Descriptions.Item label="Suspicious Process Count">
                aa
              </Descriptions.Item>
            </Desc>
          </Container>
        </View>
      </Page>
      <Page title="first page">
        <Container>
          {/*-----------------BasicInfo--------------------*/}
          <AnalysisTitle>3.dfssdf</AnalysisTitle>
          <Desc
            size="small"
            title="Basic Info"
            bordered
            labelStyle={{ backgroundColor: "#b4b4b4", width: "15%" }}
            contentStyle={{ backgroundColor: "#fff", width: "35%" }}
            column={2}
          >
            <Descriptions.Item label="Task ID">aa</Descriptions.Item>
            <Descriptions.Item label="Start time">aa</Descriptions.Item>
            <Descriptions.Item label="End time">aa</Descriptions.Item>
            <Descriptions.Item label="Duration">aa</Descriptions.Item>
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
            <Descriptions.Item label="file name">aa</Descriptions.Item>
            <Descriptions.Item label="file type">aa</Descriptions.Item>
            <Descriptions.Item label="file size">aa</Descriptions.Item>
            <Descriptions.Item label="MD5">aa</Descriptions.Item>
            <Descriptions.Item label="SHA1">aa</Descriptions.Item>
            <Descriptions.Item label="SHA256">aa</Descriptions.Item>
          </Desc>
          {/*-----------------Dynamic analysis--------------------*/}
          <AnalysisTitle>4. Dynamic analysis</AnalysisTitle>
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
              aa
            </Descriptions.Item>
            <Descriptions.Item label="Malicious Process Count">
              aa
            </Descriptions.Item>
            <Descriptions.Item label="Suspicious Process Count">
              aa
            </Descriptions.Item>
          </Desc>
        </Container>
      </Page>
    </Document>
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
