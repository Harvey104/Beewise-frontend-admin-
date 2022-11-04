import { Button, Form, Input, Typography, Collapse, Col, Row, Steps } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons';

import '../../scss/dashboard.scss';

const { Text, Title, Link } = Typography;
const { Search } = Input;
const { Panel } = Collapse;
const { Step } = Steps;

const customDot = (dot, { status, index }) => (
    <img src={`/img/icon/step-${status}.png`}/>
);

export default function GeneralPage() {
  const navigate = useNavigate();
  const [mountState, setMountState] = useState(0);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    if (!mountState) {
      var event = new Date();
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      setDate(event.toLocaleDateString('es-ES', options));
      setTime(formatAMPM(event));
      setMountState(1);
    }
  });

  const onSearch = (value) => console.log(value);
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
  return (
    <div className='dashboard'>
        <div className='panel borderL flex-column h-center gap-bit b-shadow'>
            <div className='v-between  w-100 h-end'>
                <Title className='large-title no-margin'>Hola Carla Venegas,</Title>
                <Text className='smail-title'>23 de Marzo, 2022</Text>
            </div>
            <div className='v-between  w-100'>
                <Text className='bit-title'>Bienvenido a la creacion de juegos.</Text>
                <Text className='bit-title'>09:00 AM</Text>
            </div>
        </div>
        <div className='panel borderL mt-medium b-shadow'>
            <div className='v-between'>
                <Title className='large-title no-margin bold'>Datos Generales</Title>
                <div className='h-center' style={{width: "40%"}}>
                  <Steps current={0} progressDot={customDot}>
                    <Step />
                    <Step />
                    <Step />
                  </Steps>
                </div>
            </div>
            <Form
              {...formItemLayout}
              layout={formLayout}
            >
              <div className='mt-large ml-large' style={{width: "30%"}}>
                <Form.Item label="Nombre del juego">
                  <Input placeholder="Ingrese nombre del juego" className='hm'/>
                </Form.Item>
              </div>
              <div className='mt-large'>
                <Title className='large-title no-margin bold color-b'>Multimedia</Title>
                <Text className='bit-title bold ml-large'>Ingresa una imagen o un video complementario / NO pueden ser ambos</Text>
              </div>
              <div className='mt-large ml-large'>
                <Row>
                  <Col span={10}>
                    <Form.Item label="Subir imagen">
                      <Button className={`common-button hm`} onClick={() => navigate('/home/dashboard')} type="primary">
                        <UploadOutlined />Selecciona un archivo
                      </Button>
                    </Form.Item>
                  </Col>
                  <Col span={10}>
                    <Form.Item label="Subir imagen">
                      <Input placeholder="Ingrese URL del video" className='hm'/>
                    </Form.Item>
                  </Col>
                  <Col span={4}></Col>
                </Row>
              </div>
              <div className='mt-large v-end'>
                <Form.Item>
                  <Button className={`small-button hm`} onClick={() => navigate('/general')} type="primary">
                    Continuar
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button className={`small-button hm ml-medium`} onClick={() => navigate('/general/question')} type="primary">
                    Continuar
                  </Button>
                </Form.Item>
              </div>
            </Form>
        </div>
    </div>
  );
}
