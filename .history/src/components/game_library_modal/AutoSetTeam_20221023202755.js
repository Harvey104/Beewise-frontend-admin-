import React, { useState } from "react";
import { Typography } from 'antd';
import { Button , Col, Row, Input, Select } from 'antd';

import { GAME_MODAL_STEP } from "../../constant";

const { Text, Link } = Typography;
const { Option } = Select;

const AutoSetComponent = (props) => {
  const next = props.next;
  const previous = props.previous;
  let teams = [
    1, 2, 3, 4, 5
  ];
  
  const handleTeamChange = (value) => {
    console.log(value);
  };
  return (
    <div style={}>
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
        <Button className="small-button hm" onClick={() => resetPlayers()}>Añadir seleccionados</Button>
      </div>
    </div>
  );
};

export default AutoSetComponent;
