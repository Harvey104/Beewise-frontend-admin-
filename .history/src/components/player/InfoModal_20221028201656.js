import React from "react";
import { Typography, Form, Row, Col, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Text, Link } = Typography;

const InfoModal = (props) => {
  const setName = props.name;
  const setSurname = props.surname;
  const setEmail = props.email;

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
    <Form
      {...formItemLayout}
      layout={formLayout}
    >
      <Row>
        <Col className='padding-small' span={12}>
          <Form.Item label={"Nombre "}>
            {
              props.type == 'admin' ? 
                (<Input placeholder="Ingrese nombre" className='hm'/>)
                :
                (<Input placeholder="Ingrese nombre" onClick={(e) => setName(e.target.value)} className='hm'/>)
            }
          </Form.Item>
        </Col>
        <Col className='padding-small' span={12}>
          <Form.Item label={"Apellido"}>
            {
              props.type == 'admin' ? 
                (<Input placeholder="Ingrese su apellido" className='hm'/>)
                :
                (<Input placeholder="Ingrese su apellido" onClick={(e) => setSurname(e.target.value)} className='hm'/>)
            }
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col className='padding-small' span={12}>
          <Form.Item label="Email">
          {
              props.type == 'admin' ? 
                (<Input placeholder="Ingrese su apellido" className='hm'/>)
                :
                (<Input placeholder="Ingrese su apellido" onClick={(e) => setSurname(e.target.value)} className='hm'/>)
            }
            <Input placeholder="Ingrese un email " className='hm'/>
          </Form.Item>
        </Col>
        {
          props.type == 'admin' ? 
            (
              <Col className='padding-small' span={12}>
                <Form.Item label={"Tipo de perfil"}>
                  <Input placeholder={"- Seleccione -"} className='hm'/>
                </Form.Item>
            </Col>)
            :
            ""
        }
      </Row>
    </Form>
  );
};

export default InfoModal;
