import React, { useState } from "react";
import { Typography } from 'antd';
import { Button , Col, Row, Input, Table } from 'antd';
import { FiFilter } from "react-icons/fi";

import { GAME_MODAL_STEP } from "../../constant";
const { Search } = Input;

const { Text, Link } = Typography;

const VerifyComponent = (props) => {
  const next = props.next;
  const previous = props.previous;
  const onSearch = (value) => console.log(value);

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
        <Button className="filter-button">
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
  ];

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
          <Col span={12}>
            <Button className="small-button hm">Jugadores</Button>
            <Button className="small-button hm ml-bit">A??adir nuevo jugador</Button>
          </Col>
          <Col span={12}>
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
      <div style={{
        height: "calc(100% - 70px)",
      }}>
        <Row>
          <Col span={14}>
            <Table
              columns={competationColumn}
              dataSource={competationData}
              pagination={false}
              rowSelection={{
                type: 'checkbox',
                ...rowSelection,
              }}
            />
            <div className="w-100 v-center">
              <Button className="small-button hm">A??adir seleccionados</Button>
            </div>
          </Col>
          <Col span={10}>
              <div>
                <div className="panel"
                  style={{
                    background: "#E8E8FF",
                    borderRadius: "10px 10px 0px 0px",
                    padding: "0px",
                    fontFamily: 'Inter',
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "17px,
                    color: #4F4F4F;
                  }}
                >
                  Jugadores a??adidos: 0
                </div>
              </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default VerifyComponent;
