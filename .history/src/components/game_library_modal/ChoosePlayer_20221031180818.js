import React, { useState, useEffect } from "react";
import { Typography, Button, Col, Row, Input, Table, List, Form, Select } from 'antd';
import { FiFilter } from "react-icons/fi";
import VirtualList from 'rc-virtual-list';
import { TiDeleteOutline } from "react-icons/ti";

import { GAME_MODAL_STEP, DEPARTMENT } from "../../constant";
import { getPlayersAction } from '../../components/actions/Player';
const { Search } = Input;
const { Option } = Select;

const { Text, Link } = Typography;
const ContainerHeight = "calc(100% - 200px)";

const ChoosePlayerComponent = (props) => {
  const next = props.next;
  const previous = props.previous;
  const setPropsSelectedPlayer = props.setSelectedPlayer;
  const propsSelectedPlayer = props.selectedPlayer;
  const onSearch = (value) => console.log(value);
  const [mode, setMode] = useState("select");
  const [listState, setlistState] = useState(0);
  const [listState, setlistState] = useState(0);
  const [playerList, setPlayerList] = useState([]);
  const [listData, setListData] = useState([]);
  
  useEffect(() => {
    if (!listState) {
      getPlayersAction((users) => {
        let userlist = users.map((user) => {
          return {
            firstName: user.profile.firstName,
            department: user.profile.department,
            email: user.email,
            key: user.id,
          }
        });

        setPlayerList(userlist);
        setlistState(1);
      });
    }
  });
  
  const playerColumn = [
    {
      title: 'Nombre',
      dataIndex: 'firstName',
      key: 'firstName',
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

  const resetPlayers = () => {
    setListData(selectedPlayer);
  }
  
  const formLayout = 'vertical';
  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setSelectedPlayer(selectedRows);
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
  const removePlayer = (key) => {
    console.log(listData);
    let removedData = listData.filter(listItem => {
      return listItem.key !== key;
    });
    setListData(removedData);
  }
  
  const handleDepartChange = (value) => {
    console.log(value);
  };

  return (
    <div className="panel" 
      style={{
        paddingLeft: "65px",
        paddingRight: "65px",
        paddingTop: "0px",
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
              <Button className="small-button hm" onClick={() => setMode("select")}>Jugadores</Button>
              <Button className="small-button hm ml-bit" onClick={() => setMode("input")}>Añadir nuevo jugador</Button>
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
        style={{
          height: "calc(100% - 70px)"
        }}
      >
        <Row style={{height: "100%"}}>
          <Col span={14} style={{height: "100%"}} className="choose-player-table">
            {
              mode === "select" ?
                (<>
                <Table
                  columns={playerColumn}
                  dataSource={playerList}
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
                </>)
              : 
                (<Form
                  {...formItemLayout}
                  layout={formLayout}
                >
                  <Text className="medium-title mt-small">Ingresa los datos requeridos para agregar a un nuevo jugador</Text>
                  <Form.Item label="Nombre y Apellido del jugador" className="mt-medium">
                    <Input placeholder="Ingrese nombre y apellido del jugador" className='hm' style={{width: "80%"}}/>
                  </Form.Item>
                  <Form.Item label="Departamento" className="mt-medium">
                    <Select
                      defaultValue="Indique un departamento"
                      style={{
                        width: "50%",
                        height: "40px"
                      }}
                      onChange={handleDepartChange}
                    >
                      {DEPARTMENT.map((d) => (
                        <Option key={d}>{d}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item label="Email" className="mt-medium">
                    <Input placeholder="Ingrese un email" className='hm' style={{width: "80%"}}/>
                  </Form.Item>
                </Form>)
            }
            
          </Col>
          <Col span={10} style={{height: "100%"}}>
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
                  Jugadores añadidos: 0
                </div>
                <List>
                  <VirtualList
                    data={listData}
                    height={ContainerHeight}
                    itemHeight={47}
                    itemKey="key"
                    onScroll={onScroll}
                  >
                    {(item) => (
                      <List.Item key={item.key}>
                        <List.Item.Meta
                          title={<div className="v-between pv-large list-title">
                            {"# " + item.key + "  " + item.firstName + " "} 
                            <TiDeleteOutline onClick={() => removePlayer(item.key)} style={{color: "#EB5757", fontSize: "20px"}}/>
                          </div>}
                        />
                      </List.Item>
                    )}
                  </VirtualList>
                </List>
                <div className="w-100 v-center" style={{marginTop: "34px"}}>
                  <Button className="small-button hm" onClick={() => next(GAME_MODAL_STEP.CHOOSE_TEAM)}>Continuar</Button>
                </div>
              </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ChoosePlayerComponent;
