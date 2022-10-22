import React, { useState } from "react";
import { Typography, Row, Col, List } from 'antd';
import VirtualList from 'rc-virtual-list';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Text, Link } = Typography;
const ContainerHeight = 400;

const SearchComponent = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const formLayout = 'vertical';
  const mode = props.mode;
  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      appendData();
    }
  };
  return (
    <div className="mt-medium">
      <Row>
        <Col span={14}>
        <List>
          <VirtualList
            data={data}
            height={ContainerHeight}
            itemHeight={47}
            itemKey="email"
            onScroll={onScroll}
          >
            {(item) => (
              <List.Item key={item.email}>
                <List.Item.Meta
                  avatar={<Avatar src={item.picture.large} />}
                  title={<a href="https://ant.design">{item.name.last}</a>}
                  description={item.email}
                />
                <div>Content</div>
              </List.Item>
            )}
          </VirtualList>
        </List>
        </Col>
        <Col span={10}></Col>
      </Row>
    </div>
  );
};

export default SearchComponent;
