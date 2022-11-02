import React, { useState } from "react";
import { Typography } from 'antd';
import { Button , Col, Row, Table, Select } from 'antd';
import { FiFilter } from "react-icons/fi";

import { GAME_MODAL_STEP } from "../../constant";

const { Text, Link } = Typography;
const { Option } = Select;

const AutoSetTeamComponent = (props) => {
  const next = props.next;
  const previous = props.previous;
  const teamCnt = props.teamCnt;
  const teams = props.teams;
  const setTeams = props.setTeams;
  const selectedPlayer = props.selectedPlayer;
  
  useEffect(() => {
    if (!teams) {
      let 
    }
  });

  const teamsColumn = [
    {
      title: 'Equipo 1',
      dataIndex: 'team',
      key: 'team',
    },
    {
      title: 'Jugador',
      dataIndex: 'player',
      key: 'player',
    },
    {
      title: "Número",
      dataIndex: 'num',
      key: 'num',
    },
    {
      title: "Departamento",
      dataIndex: 'depart',
      key: 'depart',
    },
  ];
  const teamsData = [
    {
        key: 1,
        player: 'Juan Ugalde',
        num: '1',
        depart: 'Operaciones',
    },{
      key: 2,
      player: 'Juan Ugalde',
      num: '1',
      depart: 'Operaciones',
    },{
      key: 3,
      player: 'Juan Ugalde',
      num: '1',
      depart: 'Operaciones',
    },{
      key: 4,
      player: 'Juan Ugalde',
      num: '1',
      depart: 'Operaciones',
    },
  ];

  const teams = [{
      column: teamsColumn,
      data: teamsData,
    },{
      column: teamsColumn,
      data: teamsData,
    },{
      column: teamsColumn,
      data: teamsData,
    },{
      column: teamsColumn,
      data: teamsData,
  }];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      // setSelectedPlayer(selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  
  const handleTeamChange = (value) => {
    console.log(value);
  };
  return (
    <>
      <div className="auto-set-panel"
        style={{
          width: '70%',
          height: "80%"
        }}
      >
        <div className="v-between">
          <Text
            style={{
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "30px",
              color: "#142748"
            }}
          >
            Equipos elegidos:  4
          </Text>
          <Button className="filter-button" style={{width: "30%"}}>
            <Text className="small-title">Filtro de Busqueda</Text>
            <FiFilter style={{fontSize: "16px", color: "#6A67CE"}}/>
          </Button>
        </div>
        <div className="auto-set-table mt-small" 
          style={{
            height: "calc(100% - 80px)",
            overflowY: "scroll"
          }}
        >
          {teams.map(function(team, i){
              return <Table
                columns={team.column}
                dataSource={team.data}
                pagination={false}
              />
          })}
        </div>
        
      </div>
      <div className="w-100 v-around">
        <Button className="small-button hm" onClick={() => {}}>Volver</Button>
        <Button className="small-button hm" onClick={() => next(GAME_MODAL_STEP.CHOOSE_DATE)}>Continuar</Button>
      </div>
    </>
  );
};

export default AutoSetTeamComponent;