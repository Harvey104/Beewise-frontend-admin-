import { Button, Modal, Input, Typography, Collapse, Table, Progress, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConsoleSqlOutlined, DownloadOutlined } from '@ant-design/icons';
import { FaUserCheck, FaUserLock } from "react-icons/fa";
import InfoModal from "../../components/player/InfoModal";
import CodeModal from "../../components/player/CodeModal";

import { 
  addPlayerAction, 
  editPlayerAction,
  getPlayersAction,
  changeStateAction
} from '../../components/actions/Player';
import { formatAMPM } from '../../function';
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
  const [playerCnt, setPlayerCnt] = useState(0);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const onSearch = (value) => console.log(value);

  useEffect(() => {
    if (!listState) {
      setlistState(1);
      getPlayersAction((users) => {
        let userlist = users.map((user) => {
          return {
            firstName: user.profile.firstName,
            lastName: user.profile.lastName,
            department: user.profile.department,
            ruth: user.profile.ruth,
            state: user.profile.state,
            email: user.email,
            id: user.id,
            key: user.id,
          }
        });
        setPlayerCnt()
        setPlayerList(userlist);
      });
    }
    var event = new Date();
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    setDate(event.toLocaleDateString('es-ES', options));
    setTime(formatAMPM(event));
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

  const competationColumn = [
    {
      title: 'Nombre',
      dataIndex: 'firstName',
      key: 'firstName',
      sorter: {
        compare: (a, b) => a.correct - b.correct,
        multiple: 3,
      }
    },
    {
      title: 'Apellido',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: {
        compare: (a, b) => a.correct - b.correct,
        multiple: 3,
      }
    },
    {
      title: 'Rut',
      dataIndex: 'ruth',
      key: 'ruth',
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
      },
      render: (_, record) => (
        <>
          {
            record.state === 1 ? "Activo" : "Bloqueado"
          }
        </>
      )
    },
    {
      title: 'Acciones',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => (
        <div className='v-around h-center'>
          <img src='/img/icon/edit.png'/>
          <img src='/img/icon/branch.png' width={20} height={20}/>
          {
            record.state === 1 ?
              <FaUserLock onClick={() => changeState(record.id, 0)} style={{color: "#F26E6E", fontSize: "20px"}} />
              :
              <FaUserCheck onClick={() => changeState(record.id, 1)} style={{color: "#56C456", fontSize: "20px"}} />
          }
        </div>
      )
    },
  ];

  const addPlayer = () => {
    const addData = {
      firstName: name,
      lastName: surname,
      email: email.trim(),
      inviteCode: verifyCode,
    };
    addPlayerAction(
      addData, () => {
        console.log('success');
        setlistState(0);
      }, () => {
        console.log('failure');
      }
    );
    setModalTab(1); 
    handleCancel();
  }

  const editPlayer = () => {
    const editData = {
      firstName: name,
      lastName: surname,
      email: email.trim(),
      inviteCode: verifyCode,
    };
    editPlayerAction(
      editData, () => {
        console.log('success');
        setlistState(0);
      }, () => {
        console.log('failure');
      }
    );
    setModalTab(1); 
    handleCancel();
  }

  const changeState = (userId, state) => {
    changeStateAction({
      user_id: userId,
      state: state
    }, (playerList) => {
      let userlist = playerList.map((user) => {
        return {
          firstName: user.profile.firstName,
          lastName: user.profile.lastName,
          department: user.profile.department,
          ruth: user.profile.ruth,
          state: user.profile.state,
          email: user.email,
          id: user.id,
        }
      });

      setPlayerList(userlist);
    });
  }
  
  return (
    <div className='dashboard'>
        <div className='panel borderL flex-column h-center gap-bit b-shadow'>
            <div className='v-between  w-100 h-end'>
                <Title className='large-title no-margin'>Hola Carla Venegas,</Title>
                <Text className='smail-title'>{date}</Text>
            </div>
            <div className='v-between  w-100'>
                <Text className='bit-title'>En esta sección podras agregar jugadores, ya sea de forma manual o con ayuda de nuestra plantilla disponible.</Text>
                <Text className='bit-title'>{time}</Text>
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
