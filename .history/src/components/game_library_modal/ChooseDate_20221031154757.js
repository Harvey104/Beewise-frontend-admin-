import React, { useState } from "react";
import { Typography } from 'antd';
import { Button , Col, Row, Table, Select } from 'antd';
import { RiErrorWarningFill } from "react-icons/ri";
import Calendar from 'moedim';

import { GAME_MODAL_STEP } from "../../constant";

const { Text, Link } = Typography;
const { Option } = Select;

const ChooseDateComponent = (props) => {
  const next = props.next;
  const previous = props.previous;
  const [tab, setTab] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [termDate, setTermDate] = useState(new Date());
  
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
          width: '85%',
          height: "80%"
        }}
      >
        <div style={{
          background: "#F2F2FF",
          border: "1px solid #E8E8FF",
          borderRadius: "10px",
          height: "61px",
        }}>
          <Row  className="pv-small">
            <Col span={12}>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "#142748",
                  lineHeight: "61px"
                }}
              >
                ¿Cómo te gustaría visualizar los resultados?
              </Text>
            </Col>
            <Col span={12} style={{height: "61px",display: "flex", justifyContent: "end", alignItems: "center"}}>
              <div>
                <div className='padding-bit back-grey pv-small ph-bit borderS' style={{display: "table", width: "388px"}}>
                  <Button className={tab == 1 ? `small-button back-grey hm` : `small-button hm`} disabled={tab == 1 ? true : false} onClick={() => setTab(1)} type="primary">
                    Ponderado
                  </Button>
                  <Button className={tab != 1 ? `small-button back-grey hm` : `small-button hm`} disabled={tab != 1 ? true : false} onClick={() => setTab(2)} type="primary">
                    No Ponderado
                  </Button>
                </div>
              </div>
              <RiErrorWarningFill style={{fontSize: "30px", color: "#5E5BC0", lineHeight: "61px", marginLeft: "6px"}} />
            </Col>
          </Row>
        </div>
        <Text
            style={{
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: "16px",
              color: "#142748",
              lineHeight: "61px"
            }}
          >Selecciona la fecha de  tú competencia</Text>
        <div className="choose-date v-around h-center" >
          <div>
            <Text
              style={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: "14px",
                color: "#191635",
                lineHeight: "21px"
              }}
            >Fecha inicio</Text>
            <Calendar value={value} onChange={(date) => setStartDate(date)} />

          </div>
          <div>
            <Text
              style={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: "14px",
                color: "#191635",
                lineHeight: "21px"
              }}
            >Fecha término</Text>
            <Calendar value={value} onChange={(date) => setValue(date)} />
          </div>
        </div>
      </div>
      <div className="w-100 v-between" style={{paddingLeft: "10%", paddingRight: "10%"}}>
        <Button className="small-button hm" onClick={() => {}}>Volver</Button>
        <Button className="small-button hm" onClick={() => next(GAME_MODAL_STEP.GAME_COMPLETE)}>Continuar</Button>
      </div>
    </>
  );
};

export default ChooseDateComponent;
