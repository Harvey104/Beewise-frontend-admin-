import React, {useState} from "react";
import { Typography, message, Upload, Progress } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { ExcelRenderer } from "react-excel-renderer";
import { useNavigate } from 'react-router-dom';
import { Button , Col, Row, Modal } from 'antd';
import axios from 'axios';

import {excelDataUpload} from '../actions/Questions';

const { Text, Link } = Typography;

const ExcelUploadComponent = (props) => {
    const setTab = props.setTab;
    const navigate = useNavigate();
    const [err, setErr] = useState('');
    const [percent, setProcess] = useState(0);
    const [showProcess, setShowProcess] = useState(0);
    const [uploadState, setUploadState] = useState(0);

    const init = () => {
      setShowProcess(0);
      setUploadState(0);
      setProcess(0);
    }

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

    const fileHandler = fileList => {
      setShowProcess(1);
      console.log("fileList", fileList);
      let fileObj = fileList;
      if (!fileObj) {
        setErr("No file uploaded!");
        return false;
      }
      console.log("fileObj.type:", fileObj.type);
      if (
        !(
          fileObj.type === "application/vnd.ms-excel" ||
          fileObj.type ===
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        )
      ) {
        setErr("Unknown file format. Only Excel files are uploaded!");
        return false;
      }
      //just pass the fileObj as parameter
      ExcelRenderer(fileObj, (err, resp) => {
        if (err) {
          console.log(err);
        } else {
          let newRows = [];
          resp.rows.slice(1).map((row, index) => {
            if (row && row !== "undefined") {
              newRows.push({
                key: index,
                question: row[0],
                type: row[1],
                videoUrl: row[2],
                category: row[3],
                duration: row[4],
                firstAnswer: row[5],
                firstAnswerAccuracy: row[6],
                secondAnswer: row[7],
                secondAnswerAccuracy: row[8],
                thirdAnswer: row[9],
                thirdAnswerAccuracy: row[10],
                fourthAnswer: row[11],
                fourthAnswerAccuracy: row[12],
              });
            }
          });
          if (newRows.length === 0) {
            setErr("No data found in file!");
            return false;
          } else {
            console.log(newRows);
            setProcess(80);
            // setProcess(100);
            //     setUploadState(1);
            excelDataUpload(newRows, () => {
                setProcess(100);
                setUploadState(1);
              }, () => {
                setProcess(0);
                setErr("failure");
              }
            );
          }
        }
      });
      return false;
    };
  return (
    <>
    <Row className="mt-medium" gutter={16}>
      <Col
        className="padding-medium"
        span={12} 
      >
        <div 
          className="gutter-row padding-medium v-between"
          style={{
            display: "flex",
            flexFlow: "column",
            alignItems: "space-between",
            height: "100%"
          }}
        >
          <div className="pv-medium flex-column">
            <Text className="large-title">PASO 1</Text>
            <Text className="small-title">Descarga nuestra plantilla  para que puedas completar con las preguntas que desees y as?? cargarla directamente.</Text>
          </div>
          <div className="panel common-border borderL flex-column h-center mt-medium v-around" style={{height: "255px"}}>
            <img src="/img/icon/excel.png"/>
            <Button className={`small-button hm mt-medium`} type="primary">
              Descargar plantilla
            </Button>
          </div>
        </div>
      </Col>
      <Col
        className="padding-medium"
        span={12} 
      >
        <div 
          className="gutter-row padding-medium v-between"
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          {
            uploadState === 0 ? 
              (
                <>
                <div className="pv-medium flex-column">
                  <Text className="large-title">PASO 2</Text>
                  <Text className="bit-title">Carga directamente la plantilla</Text>
                </div>
                <div className="panel common-border borderL flex-column h-center mt-medium v-around" style={{height: "255px", border: "2px dashed #6A67CE"}}>
                  {
                    showProcess == 0 ?
                      <img src="/img/icon/excel2.png"/>    
                      :
                      (<div className="v-center h-center" style={{width: "70%"}}><img src="/img/icon/excel2.png" style={{width: "100px"}}/><Progress percent={percent} style={{width: "90%"}}/></div>)
                  }
                  <Text className="small-title center">Arrastra tu plantilla excel completada ac?? o utiliza nuestro bot??n.</Text>
                  <Upload 
                    name="file"
                    showUploadList={false}
                    beforeUpload={fileHandler}
                  >
                    <Button className={`small-button hm mt-medium`} type="primary">
                      Selecciona archivo
                    </Button>
                  </Upload>
                </div>
                </>
              )
              :
              (
                <>
                  <div className="pv-medium flex-column">
                    <Text className="large-title">PASO 2</Text>
                    <Text className="bit-title">Carga directamente la plantilla</Text>
                  </div>
                  <div className="panel common-border borderL flex-column h-center mt-medium v-around" style={{height: "255px", border: "2px dashed #6A67CE", background: "#6A67CE"}}>
                    <img src="/img/icon/excel.png"/>
                    <div className="v-center">
                      <img src="/img/icon/success.png" style={{width: ""}}/>
                      <Text className="small-title center color-w">Tu archivo ha sido subido con ??xito, revisa el resumen de las preguntas cargadas.</Text>
                    </div>
                    <Button 
                      className="mt-bit"
                      style={{
                        borderRadius: "5px",
                        width: "180px",
                        background: "#5E5BC0",
                        height: "40px",
                        background: "#fff",
                        color: "#5E5BC0"
                      }}
                      type="primary"
                      onClick={() => setTab(2)}  
                    >
                      Continuar
                    </Button>
                  </div>
                </>
              )
          }
          
        </div>
      </Col>
    </Row>
    <div className="w-100 v-center">
      <Button className={`small-button hm mt-medium`} type="primary">
        Regresar
      </Button>
    </div>
    <Modal
        title=''
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer=''
    >
        <div className='modal-content' style={{border: "none"}}>
            <img src='/img/success.png' width="91"/>
            <h3>??Su cuenta ha sido creada exitosamente!</h3>
            <p>Ahora se activar?? tu cuenta</p>
            <Button className='modal-button hm' onClick={() => navigate("/login")} type="primary">Aceptar</Button>
        </div>
    </Modal>
    </>
  );
};

export default ExcelUploadComponent;
