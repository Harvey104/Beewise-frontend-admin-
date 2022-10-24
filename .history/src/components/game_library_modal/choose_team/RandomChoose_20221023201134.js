import React, { useState } from "react";
import { Typography } from 'antd';
import { Button , Table, Select } from 'antd';

import { GAME_MODAL_STEP } from "../../constant";

const { Text, Link } = Typography;
const { Option } = Select;

const RandomChooseComponent = (props) => {
  const next = props.next;
  const previous = props.previous;
  const [chooseMode, setChooseMode] = useState("random");
  let teams = [
    1, 2, 3, 4, 5
  ];
  
  const handleTeamChange = (value) => {
    console.log(value);
  };
  return (
    <>
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
      <div className='w-100'>
        <Button className='bit-button hs' onClick={() => previous()} type="primary">Volver</Button>
      </div>
    </>
  );
};

export default RandomChooseComponent;
