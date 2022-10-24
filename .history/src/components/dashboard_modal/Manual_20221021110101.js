import React from "react";
import { Typography, Row, Col, List } from 'antd';
// import VirtualList from 'rc-virtual-list';
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
    <div className="mt-medium">
      <Row>
        <Col span={14}>

        </Col>
        <Col span={10}></Col>
      </Row>
    </div>
  );
};

export default SearchComponent;
