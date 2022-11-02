import React, { useState, useEffect } from "react";
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
  const teamsf = props.teams;
  const setTeams = props.setTeams;
  const selectedPlayer = props.selectedPlayer;
  
  useEffect(() => {
    if (!teamsf.length) {
      let teamArr = [];
      do {
        for (let i = 0; i < teams.length; i++) {
          teamArr[i].push(selectedPlayer.shift());
        }
      } while (selectedPlayer.length != 0);
      setTeams(teamArr);
      console.log(teamArr);
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
  return (
    <>
      
    </>
  );
};

export default AutoSetTeamComponent;
