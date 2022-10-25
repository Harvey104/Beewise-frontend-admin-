import { Button, Form, Input, Typography, Collapse, Table, Progress, Col, Row } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DownloadOutlined } from '@ant-design/icons';

import '../../scss/dashboard.scss';

const { Text, Title, Link } = Typography;
const { Search } = Input;
const { Panel } = Collapse;

export default function CompetitionPage() {
  const navigate = useNavigate();
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
  
  return (
    <div className='dashboard'>
        <div className='panel borderL flex-column h-center gap-bit b-shadow'>
            <div className='v-between  w-100 h-end'>
                <Title className='large-title no-margin'>Hola Carla Venegas,</Title>
                <Text className='smail-title'>23 de Marzo, 2022</Text>
            </div>
            <div className='v-between  w-100'>
                <Text className='bit-title'>Visualiza los resultados en vivo.</Text>
                <Text className='bit-title'>09:00 AM</Text>
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
                  className='collapse-panel mb-large padding-small'
                  style={{width: "27%"}}
              >
                <Text className='small-title' style={{color: "#6A67CE"}}>Revisa el puntaje de los equipos.</Text>
                <div>
                  <img src='/img/icon/rank1.png'/>
                  <div style={{
                    background: "rgba(106, 103, 206, 0.5)",
                    borderRadius: "10px",
                  }}></div>
                </div>
              </Panel>
              <Panel header="Jugadores" key="2" 
                  className='collapse-panel mb-large'
                  style={{width: "37%"}}
              >
              </Panel>
              <Panel header="Desafíos" key="3" 
                  className='collapse-panel mb-large'
                  style={{width: "32%"}}
              >
              </Panel>
          </Collapse>
        </div>
    </div>
  );
}
