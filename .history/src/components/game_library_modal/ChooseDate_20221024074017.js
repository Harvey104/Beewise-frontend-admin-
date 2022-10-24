import React, { useState } from "react";
import { Typography } from 'antd';
import { Button , Col, Row, Table, Select } from 'antd';
import { FiFilter } from "react-icons/fi";

import { GAME_MODAL_STEP } from "../../constant";

const { Text, Link } = Typography;
const { Option } = Select;

const ChooseDateComponent = (props) => {
  const next = props.next;
  const previous = props.previous;
  
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
      <div className="auto-set-panel"
        style={{
          width: '70%',
          height: "80%"
        }}
      >
        <div style={{
          background: "#F2F2FF",
          border: "1px solid #E8E8FF",
          borderRadius: "10px",
        }}>
          <></>
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
      </div>
      <div className="w-100 v-around">
        <Button className="small-button hm" onClick={() => {}}>Volver</Button>
        <Button className="small-button hm" onClick={() => {}}>Continuar</Button>
      </div>
    </>
  );
};

export default ChooseDateComponent;
