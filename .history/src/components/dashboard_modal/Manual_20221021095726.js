import React from "react";
import { Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Button , Col, Row, Input, Form } from 'antd';

const { Text, Link } = Typography;

const SearchComponent = (props) => {
  const navigate = useNavigate();
  const formLayout = 'vertical';
  const mode = props.mode;
  return (
    <div className="">
      <div></>
    </div>
  );
};

export default SearchComponent;
