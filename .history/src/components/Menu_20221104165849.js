import React, {forwardRef, useState} from "react";
import withClickOutside from "./WithClickOutside";
import { Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RiAccountBoxLine } from "react-icons/ri";

const { Text, Link } = Typography;

function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  };
const MenuComponent = forwardRef(({ open, setOpen }, ref) => {
    const navigate = useNavigate();
    const [menuKey, setMenuKey] = useState(1);
    const changeOpenState = () => {
        if (open) {
            setOpen(false);
            return;
        }
        setOpen(true);
        return
    }
  const items = [
    getItem(
      <Link onClick={() => {setMenuKey(1); navigate('/home/dashboard')}} ><Text style={{color: "#6A67CE", fontSize: "17px", fontWeight: "600"}}>Dashboard</Text></Link>,
      '1',
      <img src='/img/icon/tab.png' style={{width: "24px"}}/>,
    ),
    getItem(
      <Link onClick={() => {setMenuKey(2); navigate('/general/')}} ><Text style={{color: "#6A67CE", fontSize: "17px", fontWeight: "600"}}>Crear Juego</Text></Link>,
      '2',
      <img src='/img/icon/Vector.png' style={{width: "24px"}}/>,
    ),
    getItem(
      <Link onClick={() => {setMenuKey(3); navigate("/game/library")}}><Text style={{color: "#6A67CE", fontSize: "17px", fontWeight: "600"}}>Biblioteca de juegos</Text></Link>,
      '3',
      <img src='/img/icon/game.png' style={{width: "24px"}}/>,
    ),
    getItem(
      <Link onClick={() => {setMenuKey(4); navigate("/player")}}><Text style={{color: "#6A67CE", fontSize: "17px", fontWeight: "600"}}>Jugadores</Text></Link>,
      '4',
      <img src='/img/icon/member.png' style={{width: "24px"}}/>,
    ),
    getItem(
      <Link onClick={() => {setMenuKey(5); navigate("/player/administrator")}}><Text style={{color: "#6A67CE", fontSize: "17px", fontWeight: "600"}}>Administradores</Text></Link>,
      '5',
      <RiAccountBoxLine style={{fontSize: "26px", color: "#6A67CE"}} />
    ),
    getItem(
      <Link onClick={() => {setMenuKey(6); navigate("/competition")}}><Text style={{color: "#6A67CE", fontSize: "17px", fontWeight: "600"}}>Live Streaming</Text></Link>,
      '6',
      <img src='/img/icon/Streaming.png' style={{width: "24px"}}/>,
    ),
    getItem(
      <Link onClick={() => {setMenuKey(7); navigate("/other")}}><Text style={{color: "#6A67CE", fontSize: "17px", fontWeight: "600"}}>Configuración</Text></Link>,
      '7',
      <img src='/img/icon/Vector-4.png' style={{width: "24px"}}/>,
    ),
    getItem(
      <Text style={{color: "#6A67CE"}}>Ayuda</Text>,
      '8',
      <img src='/img/icon/ayuda.png' style={{width: "24px"}}/>,
    ),
  ];
  const items2 = [
    getItem(
      <Link onClick={() => {setMenuKey(1); navigate('/home/dashboard')}} ></Link>,
      '1',
      <img src='/img/icon/tab.png' style={{width: "24px"}}/>,
    ),
    getItem(
      <Link onClick={() => {setMenuKey(2); navigate('/general')}} ></Link>,
      '2',
      <img src='/img/icon/Vector.png' style={{width: "24px"}}/>,
    ),
    getItem(
      <Link onClick={() => {setMenuKey(3); navigate("/game/library")}}></Link>,
      '3',
      <img src='/img/icon/game.png' style={{width: "24px"}}/>,
    ),
    getItem(
      <Link onClick={() => {setMenuKey(4); navigate("/player")}}></Link>,
      '4',
      <img src='/img/icon/member.png' style={{width: "24px"}}/>,
    ),
    getItem(
      <Link onClick={() => {setMenuKey(5); navigate("/player/administrator")}}></Link>,
      '5',
      <RiAccountBoxLine style={{fontSize: "26px", color: "#6A67CE"}} />
    ),
    getItem(
      <Link onClick={() => {setMenuKey(6); navigate("/competition")}}></Link>,
      '6',
      <img src='/img/icon/Streaming.png' style={{width: "24px"}}/>,
    ),
    getItem(
      <Link onClick={() => {setMenuKey(7); navigate("/other")}}></Link>,
      '7',
      <img src='/img/icon/Vector-4.png' style={{width: "24px"}}/>,
    ),
    getItem(
      <Link ></Link>,
      '8',
      <img src='/img/icon/ayuda.png' style={{width: "24px"}}/>,
    ),
  ];

  return (
    <section ref={ref}>
        <div className='menu' style={{zIndex: 11}}>
            <div className='menu-header'>
                <MenuOutlined onClick={() => {changeOpenState()}} />
            </div>
            <Menu
                style={{
                width: 70,
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode={'inline'}
                theme={'light'}
                items={items2}
            />
        </div>
        <div className='menu-hide'
            style={{
                ...open && {
                    left: "0px"
                },
                ...!open && {
                    left: "-210px"
                },
                zIndex: 11
            }}
        >
            <div className='menu-header'>
                <MenuOutlined onClick={() => {changeOpenState()}} />
            </div>
            <Menu
                style={{
                  width: 210,
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode={'inline'}
                theme={'light'}
                items={items}
            />
        </div>
    </section>
  );
});

export default withClickOutside(MenuComponent);
