import { Button, Input, Typography, Collapse, Steps, Table } from 'antd';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ExcelUpload from '../../components/general/ExcelUpload';
import Manual from '../../components/general/Manual';
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import {getQuestionList} from '../../components/actions/Questions';

import '../../scss/dashboard.scss';

const { Text, Title, Link } = Typography;
const { Search } = Input;
const { Panel } = Collapse;
const { Step } = Steps;

const customDot = (dot, { status, index }) => (
  <img src={`/img/icon/step-${status}.png`}/>
);

export default function GeneralPage() {
  const [tab, setTab] = useState(1);
  const navigate = useNavigate();
  const questionTableColumn = [
    {
      title: 'Preguntas',
      dataIndex: 'question',
      key: 'question',
    },
    {
      title: 'Alternativas',
      dataIndex: 'alternative',
      key: 'alternative',
      render: (alternative) => (
        <div className='flex-column h-start'>
          {alternative.map((alter, index) => (  
            <div className='h-center mt-bit'>
              {alter.state === 'success' ? <CheckCircleFilled style={{color: "#01cf96",fontSize: '20px'}} /> : <CloseCircleFilled style={{color: "#f42b35",fontSize: '20px'}} />}
              <Text className='small-title ml-bit'>{alter.title}</Text>
            </div>
          ))}  
        </div>
      )
    },
    {
      title: 'Categoría',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Tiempo',
      dataIndex: 'weather',
      key: 'weather',
    },
    {
      title: 'Acciones',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <div className='v-around'>
          <img src='/img/icon/edit.png'/>
          <img src='/img/icon/delete.png'/>
        </div>
      )
    },
  ];

  const [questionTableData, setQuestionData] = useState([]);

  useEffect(() => {
    if (tab === 2) {
      getQuestionList((list) => {
        let question = []
        setQuestionData(data);
      });
    }
  }, [tab]);
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
            {tab == 1 ? <ExcelUpload setTab={setTab} /> : <Manual />}
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
                  dataSource={questionTableData}
                  pagination={false}
              />
          </div>
          :''}
    </div>
  );
}
