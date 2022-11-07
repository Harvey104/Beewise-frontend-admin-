import { Button, Input, Typography, Collapse, Steps, Table, Form, Col, Row } from 'antd';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ExcelUpload from '../../components/general/ExcelUpload';
import Manual from '../../components/general/Manual';
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import {getQuestionList} from '../../components/actions/Questions';
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { UploadOutlined } from '@ant-design/icons';

import { formatAMPM } from '../../function';
import {addQuestionAction, editQuestionAction} from '../../components/actions/Questions';

import '../../scss/dashboard.scss';

const { Text, Title, Link } = Typography;
const { Search, TextArea } = Input;
const { Panel } = Collapse;
const { Step } = Steps;

const customDot = (dot, { status, index }) => (
  <img src={`/img/icon/step-${status}.png`}/>
);


export default function QuestionPage() {
  const [panel, setPanel] = useState(1);
  const [tab, setTab] = useState(1);
  const navigate = useNavigate();
  const [editId, setEditId] = useState(-1);
  const [topicTitle, setTopicTitle] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [duration, setTime] = useState(0);
  const [firstAnswer, setFirstAnswer] = useState('');
  const [firstAnswerAccuracy, setFirstAnswerAccuracy] = useState(1);
  const [secondAnswer, setSecondAnswer] = useState('');
  const [secondAnswerAccuracy, setSecondAnswerAccuracy] = useState(0);
  const [thirdAnswer, setThirdAnswer] = useState('');
  const [thirdAnswerAccuracy, setThirdAnswerAccuracy] = useState(0);
  const [fourthAnswer, setFourthAnswer] = useState('');
  const [fourthAnswerAccuracy, setFourthAnswerAccuracy] = useState(0);
  const [mountState, setMountState] = useState(0);
  const [date, setDate] = useState('');
  const [time, setLocalTime] = useState('');
  const [questionData, setQuestionData] = useState([]);
  const [tableData, setTableData] = useState([]);

  let question = '';
  const setQuestionTitle = (val) => {
    question = val;
    console.log(question);
  }

  useEffect(() =>{
    let tdata = questionData.map((item, index) => {
      return {
        key: index,
        question: item.question,
        answers: [
          {
            state: item.firstAnswerAccuracy,
            title: item.firstAnswer
          }, 
          {
            state: item.secondAnswerAccuracy,
            title: item.secondAnswer
          },
          {
            state: item.thirdAnswerAccuracy,
            title: item.thirdAnswer
          },
          {
            state: item.fourthAnswerAccuracy,
            title: item.fourthAnswer
          }
        ],
        category: item.category,
        time: item.duration,
      };
    });
    setTableData(tdata);console.log(tdata);
    var event = new Date();
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    setDate(event.toLocaleDateString('es-ES', options));
    setLocalTime(formatAMPM(event));
    setMountState(1);
  }, [questionData]);

  const questionTableColumn = [
    {
      title: 'Preguntas',
      dataIndex: 'question',
      key: 'question',
      render: (quiz, record) => (
        editId === record.id ?
          <TextArea rows={4} className='hm' value={quiz} onChange={(e) => setQuestionTitle(e.target.value)}/>
          :
          quiz
      )
    },
    {
      title: 'Alternativas',
      dataIndex: 'answers',
      key: 'answers',
      render: (alternative, record) => (
        editId !== record.id ?
          (<div className='flex-column h-start'>
            {alternative.map((alter, index) => (  
              <div className='h-center mt-bit'>
                {alter.state === 1 ? <CheckCircleFilled style={{color: "#01cf96",fontSize: '20px'}} /> : <CloseCircleFilled style={{color: "#f42b35",fontSize: '20px'}} />}
                <Text className='small-title ml-bit'>{alter.title}</Text>
              </div>
            ))}  
          </div>)
          : 
          (
            (<div className='flex-column h-start'>
            {alternative.map((alter, index) => (  
              <div className='h-center mt-bit'>
                {alter.state === 1 ? <CheckCircleFilled style={{color: "#01cf96",fontSize: '20px'}} /> : <CloseCircleFilled style={{color: "#f42b35",fontSize: '20px'}} />}
                <Input className='hm' value={alter.title} />
              </div>
            ))}  
          </div>)
          )
      )
    },
    {
      title: 'Categoría',
      dataIndex: 'category',
      key: 'category',
      render: (category, record) => (
        editId === record.id ?
          <Input className='hm' value={category} onChange={(e) => setCategory(e.target.value)}/>
          :
          category
      )
    },
    {
      title: 'Tiempo',
      dataIndex: 'time',
      key: 'time',
      render: (time, record) => (
        editId === record.id ?
          <Input className='hm' value={time} onChange={(e) => setTime(e.target.value)}/>
          :
          time
      )
    },
    {
      title: 'Acciones',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => (
        editId !== record.id ?
          <div className='v-around'>
            <BiEdit style={{color: "#8146FF",fontSize: '20px'}} onClick={() => setEditId(record.id)}/>
            <RiDeleteBin6Line style={{color: "#F26E6E",fontSize: '20px'}} onClick={() => {}}/>
          </div>
          :
          <div className='v-around h-center'>
            <AiOutlineCheckCircle style={{color: "#38DF2A",fontSize: '20px'}} onClick={() => editQuestion()} />
            <RiDeleteBin6Line style={{color: "#F26E6E",fontSize: '20px'}} onClick={() => {}}/>
          </div>
      )
    },
  ];

  const addQuestion = () => {
    addQuestionAction({
      topic: topicTitle,
      videoUrl: imgUrl,
      questions: questionData
    }, () => {
      navigate('/game/library')
    });
  }

  const editQuestion = () => {
    editQuestionAction([{
      id: editId,
      question: question,
      type: 1,
      videoUrl: '',
      category: category,
      duration: duration,
      firstAnswer: firstAnswer,
      firstAnswerAccuracy: firstAnswerAccuracy,
      secondAnswer: secondAnswer,
      secondAnswerAccuracy: secondAnswerAccuracy,
      thirdAnswer: thirdAnswer,
      thirdAnswerAccuracy: thirdAnswerAccuracy,
      fourthAnswer: fourthAnswer,
      fourthAnswerAccuracy: fourthAnswerAccuracy,
    }], () => {
      console.log('success');
    }, () => {
      console.log('failure');
    },
  );
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
  return (
    <>
      {
        panel === 1 ? 
          (
            <div>
              <div className='content-h' style={{}}>
                  <div className='v-between  w-100 h-end'>
                      <Title className='large-title no-margin'>Hola Carla Venegas,</Title>
                      <Text className='smail-title'>{date}</Text>
                  </div>
                  <div className='v-between  w-100'>
                      <Text className='bit-title'>Bienvenido a la creacion de juegos.</Text>
                      <Text className='bit-title'>{time}</Text>
                  </div>
              </div>
              <div className='dashboard'>
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
                            <Input placeholder="Ingrese nombre del juego" onChange={(e) => setTopicTitle(e.target.value)} className='hm'/>
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
                                <Input placeholder="Ingrese URL del video" onChange={(e) => setImgUrl(e.target.value)} className='hm'/>
                              </Form.Item>
                            </Col>
                            <Col span={4}></Col>
                          </Row>
                        </div>
                        <div className='mt-large v-end'>
                          <Form.Item>
                            <Button className={`small-button hm`} onClick={() => {}} type="primary">
                              Continuar
                            </Button>
                          </Form.Item>
                          <Form.Item>
                            <Button className={`small-button hm ml-medium`} onClick={() => setPanel(2)} type="primary">
                              Continuar
                            </Button>
                          </Form.Item>
                        </div>
                      </Form>
                  </div>
              </div>
            </div>
          )
          :
          (
            <>
              <div className='content-h' style={{}}>
                  <div className='v-between  w-100 h-end'>
                      <Title className='large-title no-margin'>Hola Carla Venegas,</Title>
                      <Text className='smail-title'>{date}</Text>
                  </div>
                  <div className='v-between  w-100'>
                      <Button className={`small-button hm`} onClick={() => addQuestion()} type="primary">
                        Guardar Juego
                      </Button>
                  </div>
              </div>
              <div className='dashboard'>
                <div className='panel borderL flex-column h-center gap-bit b-shadow'>
                  <div className='v-between  w-100 h-end'>
                      <Title className='large-title no-margin'>Hola Carla Venegas,</Title>
                      <Text className='smail-title'>{date}</Text>
                  </div>
                  <div className='v-between  w-100'>
                      <Button className={`small-button hm`} onClick={() => addQuestion()} type="primary">
                        Guardar Juego
                      </Button>
                  </div>
                </div>
                  <div className='panel borderL mt-medium b-shadow'>
                      <div className='v-between'>
                          <Title className='large-title no-margin bold'>Agrega tus preguntas</Title>
                          <div className='h-center' style={{width: "40%"}}>
                            <Steps current={1} progressDot={customDot}>
                              <Step />
                              <Step />
                              <Step />
                            </Steps>
                          </div>
                      </div>
                      <Text className='bit-title'>Para cargar tus preguntas puedes hacerlo de forma manual o carga masiva en excel.</Text>
                      <div className='padding-bit back-grey pv-small ph-bit mt-medium borderS' style={{display: "table"}}>
                          <Button className={tab == 1 ? `small-button back-grey hm` : `small-button hm`} disabled={tab == 1 ? true : false} onClick={() => setTab(1)} type="primary">
                            Manual
                          </Button>
                          <Button className={tab != 1 ? `small-button back-grey hm` : `small-button hm`} disabled={tab != 1 ? true : false} onClick={() => setTab(2)} type="primary">
                            Cargar excel
                          </Button>
                      </div>
                      {tab == 1 ? <ExcelUpload setTab={setTab} setQuestionData={setQuestionData} /> : <Manual setQuestionData={setQuestionData} questionData={questionData}/>}
                  </div>
                  {tab != 1 ? 
                    <div className='panel borderL mt-medium b-shadow'>
                        <div className='summary-header-panel v-between pv-medium h-center'>
                          <Text className='summary-title'>Resumen de preguntas</Text>
                          <Text className='summary-text'>Cantidad de preguntas: 5</Text>
                          <Text className='summary-text'>Total estimado de juego: 50 seg</Text>
                        </div>
                        <Table
                            columns={questionTableColumn}
                            dataSource={tableData}
                            pagination={false}
                        />
                    </div>
                    :''}
              </div>
            </>
          )
      }
    </>
  );
}
