import React, { useState } from "react";
import { Typography } from 'antd';
import { Button , Col, Row, Input, Table, List } from 'antd';
import { FiFilter } from "react-icons/fi";
import VirtualList from 'rc-virtual-list';
import { TiDeleteOutline } from "react-icons/ti";

import { GAME_MODAL_STEP } from "../../constant";
const { Search } = Input;

const { Text, Link } = Typography;
const ContainerHeight = 400;

const VerifyComponent = (props) => {
  const next = props.next;
  const previous = props.previous;
  const onSearch = (value) => console.log(value);
  
  const competationColumn = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: (
        <Button className="filter-button" style={{width: "100%"}}>
          <Text className="small-title">Departamento</Text>
          <FiFilter style={{fontSize: "16px", color: "#6A67CE"}}/>
        </Button>
      ),
      dataIndex: 'filter',
      key: 'filter',
    },
  ];
  const competationData = [
    {
        key: '1',
        name: 'Juan Ugalde',
        email: 'j.ugalde@gmail.com',
        key: 'Operaciones',
    },
    {
        key: '2',
        name: 'Juan Ugalde',
        email: 'j.ugalde@gmail.com',
        key: 'Operaciones',
    },
    {
        key: '3',
        name: 'Juan Ugalde',
        email: 'j.ugalde@gmail.com',
        key: 'Operaciones',
    },
    {
        key: '4',
        name: 'Juan Ugalde',
        email: 'j.ugalde@gmail.com',
        key: 'Operaciones',
    },
    {
        key: '5',
        name: 'Juan Ugalde',
        email: 'j.ugalde@gmail.com',
        key: 'Operaciones',
    },
    {
        key: '6',
        name: 'Juan Ugalde',
        email: 'j.ugalde@gmail.com',
        key: 'Operaciones',
    },
    {
        key: '7',
        name: 'Juan Ugalde',
        email: 'j.ugalde@gmail.com',
        key: 'Operaciones',
    },
    {
        key: '8',
        name: 'Juan Ugalde',
        email: 'j.ugalde@gmail.com',
        key: 'Operaciones',
    },
    {
        key: '9',
        name: 'Juan Ugalde',
        email: 'j.ugalde@gmail.com',
        key: 'Operaciones',
    },
  ];
  const [listData, setListData] = useState([]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  const onScroll = (e) => {
     console.log();
  };

  return (
    <div className="panel" 
      style={{
        paddingLeft: "65px",
        paddingRight: "65px",
        height: "100%",
      }}
    >
      <div className='panel padding-small large-title pv-medium color-w'
        style={{
          borderRadius: "10px 10px 0px 0px",
          background: "#6A67CE",
        }}
      >
        Elige a los jugadores de esta competencia
      </div>
      <div className="padding-small">
        <Row>
          <Col span={15}>
            <div className="">
              <Button className="small-button hm">Jugadores</Button>
              <Button className="small-button hm ml-bit">Añadir nuevo jugador</Button>
            </div>
          </Col>
          <Col span={9}>
            <Search
              className='hm'
              placeholder="Ingresa nombre ,email del jugador o departamento"
              allowClear
              onSearch={onSearch}
              style={{
                  width: "100%",
              }}
            />
          </Col>
        </Row>
      </div>
      <div  
        className="choose-player-table"
        style={{
          height: "calc(100% - 70px)"
        }}
      >
        <Row style={{height: "100%"}}>
          <Col span={14} style={{height: "100%"}}>
            <Table
              columns={competationColumn}
              dataSource={competationData}
              pagination={false}
              scroll={{
                y: "100",
              }}
              rowSelection={{
                type: 'checkbox',
                ...rowSelection,
              }}
            />
            <div className="w-100 v-center">
              <Button className="small-button hm">Añadir seleccionados</Button>
            </div>
  );
};

export default VerifyComponent;
