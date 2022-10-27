import React, {useState} from "react";
import { Typography, message, Upload } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { ExcelRenderer } from "react-excel-renderer";
import { useNavigate } from 'react-router-dom';
import { Button , Col, Row } from 'antd';
import axios from 'axios';

const { Text, Link } = Typography;

const ExcelUploadComponent = () => {
    const navigate = useNavigate();
    const [err, setErr] = useState('');
    const [process, setProcess] = useState(0);
    const [showProcess, setProcess] = useState(0);

    const props = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    const fileHandler = fileList => {
      setProcess(0);
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
            <Text className="small-title">Descarga nuestra plantilla  para que puedas completar con las preguntas que desees y así cargarla directamente.</Text>
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
            alignItems: "space-between",
            height: "100%"
          }}
        >
          <div className="pv-medium flex-column">
            <Text className="large-title">PASO 2</Text>
            <Text className="bit-title">Carga directamente la plantilla</Text>
          </div>
          <div className="panel common-border borderL flex-column h-center mt-medium v-around" style={{height: "255px", border: "2px dashed #6A67CE"}}>
            <img src="/img/icon/excel2.png"/>
            <Text className="small-title center">Arrastra tu plantilla excel completada acá o utiliza nuestro botón.</Text>
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
        </div>
      </Col>
    </Row>
    <div className="w-100 v-center">
      <Button className={`small-button hm mt-medium`} type="primary">
        Regresar
      </Button>
    </div>
    </>
  );
};

export default ExcelUploadComponent;
