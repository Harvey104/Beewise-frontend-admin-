import { Button, Form, Input, Typography, Collapse, Radio, Col, Row, Space } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DownloadOutlined } from '@ant-design/icons';

import '../../scss/dashboard.scss';

const { Text, Title, Link } = Typography;
const { Search } = Input;
const { Panel } = Collapse;

export default function OtherPage() {
  const navigate = useNavigate();
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  
  return (
    <div className='dashboard'>
        <div className='panel borderL flex-column h-center gap-bit b-shadow'>
            <div className='v-between  w-100 h-end'>
                <Title className='large-title no-margin'>Hola Carla Venegas,</Title>
                <Text className='smail-title'>23 de Marzo, 2022</Text>
            </div>
            <div className='v-between  w-100'>
                <Text className='bit-title'>Configura</Text>
                <Text className='bit-title'>09:00 AM</Text>
            </div>
        </div>
        <div className='mt-large'>
          <Collapse 
              bordered={false}
              defaultActiveKey={[]}
          >
              <Panel 
                  header="Agregar preguntas" key="1" 
                  className='collapse-panel mb-large'
              >
                <div className='pv-large'>
                  <Text className='medium-title color-black'>
                    Desde aquí podrás añadir preguntas para conocer aún más a los jugadores, esto te podrá permitir filtrar de mejor manera a los participantes en cada juego. 
                  </Text>
                </div>
                <div className='pv-large'>
                  <div className='pv-medium' style={{marginTop: "40px"}}>
                    <Text className='medium-title'>
                       El jugador visualizará la pregunta en su registro de la App.
                    </Text>
                    <Row className='mt-bit'>
                      <Col span={12}>
                        <Input placeholder="Ingrese su pregunta" className='hm'/>
                        <Input placeholder="El jugador ingresará una respuesta corta " className='mt-medium hm'/>
                      </Col>
                      <Col span={12} className="pl-large">
                        <Text className='medium-title w-100' style={{fontWeight: 600}}>Respuesta:</Text>
                        <Radio.Group className='mt-small w-100' onChange={onChange} value={value}>
                          <Row>
                            <Col span={12}><Radio value={1}>Texto libre</Radio></Col>
                            <Col span={12}><Radio value={2}>Alternativas</Radio></Col>
                          </Row>
                        </Radio.Group>
                        <div className='v-end'>
                          <Button className={`bit-button hs mt-small`} type="primary">
                            Agregar pregunta
                          </Button>
                        </div>
                      </Col>
                    </Row>
                    <div style={{marginTop: "40px"}}>
                      <Text className='medium-title' style={{fontWeight: 500}}>
                        Resumen Preguntas
                      </Text>
                    </div>
                  </div>
                </div>
              </Panel>
              <Panel header="Notificaciones Push" key="2" 
                  className='collapse-panel mb-large'
              >
                <div className='pv-large'>
                  <Text className='medium-title color-black'>
                    Personaliza y envía notificaciones a los jugadores.
                  </Text>
                </div>
                <div className='pv-large mt-medium'>
                  <Row className='mt-bit'>
                    <Col span={12}>
                      <div>
                        <div className='v-between'>
                          <Text className='medium-title color-black' style={{fontWeight: 600}}>Título</Text>
                          <Text className='medium-title'>0/50</Text>
                        </div>
                        <Input placeholder="Ingrese un título" className='mt-bit hm'/>
                      </div>
                      <div className='mt-small'>
                        <div className='v-between'>
                          <Text className='medium-title color-black' style={{fontWeight: 600}}>Mensaje</Text>
                          <Text className='medium-title'>0/70</Text>
                        </div>
                        <Input placeholder="Ingrese un mensaje" className='mt-bit hm'/>
                      </div>
                    </Col>
                    <Col span={12} className="pl-large">
                    <Text className='medium-title color-black' style={{fontWeight: 600}}>Destinatarios</Text>
                      <Radio.Group className='mt-small w-100' onChange={onChange} value={value}>
                        <Space direction="vertical">
                          <Radio value={1}>Todos</Radio>
                          <Radio value={2}>Por Competencia</Radio>
                        </Space>
                      </Radio.Group>
                      <div style={{ marginTop: "19px" }}>
                        <Input placeholder="Competencia" className='mt-bit hm'/>
                      </div>
                    </Col>
                  </Row>
                  <div className='v-center mt-medium'>
                    <Button className={`small-button hs mt-small`} type="primary">
                      Publicar
                    </Button>
                  </div>
                  <div style={{marginTop: "40px"}}>
                    <Text className='medium-title' style={{fontWeight: 500}}>
                      Resumen Notificaciones
                    </Text>
                  </div>
                </div>
              </Panel>
          </Collapse>
        </div>
    </div>
  );
}
