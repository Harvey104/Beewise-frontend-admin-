import React, { useState, useEffect } from "react";
import { Typography, Row, Col, List, Button } from 'antd';
import VirtualList from 'rc-virtual-list';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoIosTime } from "react-icons/io";
import { ImUsers } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";

const { Text, Link } = Typography;
const ContainerHeight = 400;
const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';

const games = [
  {id: 1, title: "Olímpiadas del saber", questionCnt: "15", time: "5" },
  {id: 2, title: "Nombre Juego", questionCnt: "15", time: "3" },
  {id: 3, title: "Nombre Juego", questionCnt: "15", time: "3" },
  {id: 4, title: "Nombre Juego", questionCnt: "15", time: "3" },
  {id: 5, title: "Nombre Juego", questionCnt: "15", time: "3" },
  {id: 6, title: "Nombre Juego", questionCnt: "15", time: "5" },
  {id: 7, title: "Olímpiadas del saber", questionCnt: "15", time: "3" },
  {id: 8, title: "Olímpiadas del saber", questionCnt: "15", time: "5" },
  {id: 9, title: "Nombre Juego", questionCnt: "15", time: "5" },
];

const skills = [
  {id: 1, title: "Olímpiadas del saber", questionCnt: "15", time: "5" },
  {id: 2, title: "Nombre Juego", questionCnt: "15", time: "3" },
  {id: 3, title: "Nombre Juego", questionCnt: "15", time: "3" },
  {id: 4, title: "Nombre Juego", questionCnt: "15", time: "3" },
  {id: 5, title: "Nombre Juego", questionCnt: "15", time: "3" },
  {id: 6, title: "Nombre Juego", questionCnt: "15", time: "5" },
  {id: 7, title: "Olímpiadas del saber", questionCnt: "15", time: "3" },
  {id: 8, title: "Olímpiadas del saber", questionCnt: "15", time: "5" },
  {id: 9, title: "Nombre Juego", questionCnt: "15", time: "5" },
];

const players = [
  {id: 1, title: "Olímpiadas del saber", questionCnt: "15", time: "5" },
  {id: 2, title: "Nombre Juego", questionCnt: "15", time: "3" },
  {id: 3, title: "Nombre Juego", questionCnt: "15", time: "3" },
  {id: 4, title: "Nombre Juego", questionCnt: "15", time: "3" },
  {id: 5, title: "Nombre Juego", questionCnt: "15", time: "3" },
  {id: 6, title: "Nombre Juego", questionCnt: "15", time: "5" },
  {id: 7, title: "Olímpiadas del saber", questionCnt: "15", time: "3" },
  {id: 8, title: "Olímpiadas del saber", questionCnt: "15", time: "5" },
  {id: 9, title: "Nombre Juego", questionCnt: "15", time: "5" },
];

const SearchComponent = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const mode = props.mode;

  let initData = games;
  let list = ();
  if (mode === 'skill') initData = skills;

  if (mode === 'player') initData = players;

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
              itemKey="id"
              onScroll={onScroll}
            >
              {(item) => (
                <List.Item key={item.id}>
                  <List.Item.Meta
                    title={item.title}
                    description={<Row>
                      <Col span={8} className="list-item-title"><AiFillQuestionCircle /> {" " + item.questionCnt + " preguntas" } </Col>
                      <Col span={8} className="list-item-title"><IoIosTime /> {" " + item.time + " minutos" } </Col>
                    </Row>}
                  />
                </List.Item>
              )}
            </VirtualList>
          </List>
        </Col>
        <Col  span={10}>
          <div className="flex-column v-between h-center" style={{height: "100%"}}>
            <div className="panel padding-medium" 
              style={{
                width: "80%", 
                height: "80%",
                border: "1px solid #D9D9D9",
                borderRadius: "5px"
              }}
            >
              <Text className="medium-title">Filtros</Text>
            </div>
            <Button className="bit-button hs">Volver</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SearchComponent;
