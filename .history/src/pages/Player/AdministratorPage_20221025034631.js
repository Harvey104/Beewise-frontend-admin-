import { Button, Form, Input, Typography, Collapse, Table, Progress, Col, Row } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DownloadOutlined } from '@ant-design/icons';

import '../../scss/dashboard.scss';

const { Text, Title, Link } = Typography;
const { Search } = Input;
const { Panel } = Collapse;

export default function AdministratorPage() {
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

  const competationColumn = [
    {
      title: 'Usuario',
      dataIndex: 'user',
      key: 'user',
      sorter: {
        compare: (a, b) => a.correct - b.correct,
        multiple: 3,
      }
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: {
        compare: (a, b) => a.correct - b.correct,
        multiple: 3,
      }
    },
    {
      title: 'Código',
      dataIndex: 'code',
      key: 'code',
      sorter: {
        compare: (a, b) => a.correct - b.correct,
        multiple: 3,
      }
    },
    {
      title: 'Tipo de usuario',
      dataIndex: 'type',
      key: 'type',
      sorter: {
        compare: (a, b) => a.correct - b.correct,
        multiple: 3,
      }
    },
    {
      title: 'Acciones',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <div className='v-around h-center'>
          <img src='/img/icon/edit.png'/>
          <img src='/img/icon/branch.png' width={20} height={20}/>
          <img src='/img/icon/resume.png' width={20} height={20}/>
        </div>
      )
    },
  ];
  const competationData = [
    {
        key: '1',
        user: 'Javiera Carreño',
        email: 'jcarreno@clc.cl',
        code: 'J4o12',
        type: 'Administrador',
        action: '',
    },
    {
        key: '2',
        user: 'César Bolaños',
        email: 'cbolanos@clc.cl',
        code: 'KLm01',
        type: 'Administrador',
        action: '',
    },
    {
        key: '3',
        user: 'María Jesús Olivares',
        email: 'majeolivares@clc.cl',
        code: 'aSw54',
        type: 'Administrador',
        action: '',
    },
    {
        key: '4',
        user: 'Pablo Martinez',
        email: 'pmartinez@clc.cl',
        code: '16tG0',
        type: 'Administrador',
        action: '',
    },
    {
        key: '5',
        user: 'Claudia Varas',
        email: 'cvarasv@clc.cl',
        code: '77ieH',
        type: 'Super Administrador',
        action: '',
    },
  ];
  
  return (
    <div className='dashboard'>
        <div className='panel borderL flex-column h-center gap-bit b-shadow'>
            <div className='v-between  w-100 h-end'>
                <Title className='large-title no-margin'>Hola Carla Venegas,</Title>
                <Text className='smail-title'>23 de Marzo, 2022</Text>
            </div>
            <div className='v-between  w-100'>
                <Text className='bit-title'>Aquí podras añadir y administrar los perfiles de los administradores que agregues.</Text>
                <Text className='bit-title'>09:00 AM</Text>
            </div>
        </div>
        <div className='panel borderL mt-medium b-shadow'>
            <div className='v-between'>
                <Title className='large-title no-margin bold'>Administradores</Title>
                <div className='v-end h-center'>
                  <Search
                      placeholder="Buscar usuario"
                      allowClear
                      onSearch={onSearch}
                      style={{
                          width: "30%",
                      }}
                  />
                    <Button className={`bit-button hs ml-bit`} type="primary">
                      Eliminar
                    </Button>
                    <Button className={`bit-button hs ml-bit`} type="primary">
                      Nuevo Administrador
                    </Button>
                </div>
            </div>
            <div className='mt-large'>
              <Table
                columns={competationColumn}
                dataSource={competationData}
                pagination={false}
                rowSelection={{
                  type: 'checkbox',
                  ...rowSelection,
                }}
              />
            </div>
        </div>
        
        <Modal
            title=''
            open={open1}
            onOk={handleOk1}
            onCancel={handleCancel1}
            footer=''
        >
            <div className='modal-content' style={{border: "none"}}>
                <img src='/img/icon/warning.png' width="91"/>
                <h3>Pausar Cliente</h3>
                <Text className='medium-title text-center'>¿Estas seguro de que quieres  pausar la actividad de Pedro Ulgade?</Text>
                <p>Esto significa que CPedro Ugalde no podra ingresar nuevamente al sitio web impidiendo sus actividades</p>
                <div>
                  <Button className='bit-button hs' type="primary">Volver</Button>
                  <Button className='bit-button hs ml-medium' onClick={() => handleCancel1()} type="primary">Pausar</Button>
                </div>
            </div>
        </Modal>
    </div>
  );
}
