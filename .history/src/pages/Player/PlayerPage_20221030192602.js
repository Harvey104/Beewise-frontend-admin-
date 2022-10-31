import { Button, Modal, Input, Typography, Collapse, Table, Progress, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DownloadOutlined } from '@ant-design/icons';
import InfoModal from "../../components/player/InfoModal";
import CodeModal from "../../components/player/CodeModal";

import { addPlayerAction, getPlayersAction } from '../../components/actions/Player';

import '../../scss/dashboard.scss';

const { Text, Title, Link } = Typography;
const { Search } = Input;
const { Panel } = Collapse;

export default function PlayerPage() {
  const navigate = useNavigate();

  const [modalTab, setModalTab] = useState(1);
  const [verifyCode, setVerifiCode] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [listState, setlistState] = useState(0);
  const [playerList, setPlayerList] = useState([]);

  const onSearch = (value) => console.log(value);

  useEffect(() => {
    if (!listState) {
      getPlayersAction((users) => {
        let userlist = users.map(user => {
          return {
            firstName: user.profile.firstName,
            lastName: user.profile.lastName,
            department: user.profile.department,
            ruth: user.profile.ruth,
            state: user.profile.country,
          }
        });
        setPlayerList(userlist);
        setlistState(1);
      });
    }
  });

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

  const [open, setOpen] = useState(false);
  const showModal = () => {
      setOpen(true);
  };
  const handleOk = (e) => {
      console.log(e);
      setOpen(false);
  };
  
  const handleCancel = () => {
      setOpen(false);
  };

  const addPlayer = () => {
    const addData = {
      firstName: name,
      lastName: surname,
      email: email.trim(),
      invitCode: verifyCode,
      ruth: '1-111-1-13-h'
    };
    addPlayerAction(
      addData, () => {
        console.log('success');
      }, () => {
        console.log('failure');
      }
    );
    setModalTab(1); 
    handleCancel();
  }

  const competationColumn = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      sorter: {
        compare: (a, b) => a.correct - b.correct,
        multiple: 3,
      }
    },
    {
      title: 'Apellido',
      dataIndex: 'surname',
      key: 'surname',
      sorter: {
        compare: (a, b) => a.correct - b.correct,
        multiple: 3,
      }
    },
    {
      title: 'Rut',
      dataIndex: 'rut',
      key: 'rut',
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
      title: 'Departamento',
      dataIndex: 'department',
      key: 'department',
      sorter: {
        compare: (a, b) => a.correct - b.correct,
        multiple: 3,
      }
    },
    {
      title: 'Estado',
      dataIndex: 'state',
      key: 'state',
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
          <img src='/img/icon/user-lock.png' width={20} height={20}/>
        </div>
      )
    },
  ];
  const competationData = [
    {
        key: '1',
        name: 'Javiera',
        surname: 'Carreño',
        rut: '11.111.111-k',
        email: 'jcarreno@clc.cl',
        department: 'Operaciones',
        state: 'Activo',
        action: '',
    },
    {
        key: '2',
        name: 'César',
        surname: 'Bolaños',
        rut: '11.111.111-k',
        email: 'cbolanos@clc.cl',
        department: 'RR.HH',
        state: 'Activo',
        action: '',
    },
    {
        key: '3',
        name: 'César',
        surname: 'Bolaños',
        rut: '11.111.111-k',
        email: 'cbolanos@clc.cl',
        department: 'RR.HH',
        state: 'Activo',
        action: '',
    },
    {
      key: '4',
      name: 'María',
      surname: 'Olivares',
      rut: '11.111.111-k',
      email: 'majeolivares@clc.cl',
      department: 'Operaciones',
      state: 'Inactivo',
      action: '',
    },
    {
      key: '5',
      name: 'Claudia',
      surname: 'Varas',
      rut: '11.111.111-k',
      email: 'cvarasv@clc.cl',
      department: 'RR. HH',
      state: 'Bloqueado',
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
                <Text className='bit-title'>En esta sección podras agregar jugadores, ya sea de forma manual o con ayuda de nuestra plantilla disponible.</Text>
                <Text className='bit-title'>09:00 AM</Text>
            </div>
        </div>
        <div className='panel borderL mt-medium b-shadow'>
            <div className='v-between'>
                <Title className='large-title no-margin bold'>Jugadores (5)</Title>
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
                      Descargar Plantilla
                    </Button>
                    <Button className={`bit-button hs ml-bit`} type="primary">
                      Importar Plantilla
                    </Button>
                    <Button className={`bit-button hs ml-bit`} type="primary" onClick={() => showModal()}>
                      Agregar jugadores
                    </Button>
                </div>
            </div>
            <div className='mt-large'>
              <Table
                columns={competationColumn}
                dataSource={playerList}
                pagination={false}
                rowSelection={{
                  type: 'checkbox',
                  ...rowSelection,
                }}
              />
            </div>
            <div className='v-center mt-large'>
                <Button className={`bit-button hs ml-bit`} type="primary">
                  Descargar Informe
                </Button>
                <Button className={`bit-button hs ml-bit`} type="primary">
                  Eliminar
                </Button>
            </div>
        </div>
        <Modal
            title={modalTab == 1 ? "Ingreso nuevo jugador" : 'Ingreso nuevo usuario'}
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
                  {modalTab == 1 ? <InfoModal name={setName} surname={setSurname} email={setEmail}/> : <CodeModal setVerify={setVerifiCode} />}
                </div>
                {modalTab == 1 ? 
                  <div className='w-100 v-center mt-large'>
                    <Button className='bit-button hs' onClick={() => handleCancel()} type="primary">Volver</Button>
                    <Button className='bit-button hs ml-medium' onClick={() => setModalTab(2)} type="primary">Agregar</Button>
                  </div>
                  : 
                  <div className='w-100 v-center mt-large'>
                    <Button className='bit-button hs' onClick={() => addPlayer()} type="primary">Finalizar</Button>
                  </div>
                }
            </div>
        </Modal>
    </div>
  );
}
