import { Button, Modal, Input, Typography, Collapse, Table, Progress, Col, Row } from 'antd';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DownloadOutlined } from '@ant-design/icons';

import InfoModal from "../../components/player/InfoModal";
import CodeModal from "../../components/player/CodeModal";

import { addAdminAction, getAdminsAction, removeAdmins } from '../../components/actions/Player';

import '../../scss/dashboard.scss';

const { Text, Title, Link } = Typography;
const { Search } = Input;
const { Panel } = Collapse;

export default function AdministratorPage() {
  const navigate = useNavigate();
  const [modalTab, setModalTab] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [profileType, setProfileType] = useState('');
  const [adminList, setAdminList] = useState([]);
  const [listState, setListState] = useState(0);
  const [selectedIds, setSelectedIds] = useState([]);

  const [verifyCode, setVerifiCode] = useState('');

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

  
  useEffect(() => {
    if (!listState) {
      getAdminsAction(data => {
        console.log(data);
      });
    }
  });

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
  

  const [open, setOpen] = useState(false);
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
  
  const [open1, setOpen1] = useState(false);
  const showModal1 = () => {
      setOpen1(true);
  };
  const handleOk1 = (e) => {
      console.log(e);
      setOpen1(false);
  };
  
  const handleCancel1 = (e) => {
      console.log(e);
      setOpen1(false);
  };

  const addAdmin = e => {
    addAdminAction({
      firstName: firstName,
      lastName: lastName,
      email: email,
      profile_type: profileType
    }, data => {
      setModalTab(1); 
      handleCancel();
    });
  }

  const remove
  
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
                    <Button className={`bit-button hs ml-bit`} type="primary" onClick={() => showModal()}>
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
            title={modalTab == 1 ? 'Ingreso nuevo Administrador' : 'Ingreso nuevo usuario'}
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            width="70%"
            // height="60%"
            style={{
              paddingBottom: "0px",
            }}
            footer=''
            className='business-modal'
        >
            <div className='modal-content flex-column v-between h-center' style={{border: "none", height: "100%"}}>
                <div className='w-100'>
                  {modalTab == 1 ? 
                    <InfoModal type="admin" name={setFirstName} surname={setLastname} email={setEmail} profileType={setProfileType}/> 
                    : 
                    <CodeModal type="admin" setVerify={setVerifiCode}/>
                  }
                </div>
                {modalTab == 1 ? 
                  <div className='w-100 v-center mt-large'>
                    <Button className='bit-button hs' onClick={() => handleCancel()} type="primary">Volver</Button>
                    <Button className='bit-button hs ml-medium' onClick={() => setModalTab(2)} type="primary">Agregar</Button>
                  </div>
                  : 
                  <div className='w-100 v-center mt-large'>
                    <Button className='bit-button hs' onClick={() => {addAdmin()}} type="primary">Finalizar</Button>
                  </div>
                }
            </div>
        </Modal>
        
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
