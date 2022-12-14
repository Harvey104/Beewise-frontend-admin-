import React, { useState } from "react";
import { Typography } from 'antd';
import { Button , Col, Row, Input, Table, List } from 'antd';
import { FiFilter } from "react-icons/fi";
import VirtualList from 'rc-virtual-list';
import { TiDeleteOutline } from "react-icons/ti";

import { GAME_MODAL_STEP } from "../../constant";
const { Search } = Input;

const { Text, Link } = Typography;
const ContainerHeight = "400";

const VerifyComponent = (props) => {
  const next = props.next;
  const previous = props.previous;
  const onSearch = (value) => console.log(value);
  const [mode, setMode] = useState("select");
  
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
  const [listData, setListData] = useState([
    {id: 1, name: "Shuzhi"},
    {id: 2, name: "Shuzhi"}
  ]);

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
  const removePlayer = (id) => {
    let removedData = listData.filter(listItem => {
      return employee.country === 'Canada' && employee.id === 3;
    });
  }

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
              <Button className="small-button hm ml-bit">A??adir nuevo jugador</Button>
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
            {
              mode === "select" ?
                (<>
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
                  <Button className="small-button hm">A??adir seleccionados</Button>
                </div>
                </>)
              : 
                (<div>
                  
                </div>)
            }
            
          </Col>
          <Col span={10}>
              <div className="choose_player_panel" style={{paddingLeft: "40px", height: "100%"}}>
                <div className="pv-medium"
                  style={{
                    background: "#E8E8FF",
                    borderRadius: "10px 10px 0px 0px",
                    // padding: "0px",
                    fontFamily: 'Inter',
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "64px",
                    color: "#4F4F4F",
                  }}
                >
                  Jugadores a??adidos: 0
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
                          title={<div className="v-around list-title">
                            {"# " + item.id + "  " + item.name + " "} 
                            <TiDeleteOutline onClick={() => {}} style={{color: "#EB5757", fontSize: "20px"}}/>
                          </div>}
                        />
                      </List.Item>
                    )}
                  </VirtualList>
                </List>
                <div className="w-100 v-center">
                  <Button className="small-button hm">A??adir seleccionados</Button>
                </div>
              </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default VerifyComponent;
