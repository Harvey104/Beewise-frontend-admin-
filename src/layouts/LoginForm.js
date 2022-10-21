import * as React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import useMediaQuery, { MediaQueryKey } from 'use-media-antd-query';
import { Image, Row, Col } from 'antd';
import '../scss/login.scss';
import '../scss/common.scss';
import 'antd/dist/antd.css';

LoginLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default function LoginLayout({ title, children }) {
  const colSize = useMediaQuery();  // "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
  const navigate = useNavigate();
  return (
    <div className='content'>
      <Outlet />
    </div>
  );
}
