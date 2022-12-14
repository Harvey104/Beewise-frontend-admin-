import React from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuComponent from "../components/Menu";
import { AiOutlineBell } from "react-icons/ai";
import '../scss/common.scss';
import 'antd/dist/antd.css';


MainLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default function MainLayout({ title, children }) {
  // const colSize = useMediaQuery();  // "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
  return (
    <div className='home-content'>
      <div className='header v-between' style={{zIndex: 10}}>
        <img src='/img/frame.png' height={24}/>
        <div className='home-notify v-center h-center borderL'>
          <AiOutlineBell/>
        </div>
      </div>
      <MenuComponent />
      <Outlet />
    </div>
  );
}
