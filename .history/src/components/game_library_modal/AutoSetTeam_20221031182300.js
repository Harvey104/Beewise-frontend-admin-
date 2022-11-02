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
  const setTeams = props.setTeams;
  const [state, setState] = useState(0);
  const selectedPlayer = props.selectedPlayer;
  const [dividedPlayer, setDividedPlayer] = useState(selectedPlayer);
  const [teamTableList, setTeamTable] = useState([]);
  
  useEffect(() => {
    if (!state) {
      console.log(selectedPlayer, 'sdfsdfsdfsdfsdfd');
      let teamArr = [];
      if (teamCnt != 0) {
        for (let loop = 0; loop){
          for (let i = 0; i < teamCnt; i++) {
            if (!teamArr[i]) { teamArr[i] = []; }
            if (dividedPlayer[0]) {
              teamArr[i].push(dividedPlayer[0]);
              setDividedPlayer(dividedPlayer.shift());
            }
          }
        };
      }
      if (teamArr.length != 0) {
        let teamData = [];
        let teamTableList = teamArr.map((team, index)=> {
          let members = [];
          let teammates = team.map((member, index) => {
            members.push(member.key);
            return {
              key: member.key,
              player: member.firstName,
              num: index + 1,
              depart: member.department,
            }
          });
          teamData[index] = members;
          return {
            column: [
              {
                title: 'Equipo ' + (index + 1),
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
            ],
            data: teammates
          }
        });
        setTeamTable(teamTableList);
        setTeams(teamArr);
        setState(1);
      }
      console.log(selectedPlayer);
      return;
    }
  });

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
            overflowY: "auto"
          }}
        >
          {teamTableList.map(function(team, i){
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
