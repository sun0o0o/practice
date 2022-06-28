import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import React from "react";

const User: React.FC = () => (
  <>
    <span className="avatar-item">
      <Badge count={1}>
        <Avatar shape="square" icon={<UserOutlined />} />
      </Badge>
    </span>
    <span>
      <Badge dot>
        <Avatar shape="square" icon={<UserOutlined />} />
      </Badge>
    </span>
  </>
);

export default User;
