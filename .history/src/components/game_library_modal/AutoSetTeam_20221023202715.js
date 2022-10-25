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
    <>
      
    </>
  );
};

export default AutoSetComponent;
