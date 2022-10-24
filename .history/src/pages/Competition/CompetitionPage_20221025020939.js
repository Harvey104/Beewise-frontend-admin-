import { Button, Form, Input, Typography, Collapse, List, Progress, Col, Row } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DownloadOutlined } from '@ant-design/icons';

import '../../scss/dashboard.scss';

const { Text, Title, Link } = Typography;
const { Search } = Input;
const { Panel } = Collapse;

export default function CompetitionPage() {
  const navigate = useNavigate();
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
  const equiListData = [
    {
      id: "1",
      equi: "Nombre equipo",
      score: "900"
    },{
      id: "2",
      equi: "Nombre equipo",
      score: "900"
    },{
      id: "3",
      equi: "Nombre equipo",
      score: "900"
    },{
      id: "4",
      equi: "Nombre equipo",
      score: "900"
    },{
      id: "5",
      equi: "Nombre equipo",
      score: "900"
    },{
      id: "6",
      equi: "Nombre equipo",
      score: "900"
    },{
      id: "7",
      equi: "Nombre equipo",
      score: "900"
    },{
      id: "8",
      equi: "Nombre equipo",
      score: "900"
    },{
      id: "9",
      equi: "Nombre equipo",
      score: "900"
    },{
      id: "10",
      equi: "Nombre equipo",
      score: "900"
    },{
      id: "11",
      equi: "Nombre equipo",
      score: "900"
    },{
      id: "12",
      equi: "Nombre equipo",
      score: "900"
    },
  ];
  
  return (
    <div className='dashboard'>
        <div className='panel borderL flex-column h-center gap-bit b-shadow'>
            <div className='v-between  w-100 h-end'>
                <Title className='large-title no-margin'>Hola Carla Venegas,</Title>
                <Text className='smail-title'>23 de Marzo, 2022</Text>
            </div>
            <div className='v-between  w-100'>
                <Text className='bit-title'>Visualiza los resultados en vivo.</Text>
                <Text className='bit-title'>09:00 AM</Text>
            </div>
        </div>
        <div className='mt-large'>
          <div className='v-between pv-large'>
              <Title className='large-title no-margin bold'>Nombre competencia</Title>
              <Search
                  placeholder="Buscar competencia"
                  allowClear
                  onSearch={onSearch}
                  style={{
                      width: "30%",
                  }}
              />
          </div>
          <Collapse 
              bordered={false}
              defaultActiveKey={[]}
              className="v-between mt-small"
          >
              <Panel 
                  header="Equipos" key="1" 
                  className='collapse-panel'
                  style={{width: "27%"}}
              >
                <Text className='small-title color-b'>Revisa el puntaje de los equipos.</Text>
                <div className='v-between mt-small'>
                  <img src='/img/icon/rank1.png'/>
                  <div className='v-between h-center pv-small'
                   style={{
                    background: "rgba(106, 103, 206, 0.5)",
                    borderRadius: "10px",
                    width: "calc(100% - 60px)"
                  }}>
                    <Text style={{
                      fontFamily: 'Poppins',
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#FFFFFF",
                    }}>Equipo 1</Text>
                    <Text style={{
                      fontFamily: 'Poppins',
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: "24px",
                      color: "#FFFFFF",
                    }}>1.200 ptos</Text>
                  </div>
                </div>
                <div className='v-between mt-small'>
                  <img src='/img/icon/rank2.png'/>
                  <div className='v-between h-center pv-small'
                   style={{
                    background: "rgba(106, 103, 206, 0.5)",
                    borderRadius: "10px",
                    width: "calc(100% - 60px)"
                  }}>
                    <Text style={{
                      fontFamily: 'Poppins',
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#FFFFFF",
                    }}>Equipo 1</Text>
                    <Text style={{
                      fontFamily: 'Poppins',
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: "24px",
                      color: "#FFFFFF",
                    }}>1.200 ptos</Text>
                  </div>
                </div>
                <div className='v-between mt-small'>
                  <img src='/img/icon/rank3.png'/>
                  <div className='v-between h-center pv-small'
                   style={{
                    background: "rgba(106, 103, 206, 0.5)",
                    borderRadius: "10px",
                    width: "calc(100% - 60px)"
                  }}>
                    <Text style={{
                      fontFamily: 'Poppins',
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#FFFFFF",
                    }}>Equipo 1</Text>
                    <Text style={{
                      fontFamily: 'Poppins',
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: "24px",
                      color: "#FFFFFF",
                    }}>1.200 ptos</Text>
                  </div>
                </div>
                <div className='competition-panel mt-small'>
                  <List
                    size="large"
                    header={
                      <Row>
                        <Col span={6}>
                          <Text className="medium-title color-b">Puesto</Text>
                        </Col>
                        <Col span={12}>
                          <Text className="medium-title color-b">Equipo</Text>
                        </Col>
                        <Col span={6}>
                          <Text className="medium-title color-b">Puntaje</Text>
                        </Col>
                      </Row>
                    }
                    dataSource={equiListData}
                    renderItem={item => (
                      <List.Item style={{padding: "none"}}>
                        <Row style={{width: "100%"}}>
                          <Col span={6}><Text className="medium-title color-b">{"# " + item.id}</Text></Col>
                          <Col span={12}><Text className="medium-title color-b">{item.equi}</Text></Col>
                          <Col span={6}><Text className="medium-title color-b">{item.score}</Text></Col>
                        </Row>
                      </List.Item>
                    )}
                  />
                </div>
              </Panel>
              <Panel header="Jugadores" key="1" 
                  className='collapse-panel'
                  style={{width: "37%"}}
              >
                <Text className='small-title color-b'>Revisa el puntaje de los jugadores.</Text>
                <div className='v-between mt-small'>
                  <img src='/img/icon/rank1.png'/>
                  <div className='v-between h-center pv-small'
                   style={{
                    background: "#FFFAEC",
                    borderRadius: "10px",
                    width: "calc(100% - 60px)"
                  }}>
                    <div className='flex-column v-center'>
                      <Text style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: "16px", color: "#6A67CE", }}>Nombre jugador</Text>
                      <Text style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: "14px", color: "#6A67CE", }}>Nombre equipo</Text>
                    </div>
                    <Text style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: "14px", color: "#6A67CE", }}>1.600 pts</Text>
                  </div>
                </div>
                <div className='v-between mt-small'>
                  <img src='/img/icon/rank2.png'/>
                  <div className='v-between h-center pv-small'
                   style={{
                    background: "#FFFAEC",
                    borderRadius: "10px",
                    width: "calc(100% - 60px)"
                  }}>
                    <div className='flex-column v-center'>
                      <Text style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: "16px", color: "#6A67CE", }}>Nombre jugador</Text>
                      <Text style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: "14px", color: "#6A67CE", }}>Nombre equipo</Text>
                    </div>
                    <Text style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: "14px", color: "#6A67CE", }}>1.600 pts</Text>
                  </div>
                </div>
                <div className='v-between mt-small'>
                  <img src='/img/icon/rank3.png'/>
                  <div className='v-between h-center pv-small'
                   style={{
                    background: "#FFFAEC",
                    borderRadius: "10px",
                    width: "calc(100% - 60px)"
                  }}>
                    <div className='flex-column v-center'>
                      <Text style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: "16px", color: "#6A67CE", }}>Nombre jugador</Text>
                      <Text style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: "14px", color: "#6A67CE", }}>Nombre equipo</Text>
                    </div>
                    <Text style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: "14px", color: "#6A67CE", }}>1.600 pts</Text>
                  </div>
                </div>
                <div className='competition-panel mt-small'>
                  <List
                    size="large"
                    header={
                      <Row>
                        <Col span={6}>
                          <Text className="medium-title color-b">Puesto</Text>
                        </Col>
                        <Col span={12}>
                          <Text className="medium-title color-b">Equipo</Text>
                        </Col>
                        <Col span={6}>
                          <Text className="medium-title color-b">Puntaje</Text>
                        </Col>
                      </Row>
                    }
                    dataSource={equiListData}
                    renderItem={item => (
                      <List.Item style={{padding: "none"}}>
                        <Row style={{width: "100%"}}>
                          <Col span={6}><Text className="medium-title color-b">{"# " + item.id}</Text></Col>
                          <Col span={12}><Text className="medium-title color-b">{item.equi}</Text></Col>
                          <Col span={6}><Text className="medium-title color-b">{item.score}</Text></Col>
                        </Row>
                      </List.Item>
                    )}
                  />
                </div>
              </Panel>
              <Panel header="Desafíos" key="1" 
                  className='collapse-panel'
                  style={{width: "32%"}}
              >
                <Text className='small-title color-b'>Desafíos activos</Text>
                <div className='mt-small'>
                  <div className='padding-small' style={{background: "#FFFAEC", borderRadius: "10px"}}>
                    <Text style={{fontFamily: 'Inter', fontWeight: 600, fontSize: "16px", lineHeight: "17px"}}>Jugador 1 vs Jugador 2</Text>
                    <Text style={{fontFamily: 'Inter', fontWeight: 500, fontSize: "14px", lineHeight: "15px"}}>Equipo 1 desafío a Equipo 2</Text>
                    <Text style={{fontFamily: 'Inter', fontWeight: 500, fontSize: "14px", lineHeight: "15px"}}>Ganador: Jugador 1</Text>
                  </div>
                </div>
              </Panel>
          </Collapse>
        </div>
    </div>
  );
}
