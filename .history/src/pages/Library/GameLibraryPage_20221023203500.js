import { Button, Steps, Input, Typography, Collapse, Table, Modal, Col, Row } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactInputVerificationCode from "react-input-verification-code";
import { DownloadOutlined } from '@ant-design/icons';
import Carousel from 'react-bootstrap/Carousel';

import Verify from "../../components/game_library_modal/Verify";
import ChoosePlayer from "../../components/game_library_modal/ChoosePlayer";
import ChooseTeam from "../../components/game_library_modal/ChooseTeam";
import SetTeam from "../../components/game_library_modal/SetTeam";

import { GAME_MODAL_STEP } from '../../constant';
import '../../scss/dashboard.scss';

const { Text, Title, Link } = Typography;
const { Search } = Input;
const { Panel } = Collapse;
const { Step } = Steps;

const customDot = (dot, { status, index }) => (
  <img src={`/img/icon/step-${status}-b.png`}/>
);

export default function GameLibraryPage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);

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
  
  const competationColumn = [
    {
      title: 'Competencia',
      dataIndex: 'competation',
      key: 'competation',
      sorter: {
        compare: (a, b) => a.correct - b.correct,
        multiple: 3,
      }
    },
    {
      title: 'Juego',
      dataIndex: 'play',
      key: 'play',
      sorter: {
        compare: (a, b) => a.correct - b.correct,
        multiple: 3,
      }
    },
    {
      title: 'Categoría',
      dataIndex: 'category',
      key: 'category',
      sorter: {
        compare: (a, b) => a.correct - b.correct,
        multiple: 3,
      }
    },
    {
      title: 'Jugadores',
      dataIndex: 'player',
      key: 'player',
      sorter: {
        compare: (a, b) => a.correct - b.correct,
        multiple: 3,
      }
    },
    {
      title: 'Compartido',
      dataIndex: 'shared',
      key: 'shared',
      sorter: {
        compare: (a, b) => a.correct - b.correct,
        multiple: 3,
      }
    },
    {
      title: 'Finaliza',
      dataIndex: 'end',
      key: 'end',
      sorter: {
        compare: (a, b) => a.correct - b.correct,
        multiple: 3,
      }
    },
  ];
  const competationData = [
    {
        key: '1',
        competation: 'Nombre Comp.',
        play: 'Aves nacionales',
        category: 'Naturaleza',
        player: 20,
        shared: '08 - 04',
        end: '15 - 12',
    },
    {
        key: '2',
        competation: 'Nombre Comp.',
        play: 'Aves nacionales',
        category: 'Naturaleza',
        player: 20,
        shared: '08 - 04',
        end: '15 - 12',
    },
    {
        key: '3',
        competation: 'Nombre Comp.',
        play: 'Aves nacionales',
        category: 'Naturaleza',
        player: 20,
        shared: '08 - 04',
        end: '15 - 12',
    },
    {
        key: '4',
        competation: 'Nombre Comp.',
        play: 'Aves nacionales',
        category: 'Naturaleza',
        player: 20,
        shared: '08 - 04',
        end: '15 - 12',
    },
  ];

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
                <Text className='bit-title'>Aqui podras iniciar,revisar y administrar los juegos creados.</Text>
                <Text className='bit-title'>09:00 AM</Text>
            </div>
        </div>
        <div className='borderL mt-medium b-shadow'>
            <div className='game-library-main-header h-center pv-large'>
                <Text className='medium-title' style={{color: "#6A67CE"}}>BIBLIOTECA DE JUEGOS</Text>
            </div>
            <div className='ph-large'>
              <Carousel>
                <Carousel.Item>
                  <Row>
                      <Col span={2} className=""></Col>
                      <Col span={4} className="padding-small">
                          <div className='library-card flex-column h-center padding-small v-between gap-medium'>
                              <Text className='sub-title'>Aves nacionales</Text>
                              <Text className='sub-text'><img src='/img/icon/answer.png'/>22 preguntas</Text>
                              <Button className={`long-button hs back-yellow`} onClick={() => {showModal()}} type="primary">
                                Iniciar
                              </Button>
                          </div>
                      </Col>
                      <Col span={4} className="padding-small">
                          <div className='library-card flex-column h-center padding-small v-between gap-medium'>
                              <Text className='sub-title'>Aves nacionales</Text>
                              <Text className='sub-text'><img src='/img/icon/answer.png'/>00 preguntas</Text>
                              <Button className={`long-button hs back-yellow`} onClick={() => {showModal()}} type="primary">
                                Iniciar
                              </Button>
                          </div>
                      </Col>
                      <Col span={4} className="padding-small">
                          <div className='library-card flex-column h-center padding-small v-between gap-medium'>
                              <Text className='sub-title'>Aves nacionales</Text>
                              <Text className='sub-text'><img src='/img/icon/answer.png'/>00 preguntas</Text>
                              <Button className={`long-button hs back-yellow`} onClick={() => {showModal()}} type="primary">
                                Iniciar
                              </Button>
                          </div>
                      </Col>
                      <Col span={4} className="padding-small">
                          <div className='library-card flex-column h-center padding-small v-between gap-medium'>
                              <Text className='sub-title'>Aves nacionales</Text>
                              <Text className='sub-text'><img src='/img/icon/answer.png'/>00 preguntas</Text>
                              <Button className={`long-button hs back-yellow`} onClick={() => {showModal()}} type="primary">
                                Iniciar
                              </Button>
                          </div>
                      </Col>
                      <Col span={4} className="padding-small">
                          <div className='library-card flex-column h-center padding-small v-between gap-medium'>
                              <Text className='sub-title'>Aves nacionales</Text>
                              <Text className='sub-text'><img src='/img/icon/answer.png'/>00 preguntas</Text>
                              <Button className={`long-button hs back-yellow`} onClick={() => {showModal()}} type="primary">
                                Iniciar
                              </Button>
                          </div>
                      </Col>
                      <Col span={2} className=""></Col>
                  </Row>
                  <Row>
                      <Col span={2} className=""></Col>
                      <Col span={4} className="padding-small">
                          <div className='library-card flex-column h-center padding-small v-between gap-medium'>
                              <Text className='sub-title'>Aves nacionales</Text>
                              <Text className='sub-text'><img src='/img/icon/answer.png'/>22 preguntas</Text>
                              <Button className={`long-button hs back-yellow`} onClick={() => {showModal()}} type="primary">
                                Iniciar
                              </Button>
                          </div>
                      </Col>
                      <Col span={4} className="padding-small">
                          <div className='library-card flex-column h-center padding-small v-between gap-medium'>
                              <Text className='sub-title'>Aves nacionales</Text>
                              <Text className='sub-text'><img src='/img/icon/answer.png'/>22 preguntas</Text>
                              <Button className={`long-button hs back-yellow`} onClick={() => {showModal()}} type="primary">
                                Iniciar
                              </Button>
                          </div>
                      </Col>
                      <Col span={4} className="padding-small">
                          <div className='library-card flex-column h-center padding-small v-between gap-medium'>
                              <Text className='sub-title'>Aves nacionales</Text>
                              <Text className='sub-text'><img src='/img/icon/answer.png'/>22 preguntas</Text>
                              <Button className={`long-button hs back-yellow`} onClick={() => {showModal()}} type="primary">
                                Iniciar
                              </Button>
                          </div>
                      </Col>
                      <Col span={4} className="padding-small">
                          <div className='library-card flex-column h-center padding-small v-between gap-medium'>
                              <Text className='sub-title'>Aves nacionales</Text>
                              <Text className='sub-text'><img src='/img/icon/answer.png'/>22 preguntas</Text>
                              <Button className={`long-button hs back-yellow`} onClick={() => {showModal()}} type="primary">
                                Iniciar
                              </Button>
                          </div>
                      </Col>
                      <Col span={4} className="padding-small">
                          <div className='library-card flex-column h-center padding-small v-between gap-medium'>
                              <Text className='sub-title'>Aves nacionales</Text>
                              <Text className='sub-text'><img src='/img/icon/answer.png'/>22 preguntas</Text>
                              <Button className={`long-button hs back-yellow`} onClick={() => {showModal()}} type="primary">
                                Iniciar
                              </Button>
                          </div>
                      </Col>
                      <Col span={2} className=""></Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                      <Col span={2} className=""></Col>
                      <Col span={4} className="padding-small">
                          <div className='library-card flex-column h-center padding-small v-between gap-medium'>
                              <Text className='sub-title'>Nombre juego</Text>
                              <Text className='sub-text'><img src='/img/icon/answer.png'/>22 preguntas</Text>
                              <Button className={`long-button hs back-yellow`} onClick={() => {showModal()}} type="primary">
                                Iniciar
                              </Button>
                          </div>
                      </Col>
                      <Col span={4} className="padding-small">
                          <div className='library-card flex-column h-center padding-small v-between gap-medium'>
                              <Text className='sub-title'>Nombre juego</Text>
                              <Text className='sub-text'><img src='/img/icon/answer.png'/>00 preguntas</Text>
                              <Button className={`long-button hs back-yellow`} onClick={() => {showModal()}} type="primary">
                                Iniciar
                              </Button>
                          </div>
                      </Col>
                      <Col span={4} className="padding-small">
                          <div className='library-card flex-column h-center padding-small v-between gap-medium'>
                              <Text className='sub-title'>Nombre juego</Text>
                              <Text className='sub-text'><img src='/img/icon/answer.png'/>00 preguntas</Text>
                              <Button className={`long-button hs back-yellow`} onClick={() => {showModal()}} type="primary">
                                Iniciar
                              </Button>
                          </div>
                      </Col>
                      <Col span={4} className="padding-small">
                          <div className='library-card flex-column h-center padding-small v-between gap-medium'>
                              <Text className='sub-title'>Nombre juego</Text>
                              <Text className='sub-text'><img src='/img/icon/answer.png'/>00 preguntas</Text>
                              <Button className={`long-button hs back-yellow`} onClick={() => {showModal()}} type="primary">
                                Iniciar
                              </Button>
                          </div>
                      </Col>
                      <Col span={4} className="padding-small">
                          <div className='library-card flex-column h-center padding-small v-between gap-medium'>
                              <Text className='sub-title'>Nombre juego</Text>
                              <Text className='sub-text'><img src='/img/icon/answer.png'/>00 preguntas</Text>
                              <Button className={`long-button hs back-yellow`} onClick={() => {showModal()}} type="primary">
                                Iniciar
                              </Button>
                          </div>
                      </Col>
                      <Col span={2} className=""></Col>
                  </Row>
                  <Row>
                      <Col span={2} className=""></Col>
                      <Col span={4} className="padding-small">
                          <div className='library-card flex-column h-center padding-small v-between gap-medium'>
                              <Text className='sub-title'>Aves nacionales</Text>
                              <Text className='sub-text'><img src='/img/icon/answer.png'/>22 preguntas</Text>
                              <Button className={`long-button hs back-yellow`} onClick={() => {}} type="primary">
                                Iniciar
                              </Button>
                          </div>
                      </Col>
                      <Col span={4} className="padding-small">
                          <div className='library-card flex-column h-center padding-small v-between gap-medium'>
                              <Text className='sub-title'>Aves nacionales</Text>
                              <Text className='sub-text'><img src='/img/icon/answer.png'/>22 preguntas</Text>
                              <Button className={`long-button hs back-yellow`} onClick={() => {}} type="primary">
                                Iniciar
                              </Button>
                          </div>
                      </Col>
                      <Col span={4} className="padding-small">
                          <div className='library-card flex-column h-center padding-small v-between gap-medium'>
                              <Text className='sub-title'>Aves nacionales</Text>
                              <Text className='sub-text'><img src='/img/icon/answer.png'/>22 preguntas</Text>
                              <Button className={`long-button hs back-yellow`} onClick={() => {}} type="primary">
                                Iniciar
                              </Button>
                          </div>
                      </Col>
                      <Col span={4} className="padding-small">
                          <div className='library-card flex-column h-center padding-small v-between gap-medium'>
                              <Text className='sub-title'>Aves nacionales</Text>
                              <Text className='sub-text'><img src='/img/icon/answer.png'/>22 preguntas</Text>
                              <Button className={`long-button hs back-yellow`} onClick={() => {}} type="primary">
                                Iniciar
                              </Button>
                          </div>
                      </Col>
                      <Col span={4} className="padding-small">
                          <div className='library-card flex-column h-center padding-small v-between gap-medium'>
                              <Text className='sub-title'>Aves nacionales</Text>
                              <Text className='sub-text'><img src='/img/icon/answer.png'/>22 preguntas</Text>
                              <Button className={`long-button hs back-yellow`} onClick={() => {}} type="primary">
                                Iniciar
                              </Button>
                          </div>
                      </Col>
                      <Col span={2} className=""></Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </div>
        </div>
        <div className='mt-medium'>
        <Collapse 
            bordered={false}
            defaultActiveKey={[]}
        >
            <Panel 
                header="COMPETENCIAS POR INICIAR" key="1" 
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
                              height: 35,
                          }}
                          className="pv-medium color-g"
                      >
                        Detalles
                      </Button>
                    </div>
                }
            >
              <Table
                  columns={competationColumn}
                  dataSource={competationData}
                  pagination={false}
                  rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                  }}
                />
            </Panel>
            <Panel header="COMPETENCIAS ACTIVAS" key="2" 
                className='collapse-panel mb-large panel-h-green'
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
                              height: 35,
                          }}
                          className="pv-medium color-g"
                      >
                        Detalles
                      </Button>
                    </div>
                }
            >
              <Table
                  columns={competationColumn}
                  dataSource={competationData}
                  pagination={false}
                  rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                  }}
                />
            </Panel>
            <Panel header="COMPETENCIAS FINALIZAS" key="3" 
                className='collapse-panel mb-large panel-h-grey'
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
                              height: 35,
                          }}
                          className="pv-medium color-g"
                      >
                        Detalles
                      </Button>
                    </div>
                }
            >
              <Table
                  columns={competationColumn}
                  dataSource={competationData}
                  pagination={false}
                  rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                  }}
                />
            </Panel>
        </Collapse>
        </div>
        
        <Modal
            title=''
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            width="70%"
            height="80%"
            style={{
              paddingBottom: "0px",
            }}
            footer=''
        >
            <div className={`modal-content ${ modalStep === GAME_MODAL_STEP.CHOOSE_PLAYER ? "" : "flex-column v-between h-center" }`} style={{border: "none", height: "100%"}}>
                <div className='w-100'>
                  <div className='' style={{width: "40%"}}>
                    <Steps current={modalStep - 1} progressDot={customDot}>
                      <Step />
                      <Step />
                      <Step />
                      <Step />
                    </Steps>
                  </div>
                  <Text className='large-title' style={{marginLeft: "66px"}}>
                    {
                      modalStep === GAME_MODAL_STEP.CHOOSE_PLAYER ? "Nombre Competencia / Código 1-1-1-1-1" :
                      modalStep === GAME_MODAL_STEP.CHOOSE_TEAM ? "Nombre Competencia / Código 1-1-1-1-1" :
                      modalStep === GAME_MODAL_STEP.VERIFY ? "" : ''
                    }
                  </Text>
                </div>
                {
                  modalStep === GAME_MODAL_STEP.VERIFY ? <Verify previous={handleCancel} next={setModalStep}/> :
                  modalStep === GAME_MODAL_STEP.CHOOSE_PLAYER ? <ChoosePlayer next={setModalStep}/> : 
                  modalStep === GAME_MODAL_STEP.CHOOSE_TEAM ? <ChooseTeam next={setModalStep}/> : 
                  modalStep === GAME_MODAL_STEP.AUTO_SET_TEAM ? <SetTeam next={setModalStep}/> : ''
                }
            </div>
        </Modal>
    </div>
  );
}
