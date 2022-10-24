import React, { useState } from "react";
import { Typography } from 'antd';
import { Button , Col, Row, Table, Select } from 'antd';
import { FiFilter } from "react-icons/fi";

import { GAME_MODAL_STEP } from "../../constant";

const { Text, Link } = Typography;
const { Option } = Select;

const SetTeamComponent = (props) => {
  const next = props.next;
  const previous = props.previous;
  
  const competationColumn = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      sort: () => {}
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: "Equipo",
      dataIndex: 'tool',
      key: 'tool',
      render: (tool) => {
        <Button className="filter-button" style={{width: "100%"}}>
          <Text className="small-title">Seleccione un equipo</Text>
        </Button>
      }
    },
  ];
  const competationData = [
    {
        key: 1,
        name: 'Juan Ugalde',
        email: 'j.ugalde@gmail.com',
        tool: 'sss',
    },
    {
        key: 2,
        name: 'Juan Ugalde',
        email: 'j.ugalde@gmail.com',
    },
    {
        key: 3,
        name: 'Juan Ugalde',
        email: 'j.ugalde@gmail.com',
    },
    {
        key: 4,
        name: 'Juan Ugalde',
        email: 'j.ugalde@gmail.com',
    },
    {
        key: 5,
        name: 'Juan Ugalde',
        email: 'j.ugalde@gmail.com',
    },
    {
        key: 6,
        name: 'Juan Ugalde',
        email: 'j.ugalde@gmail.com',
    },
    {
        key: 7,
        name: 'Juan Ugalde',
        email: 'j.ugalde@gmail.com',
    },
    {
        key: 8,
        name: 'Juan Ugalde',
        email: 'j.ugalde@gmail.com',
    },
    {
        key: 9,
        name: 'Juan Ugalde',
        email: 'j.ugalde@gmail.com',
    },
    {
        key: 10,
        name: 'Juan Ugalde',
        email: 'j.ugalde@gmail.com',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      // setSelectedPlayer(selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  
  const handleTeamChange = (value) => {
    console.log(value);
  };
  return (
    <>
      <div className="set-team"
        style={{
          width: '70%',
          height: "80%"
        }}
      >
        <div className="v-between">
          <Text
            style={{
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "30px",
              color: "#142748"
            }}
          >
            Equipos elegidos:  4
          </Text>
          <Button className="filter-button" style={{width: "30%"}}>
            <Text className="small-title">Filtro de Busqueda</Text>
            <FiFilter style={{fontSize: "16px", color: "#6A67CE"}}/>
          </Button>
        </div>
        <Table
          className="mt-bit"
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
      </div>
      <div className="w-100 v-around">
        <Button className="small-button hm" onClick={() => {}}>Volver</Button>
        <Button className="small-button hm" onClick={() => next(GA)}>Continuar</Button>
      </div>
    </>
  );
};

export default SetTeamComponent;
