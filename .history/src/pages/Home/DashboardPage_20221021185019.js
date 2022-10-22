import { Button, Modal, Input, Typography, Collapse, Table, Progress } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DownloadOutlined } from '@ant-design/icons';

import ModalSearch from '../../components/dashboard_modal/ModalSearch';
import '../../scss/dashboard.scss';

const { Text, Title, Link } = Typography;
const { Search } = Input;
const { Panel } = Collapse;

export default function DashboardPage() {
  const navigate = useNavigate();
  const [modalStep, setModalStep] = useState('game');
  const onSearch = (value) => console.log(value);

  const categoryTableColumn = [
    {
      title: 'Categoría',
      dataIndex: 'category',
      key: 'category',
      render: (category) => (
        <div style={{
            background: '#6A67CE',
            padding: '3px 12px',
            display: 'inline',
            border: '1px solid #6A67CE',
            borderRadius: '5px',
            color: '#FFFFFF'
        }}>{category}</div>
      )
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Aciertos',
      dataIndex: 'hit',
      key: 'hit',
    },
    {
      title: 'Manejo de categoría',
      dataIndex: 'manage',
      key: 'manage',
      render: (per) => (
        <Progress percent={per} status="active"  strokeColor="#6A67CE" />
      )
    },
  ];
  const categoryTableData = [
    {
      key: '1',
      category: 'Cultura general',
      total: 124,
      hit: 90,
      manage: 90,
    },
    {
        key: '2',
        category: 'Cultura empresarial',
        total: 124,
        hit: 90,
        manage: 40,
    }
  ];

  const questionTableColumn = [
    {
      title: 'Pregunta',
      dataIndex: 'ask',
      key: 'ask',
    },
    {
      title: 'Correctas',
      dataIndex: 'correct',
      key: 'correct',
      sorter: {
        compare: (a, b) => a.correct - b.correct,
        multiple: 3,
      }
    },
    {
      title: 'Incorrectas',
      dataIndex: 'incorrect',
      key: 'incorrect',
      sorter: {
        compare: (a, b) => a.incorrect - b.incorrect,
        multiple: 3,
      }
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      sorter: {
        compare: (a, b) => a.total - b.total,
        multiple: 3,
      }
    },
  ];
  const questionTableData = [
    {
        key: '1',
        ask: 'Grupo de personas entrenadas para dar atención primara a un herido hasta la llegada de apoyo especializado',
        correct: '96% (173)',
        incorrect: '4% (7)',
        total: 180,
    },
    {
        key: '2',
        ask: 'Grupo de personas entrenadas para dar atención primara a un herido hasta la llegada de apoyo especializado',
        correct: '96% (173)',
        incorrect: '4% (7)',
        total: 180,
    },
  ];
  
  const rankTableColumn = [
    {
      title: 'Puesto',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Equipo',
      dataIndex: 'equipment',
      key: 'equipment',
    },
    {
      title: 'Puntaje',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: '% Aciertos',
      dataIndex: 'hit',
      key: 'hit',
    },
    {
      title: 'Desafíos completados',
      dataIndex: 'challengeC',
      key: 'challengeC',
    },
    {
      title: 'Desafíos pendientes',
      dataIndex: 'challengeP',
      key: 'challengeP',
    },
  ];
  const rankTableData = [
    {
        key: '1',
        position: '#1',
        name: 'Nombre equipo',
        equipment: 'Nombre equipo',
        score: 1000,
        hit: '75%',
        challengeC: 25,
        challengeP: 15,
    },
    {
        key: '2',
        position: '#1',
        name: 'Nombre equipo',
        equipment: 'Nombre equipo',
        score: 900,
        hit: '75%',
        challengeC: 25,
        challengeP: 15,
    },
    {
        key: '3',
        position: '#1',
        name: 'Nombre equipo',
        equipment: 'Nombre equipo',
        score: 800,
        hit: '75%',
        challengeC: 25,
        challengeP: 15,
    },
    {
        key: '4',
        position: '#1',
        name: 'Nombre equipo',
        equipment: 'Nombre equipo',
        score: 700,
        hit: '75%',
        challengeC: 25,
        challengeP: 15,
    },
    {
        key: '4',
        position: '#1',
        name: 'Nombre equipo',
        equipment: 'Nombre equipo',
        score: 600,
        hit: '75%',
        challengeC: 25,
        challengeP: 15,
    },
    {
        key: '4',
        position: '#1',
        name: 'Nombre equipo',
        equipment: 'Nombre equipo',
        score: 500,
        hit: '75%',
        challengeC: 25,
        challengeP: 15,
    },
  ];
  
  const rankETableColumn = [
    {
      title: 'Puesto',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Equipo',
      dataIndex: 'equipment',
      key: 'equipment',
    },
    {
      title: 'Integrantes',
      dataIndex: 'member',
      key: 'member',
    },
    {
      title: 'Puntaje',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: '% Aciertos',
      dataIndex: 'hit',
      key: 'hit',
    },
    {
      title: 'Desafíos completados',
      dataIndex: 'challengeC',
      key: 'challengeC',
    },
    {
      title: 'Desafíos pendientes',
      dataIndex: 'challengeP',
      key: 'challengeP',
    },
  ];
  const rankETableData = [
    {
        key: '1',
        position: '#1',
        equipment: 'Nombre equipo',
        member: '6',
        score: 6,
        hit: '75%',
        challengeC: 25,
        challengeP: 15,
    },
    {
        key: '2',
        position: '#1',
        equipment: 'Nombre equipo',
        member: '5',
        score: 5,
        hit: '75%',
        challengeC: 25,
        challengeP: 15,
    },
    {
        key: '3',
        position: '#1',
        equipment: 'Nombre equipo',
        member: '7',
        score: 7,
        hit: '75%',
        challengeC: 25,
        challengeP: 15,
    },
  ];

  const [open, setOpen] = useState(false);
  const showModal = () => {
      setOpen(true);
  };
  const handleOk = (e) => {
      console.log(e);
      setOpen(false);
  };
  
  const handleCancel = (e) => {
      console.log(e);
      setOpen(false);
  };

  return (
    <div className='dashboard'>
        <div className='panel borderL flex-column h-center gap-bit b-shadow'>
            <div className='v-between  w-100 h-end'>
                <Title className='large-title no-margin'>Hola Carla Venegas,</Title>
                <Text className='smail-title'>23 de Marzo, 2022</Text>
            </div>
            <div className='v-between  w-100'>
                <Text className='bit-title'>Bienvenido al Dashboard.</Text>
                <Text className='bit-title'>09:00 AM</Text>
            </div>
        </div>
        <div className='panel borderL mt-medium b-shadow'>
            <div className='v-between'>
                <Title className='large-title no-margin bold'>Olímpiadas del saber</Title>
                <Search
                    placeholder="Busca un juego para visualizar resultados"
                    allowClear
                    onSearch={onSearch}
                    style={{
                        width: "40%",
                    }}
                    onClick={showModal}
                />
            </div>
            <div className='mt-medium padding-bit'>
                <Collapse 
                    bordered={false}
                    defaultActiveKey={['1']}
                >
                    <Panel 
                        header="1. Resultados Generales" key="1" 
                        className='collapse-panel mb-large'
                        extra={
                            <div onClick={e => e.stopPropagation()}>
                              <Button size="small"
                                   style={{
                                        borderRadius: "6px",
                                        fontFamily: 'Inter',
                                        fontStyle: "normal",
                                        fontWeight: 600,
                                        fontSize: "14px",
                                        lineHeight: "17px",
                                        display: "flex",
                                        alignItems: "center",
                                        color: "#6A67CE",
                                        height: 35
                                   }}
                              >
                                <DownloadOutlined />
                                Descargar informe
                              </Button>
                            </div>
                        }
                    >
                        <div className='v-around'>
                            <div className='panel square-panel flex-column h-center'>
                                <img src="/img/icon/user.png"/>
                                <Text 
                                    style={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: 600,
                                        fontSize: '19.7593px',
                                        lineHeight: '24px',
                                        textAlign: 'center',
                                        color: '#4F4F4F !important',
                                    }}
                                >
                                    89%
                                </Text>
                                <Text 
                                    style={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        lineHeight: '16px',
                                        color: '#4F4F4F',
                                        textAlign: 'center',
                                    }}
                                >
                                    % de Participación
                                </Text>
                            </div>
                            <div className='panel square-panel flex-column h-center'>
                                <img src="/img/icon/bright.png"/>
                                <Text 
                                    style={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: 600,
                                        fontSize: '19.7593px',
                                        lineHeight: '24px',
                                        textAlign: 'center',
                                        color: '#4F4F4F !important',
                                    }}
                                >
                                    89%
                                </Text>
                                <Text 
                                    style={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        lineHeight: '16px',
                                        color: '#4F4F4F',
                                        textAlign: 'center',
                                    }}
                                >
                                    % de aciertos
                                </Text>
                            </div>
                            <div className='panel square-panel flex-column h-center'>
                                <img src="/img/icon/upload.png"/>
                                <Text 
                                    style={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: 600,
                                        fontSize: '19.7593px',
                                        lineHeight: '24px',
                                        textAlign: 'center',
                                        color: '#4F4F4F !important',
                                    }}
                                >
                                    20
                                </Text>
                                <Text 
                                    style={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        lineHeight: '16px',
                                        color: '#4F4F4F',
                                        textAlign: 'center',
                                    }}
                                >
                                    Desafíos lanzados
                                </Text>
                            </div>
                            <div className='panel square-panel flex-column h-center'>
                                <img src="/img/icon/down2.png"/>
                                <Text 
                                    style={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: 600,
                                        fontSize: '19.7593px',
                                        lineHeight: '24px',
                                        textAlign: 'center',
                                        color: '#4F4F4F !important',
                                    }}
                                >
                                    15
                                </Text>
                                <Text 
                                    style={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        lineHeight: '16px',
                                        color: '#4F4F4F',
                                        textAlign: 'center',
                                    }}
                                >
                                    Desafios Contestados
                                </Text>
                            </div>
                            <div className='panel square-panel flex-column h-center'>
                                <img src="/img/icon/down.png"/>
                                <Text 
                                    style={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: 600,
                                        fontSize: '19.7593px',
                                        lineHeight: '24px',
                                        textAlign: 'center',
                                        color: '#4F4F4F !important',
                                    }}
                                >
                                    5
                                </Text>
                                <Text 
                                    style={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        lineHeight: '16px',
                                        color: '#4F4F4F',
                                        textAlign: 'center',
                                    }}
                                >
                                    Desafios Pendientes
                                </Text>
                            </div>
                        </div>
                    </Panel>
                    <Panel header="2. Desempeño por categoría de preguntas" key="2" className='collapse-panel mb-large'>
                        <Table
                            columns={categoryTableColumn}
                            dataSource={categoryTableData}
                            pagination={false}
                        />
                    </Panel>
                    <Panel header="3. Desempeño por pregunta" key="3" className='collapse-panel mb-large'>
                        <Table
                            columns={questionTableColumn}
                            dataSource={questionTableData}
                            pagination={false}
                        />
                    </Panel>
                    <Panel header="4. Ranking jugadores" key="4" className='collapse-panel mb-large'>
                        <Table
                            columns={rankTableColumn}
                            dataSource={rankTableData}
                            pagination={false}
                        />
                    </Panel>
                    <Panel header="5. Ranking equipos" key="5" className='collapse-panel mb-large'>
                        <Table
                            columns={rankETableColumn}
                            dataSource={rankETableData}
                            pagination={false}
                        />
                    </Panel>
                </Collapse>
            </div>
        </div>
        <Modal
            title=''
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            width="60%"
            height="80%"
            style={{
              // top: "0",
              paddingBottom: "0px",
            }}
            footer=''
        >
            <div className='modal-content' style={{border: "none", height: "100%", display: "block"}}>
              <Text className='header-title color-back'>Búsqueda</Text><br/>
              <Text className='medium-title'>Para visualizar los resultados, busca la competencia, juego o jugador que desees.</Text><br/>
              <div className='mt-medium'>
                <Button className='bit-button hm' onClick={() => setModalStep('game')}>Juegos</Button>
                <Button className='bit-button hm ml-bit back-grey' onClick={() => setModalStep('game')}>Competencias</Button>
                <Button className='bit-button hm ml-bit back-grey'>Jugadores</Button>
              </div>
              <Search
                  className='mt-small hm'
                  placeholder="Busca un juego para visualizar resultados"
                  allowClear
                  onSearch={onSearch}
                  style={{
                      width: "50%",
                  }}
                />
              <ModalSearch mode={modalStep} />
            </div>
        </Modal>
    </div>
  );
}
