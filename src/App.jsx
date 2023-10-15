import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Hall from "./components/Hall";
import Cell from "./components/Cell";

let allPrisoners = [
  {
    id: uuid(),
    name: "Mahdi",
    sex: "m",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
  {
    id: uuid(),
    name: "Sylvain",
    sex: "m",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
  {
    id: uuid(),
    name: "Nassim",
    sex: "m",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
  {
    id: uuid(),
    name: "Leslie",
    sex: "f",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
  {
    id: uuid(),
    name: "Mahdi",
    sex: "m",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
  {
    id: uuid(),
    name: "Sylvain",
    sex: "m",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
  {
    id: uuid(),
    name: "Nassim",
    sex: "m",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
  {
    id: uuid(),
    name: "Leslie",
    sex: "f",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
  {
    id: uuid(),
    name: "Mahdi",
    sex: "m",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
  {
    id: uuid(),
    name: "Sylvain",
    sex: "m",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
  {
    id: uuid(),
    name: "Nassim",
    sex: "m",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
  {
    id: uuid(),
    name: "Leslie",
    sex: "f",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
  {
    id: uuid(),
    name: "Mahdi",
    sex: "m",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
  {
    id: uuid(),
    name: "Sylvain",
    sex: "m",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
  {
    id: uuid(),
    name: "Nassim",
    sex: "m",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
  {
    id: uuid(),
    name: "Leslie",
    sex: "f",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
  {
    id: uuid(),
    name: "Mahdi",
    sex: "m",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
  {
    id: uuid(),
    name: "Sylvain",
    sex: "m",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
  {
    id: uuid(),
    name: "Nassim",
    sex: "m",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
  {
    id: uuid(),
    name: "Leslie",
    sex: "f",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
  {
    id: uuid(),
    name: "Mahdi",
    sex: "m",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
  {
    id: uuid(),
    name: "Sylvain",
    sex: "m",
    imgUrl: "https://placehold.co/200x300/EEE/31343C",
  },
];

/****** add random notes  and sort them top-down ******/
function randomNote() {
  allPrisoners.forEach((prisoner) => {
    prisoner.note = Math.random() * 19 + 1;
  });
  allPrisoners.sort((a,b) => b.note - a.note);
}
randomNote();

function App() {
  const [cells, setCells] = useState([]);
  const [cellNumber, setCellNumber] = useState(0);
  const [ranged, setRanged] = useState(false);
  let  teams = [];
    /*** separate Teams ***/
  function disptachPrisoners(e) {
    if(+e.target.value >= 1)
    {
      let Number = e.target.value;
      setCellNumber(Number);
      let NumberOfTeam = Math.floor( 22 / Number);
      for(let i = 0 ;i<NumberOfTeam ;i++)
      {
        teams[i] = [];
      }
      let copyAllPrisoners = [...allPrisoners];
      /*****  destribute equaly *****/
      while(copyAllPrisoners.length >= NumberOfTeam)
      {
        for(let j = 0 ;j< NumberOfTeam ;j++)
        {
          teams[j].push(copyAllPrisoners[0]);
          copyAllPrisoners.shift();
        }
        for(let j = 0 ;j< NumberOfTeam && copyAllPrisoners.length >= (NumberOfTeam - j);j++)
        {
          teams[j].push(copyAllPrisoners[copyAllPrisoners.length - 1]);
          copyAllPrisoners.pop();
        }
      }

      while( copyAllPrisoners.length !== 0)
      {
        for(let j = 0 ;copyAllPrisoners.length !== 0 ;j++)
        {
          teams[j].push(copyAllPrisoners[copyAllPrisoners.length - 1]);
          copyAllPrisoners.pop();
        }
      }
      setCellNumber(Number);
      createCells(NumberOfTeam , teams);
    } 
  }

  /*****  create cells *****/
  function createCells(numberOfTeam, teams){
    let cell = [];
    let colors = ['#330000', '#CC0000','#FFCCCC','#FF8000', '#66600', '#FFFF00','#336600','#33FF33', '#00CCCC','#66B2FF','#9933FF','#FF66FF','#808080'];
    for (let i = 0; i < numberOfTeam; i++) {
      cell.push(
        <Cell key={i} listPrisoners={teams[i]} color={colors[i]} />
      );
      setCells(cell);
    }    
    allPrisoners = [].concat(...teams);
    console.log('all Prisoners : ' , allPrisoners);
  } 

  return (
    <>
      <div className="control-panel">
        
        <input
          className="form-control"
          placeholder="Nombre de cellules"
          type="number"
          onInput={(e) =>disptachPrisoners(e)}
        />
      </div>
      <Hall prisoners={allPrisoners} />
      <div className="cells">{cells}</div>
    </>
  );
}
export default App;
