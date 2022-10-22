import React from "react";
import withClickOutside from "../WithClickOutside";
import { Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Button , Col, Row, Input, Form } from 'antd';

const { Text, Link } = Typography;

const SearchComponent = () => {
    const navigate = useNavigate();
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
    <>
    <Form
              {...formItemLayout}
              layout={formLayout}
        >
    <Row className="mt-medium" gutter={16}>
      <Col
        className="padding-medium"
        span={14} 
      >
          <Form.Item label="Escribe tu pregunta">
            <Input placeholder="Ingrese nombre del juego" className='hm'/>
          </Form.Item>
          <Form.Item label="Escribe tus respuestas">
            <Input placeholder="Alternativa correcta" className='hm' prefix={<img src="/img/icon/success.png"/>}/>
            <Input placeholder="Alternativa incorrecta" className='hm mt-bit' prefix={<img src="/img/icon/failure.png"/>}/>
            <Input placeholder="Alternativa incorrecta" className='hm mt-bit' prefix={<img src="/img/icon/failure.png"/>}/>
            <Input placeholder="Alternativa incorrecta" className='hm mt-bit' prefix={<img src="/img/icon/failure.png"/>}/>
          </Form.Item>
          <Text className="small-title mt-medium">* El orden de las respuestas se mezclarán al azar.</Text>
      </Col>
      <Col
        className="padding-medium flex-column v-between"
        span={10} 
      >
        <div>
          <Form.Item label="Ingrese categoría">
              <Input placeholder="Ingrese la categoría de la pregunta" className='hm'/>
          </Form.Item>
          <Form.Item label="Añade Subcategoría">
              <Input placeholder="Naturaleza" className='hm'/>
          </Form.Item>
          <Form.Item label="Tiempo de respuesta">
              <Input placeholder="10 segundos" className='hm'/>
          </Form.Item>
        </div>
        <div className="w-100 v-end">
          <Button className={`small-button hm mt-medium`} type="primary">
            Agrega pregunta
          </Button>
        </div>
      </Col>
    </Row>
    </Form>
    </>
  );
};

export default withClickOutside(SearchComponent);
