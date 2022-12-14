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
  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      appendData();
    }
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
          </Col>
          <Col span={10}>
              <div style={{paddingLeft: "40px"}}>
                <div className="panel pv-small"
                  style={{
                    background: "#E8E8FF",
                    borderRadius: "10px 10px 0px 0px",
                    padding: "0px",
                    fontFamily: 'Inter',
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "64px",
                    color: "#4F4F4F",
                  }}
                >
                  Jugadores añadidos: 0
                </div>
                <List>
                  <VirtualList
                    data={listData}
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
              </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default VerifyComponent;
