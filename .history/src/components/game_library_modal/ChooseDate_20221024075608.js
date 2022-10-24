import React, { useState } from "react";
import { Typography } from 'antd';
import { Button , Col, Row, Table, Select } from 'antd';
import { RiErrorWarningFill } from "react-icons/ri";

import { GAME_MODAL_STEP } from "../../constant";

const { Text, Link } = Typography;
const { Option } = Select;

const ChooseDateComponent = (props) => {
  const next = props.next;
  const previous = props.previous;
  const [tab, setTab] = useState(1);
  
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
          height: "61px",
        }}>
          <Row>
            <Col span={12}>
              <Text className="pv-medium"
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "30px",
                  color: "#142748",
                  lineHeight: "61px"
                }}
              >
                ¿Cómo te gustaría visualizar los resultados?
              </Text>
            </Col>
            <Col span={12} className="v-between">
              <div className='padding-bit back-grey pv-small ph-bit borderS' style={{display: "table", marginTop: "2px"}}>
                <Button className={tab == 1 ? `small-button back-grey hm` : `small-button hm`} disabled={tab == 1 ? true : false} onClick={() => setTab(1)} type="primary">
                  Manual
                </Button>
                <Button className={tab != 1 ? `small-button back-grey hm` : `small-button hm`} disabled={tab != 1 ? true : false} onClick={() => setTab(2)} type="primary">
                  Cargar excel
                </Button>
              </div>
              <RiErrorWarningFill style={{fontSize: "16px"}} />
            </Col>
          </Row>
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
