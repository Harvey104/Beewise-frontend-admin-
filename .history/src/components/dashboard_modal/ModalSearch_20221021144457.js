import React, { useState, useEffect } from "react";
import { Typography, Row, Col, List } from 'antd';
import VirtualList from 'rc-virtual-list';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoIosTime } from "react-icons/io";

const { Text, Link } = Typography;
const ContainerHeight = 400;
const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';

let initData = [
  {id: 1, title: "Olímpiadas del saber", questionCnt: "15", time: "5" },
  {id: 2, title: "Nombre Juego", questionCnt: "15", time: "3" },
  {id: 3, title: "Nombre Juego", questionCnt: "15", time: "3" },
  {id: 3, title: "Nombre Juego", questionCnt: "15", time: "3" },
  {title: "Nombre Juego", questionCnt: "15", time: "3" },
  {title: "Nombre Juego", questionCnt: "15", time: "5" },
  {title: "Olímpiadas del saber", questionCnt: "15", time: "3" },
  {title: "Olímpiadas del saber", questionCnt: "15", time: "5" },
  {title: "Nombre Juego", questionCnt: "15", time: "5" },
];

const SearchComponent = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const mode = props.mode;
  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      appendData();
    }
  };
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(initData));
      });
  };
  useEffect(() => {
    appendData();
  }, []);
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
              <List.Item key={item.id}>
                <List.Item.Meta
                  title={item.name.last}
                  // description={<Row>
                  //   <Col span={8}><AiFillQuestionCircle /> {" " + item.questionCnt + " preguntas" } </Col>
                  //   <Col span={8}><IoIosTime /> {" " + item.time + " minutos" } </Col>
                  // </Row>}
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
