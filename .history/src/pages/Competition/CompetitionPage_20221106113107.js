import { Button, Form, Input, Typography, Collapse, List, Progress, Col, Row } from 'antd';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DownloadOutlined } from '@ant-design/icons';

import { teamRankingAction } from '../../components/actions/Game';
import { playerRankingAction } from '../../components/actions/Player';
import { formatAMPM } from '../../function';
import '../../scss/dashboard.scss';

const { Text, Title, Link } = Typography;
const { Search } = Input;
const { Panel } = Collapse;

export default function CompetitionPage() {
  const navigate = useNavigate();
  const [playerRank, setPlayerRank] = useState([]);
  const [teamRank, setTeamRank] = useState([]);
  const [winPlayers, setWinPlayers] = useState([]);
  const [winTeams, setWinTeams] = useState([]);
  const [mountState, setMountState] = useState(0);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    if (!mountState) {
      setMountState(1);
      var event = new Date();
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      setDate(event.toLocaleDateString('es-ES', options));
      setTime(formatAMPM(event));

      playerRankingAction((list) => {
        let winners = [];
        let players = list.map((item, index) => {
          if (winners.length < 4) {
            winners.push({
              key: winners.length + 1,
              name: item.firstName,
              equipment: item.team,
              score: item.score,
            });
          }
          return {
            key: index + 1,
            position: '#' + (index + 1),
            name: item.firstName,
            equipment: item.team,
            score: item.score,
          }
        });
        setWinPlayers(winners);
        setPlayerRank(players);
      });

      teamRankingAction((data) => {
        let winners = [];
        let teamRankData = data.map((item, index) => {
          if (winners.length < 3) {
            winners.push({
              key: winners.length + 1,
              equipment: item.competition.competitionName + " " + item.teamName,
              score: item.score,
            });
          }
          return {
            key: index + 1,
            position: '#' + (index + 1),
            equipment: item.competition.competitionName + " " + item.teamName,
            score: item.score,
          }
        });
        setWinTeams(winners);
        setTeamRank(teamRankData);
      });
    }
  });
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
                <Text className='smail-title'>{date}</Text>
            </div>
            <div className='v-between  w-100'>
                <Text className='bit-title'>Visualiza los resultados en vivo.</Text>
                <Text className='bit-title'>{time}</Text>
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
                {
                  winTeams.map((team, index) => {
                    return <div className='v-between mt-small'>
                      <img src={`/img/icon/rank${index + 1}.png`}/>
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
                        }}>{team.equipment}</Text>
                        <Text style={{
                          fontFamily: 'Poppins',
                          fontWeight: 500,
                          fontSize: "14px",
                          lineHeight: "24px",
                          color: "#FFFFFF",
                        }}>{team.score} ptos</Text>
                      </div>
                    </div>
                  })
                }
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
                <div className='mt-small' style={{overflowY: "auto", height: "654px"}}>
                  <div>
                    <div className='padding-small flex-column' style={{background: "#FFFAEC", borderRadius: "10px"}}>
                      <Text style={{fontFamily: 'Inter', fontWeight: 600, fontSize: "16px", lineHeight: "24px", color: "#6A67CE"}}>Jugador 1 vs Jugador 2</Text>
                      <Text className='mt-small' style={{fontFamily: 'Inter', fontWeight: 500, fontSize: "14px", lineHeight: "18px", color: "#6A67CE"}}>Equipo 1 desafío a Equipo 2</Text>
                      <Text style={{fontFamily: 'Inter', fontWeight: 500, fontSize: "14px", lineHeight: "18px", color: "#6A67CE"}}>Ganador: Jugador 1</Text>
                    </div>
                  </div>
                  <div className='mt-small'>
                    <div className='padding-small flex-column' style={{background: "#B4B3E7", borderRadius: "10px"}}>
                      <Text style={{fontFamily: 'Inter', fontWeight: 600, fontSize: "16px", lineHeight: "24px", color: "#FFD66B"}}>Nombre Desafío</Text>
                      <Text className='mt-small' style={{fontFamily: 'Inter', fontWeight: 500, fontSize: "14px", lineHeight: "18px", color: "#FFFFFF"}}>Jugador 1 vs Jugador 2</Text>
                      <Text style={{fontFamily: 'Inter', fontWeight: 500, fontSize: "14px", lineHeight: "18px", color: "#FFFFFF"}}>Ganador: Pendiente</Text>
                    </div>
                  </div>
                  <div className='mt-small'>
                    <div className='padding-small flex-column' style={{background: "#FFFAEC", borderRadius: "10px"}}>
                      <Text style={{fontFamily: 'Inter', fontWeight: 600, fontSize: "16px", lineHeight: "24px", color: "#6A67CE"}}>Jugador 1 vs Jugador 2</Text>
                      <Text className='mt-small' style={{fontFamily: 'Inter', fontWeight: 500, fontSize: "14px", lineHeight: "18px", color: "#6A67CE"}}>Equipo 1 desafío a Equipo 2</Text>
                      <Text style={{fontFamily: 'Inter', fontWeight: 500, fontSize: "14px", lineHeight: "18px", color: "#6A67CE"}}>Ganador: Jugador 1</Text>
                    </div>
                  </div>
                  <div className='mt-small'>
                    <div className='padding-small flex-column' style={{background: "#B4B3E7", borderRadius: "10px"}}>
                      <Text style={{fontFamily: 'Inter', fontWeight: 600, fontSize: "16px", lineHeight: "24px", color: "#FFD66B"}}>Nombre Desafío</Text>
                      <Text className='mt-small' style={{fontFamily: 'Inter', fontWeight: 500, fontSize: "14px", lineHeight: "18px", color: "#FFFFFF"}}>Jugador 1 vs Jugador 2</Text>
                      <Text style={{fontFamily: 'Inter', fontWeight: 500, fontSize: "14px", lineHeight: "18px", color: "#FFFFFF"}}>Ganador: Pendiente</Text>
                    </div>
                  </div>
                  <div className='mt-small'>
                    <div className='padding-small flex-column' style={{background: "#FFFAEC", borderRadius: "10px"}}>
                      <Text style={{fontFamily: 'Inter', fontWeight: 600, fontSize: "16px", lineHeight: "24px", color: "#6A67CE"}}>Jugador 1 vs Jugador 2</Text>
                      <Text className='mt-small' style={{fontFamily: 'Inter', fontWeight: 500, fontSize: "14px", lineHeight: "18px", color: "#6A67CE"}}>Equipo 1 desafío a Equipo 2</Text>
                      <Text style={{fontFamily: 'Inter', fontWeight: 500, fontSize: "14px", lineHeight: "18px", color: "#6A67CE"}}>Ganador: Jugador 1</Text>
                    </div>
                  </div>
                  <div className='mt-small'>
                    <div className='padding-small flex-column' style={{background: "#B4B3E7", borderRadius: "10px"}}>
                      <Text style={{fontFamily: 'Inter', fontWeight: 600, fontSize: "16px", lineHeight: "24px", color: "#FFD66B"}}>Nombre Desafío</Text>
                      <Text className='mt-small' style={{fontFamily: 'Inter', fontWeight: 500, fontSize: "14px", lineHeight: "18px", color: "#FFFFFF"}}>Jugador 1 vs Jugador 2</Text>
                      <Text style={{fontFamily: 'Inter', fontWeight: 500, fontSize: "14px", lineHeight: "18px", color: "#FFFFFF"}}>Ganador: Pendiente</Text>
                    </div>
                  </div>
                  <div className='mt-small'>
                    <div className='padding-small flex-column' style={{background: "#FFFAEC", borderRadius: "10px"}}>
                      <Text style={{fontFamily: 'Inter', fontWeight: 600, fontSize: "16px", lineHeight: "24px", color: "#6A67CE"}}>Jugador 1 vs Jugador 2</Text>
                      <Text className='mt-small' style={{fontFamily: 'Inter', fontWeight: 500, fontSize: "14px", lineHeight: "18px", color: "#6A67CE"}}>Equipo 1 desafío a Equipo 2</Text>
                      <Text style={{fontFamily: 'Inter', fontWeight: 500, fontSize: "14px", lineHeight: "18px", color: "#6A67CE"}}>Ganador: Jugador 1</Text>
                    </div>
                  </div>
                  <div className='mt-small'>
                    <div className='padding-small flex-column' style={{background: "#B4B3E7", borderRadius: "10px"}}>
                      <Text style={{fontFamily: 'Inter', fontWeight: 600, fontSize: "16px", lineHeight: "24px", color: "#FFD66B"}}>Nombre Desafío</Text>
                      <Text className='mt-small' style={{fontFamily: 'Inter', fontWeight: 500, fontSize: "14px", lineHeight: "18px", color: "#FFFFFF"}}>Jugador 1 vs Jugador 2</Text>
                      <Text style={{fontFamily: 'Inter', fontWeight: 500, fontSize: "14px", lineHeight: "18px", color: "#FFFFFF"}}>Ganador: Pendiente</Text>
                    </div>
                  </div>
                </div>
              </Panel>
          </Collapse>
        </div>
    </div>
  );
}
