import React, {useState} from "react";
import { Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button , Col, Row, Input, Form } from 'antd';

const { Text, Link } = Typography;

const ManualComponent = () => {
    const navigate = useNavigate();
    const [question, setQuestionTitle] = useState('');
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [duration, setTime] = useState(0);
    const [firstAnswer, setFirstAnswer] = useState('');
    const [firstAnswerAccuracy, setFirstAnswerAccuracy] = useState('');
    const [secondAnswer, setSecondAnswer] = useState('');
    const [secondAnswerAccuracy, setSecondAnswerAccuracy] = useState('');
    const [thirdAnswer, setThirdAnswer] = useState('');
    const [ThirdAnswerAccuracy, setThirdAnswerAccuracy] = useState('');
    const [fourthAnswer, setFourthAnswer] = useState('');
    const [fourthAnswerAccuracy, setFourthAnswerAccuracy] = useState('');
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
              <Input.TextArea rows={4}  placeholder="Ingrese nombre del juego" onChange={((e) => setQuestionTitle(e.target.value))}/>
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
                <Input placeholder="Ingrese la categoría de la pregunta" className='hm' onChange={((e) => setCategory(e.target.value))}/>
            </Form.Item>
            <Form.Item label="Añade Subcategoría">
                <Input placeholder="Naturaleza" className='hm' onChange={((e) => setSubCategory(e.target.value))}/>
            </Form.Item>
            <Form.Item label="Tiempo de respuesta">
                <Input placeholder="10 segundos" className='hm' onChange={((e) => setCategory(e.target.value))}/>
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

export default ManualComponent;
