import './App.css';
import NavBar from './components/NavBar';
import Students from './components/Students';
import { useState } from 'react';
import Team from './components/Team';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [teamNum, setTeamNum] = useState(0);
  const [chosenStudents, setChosenStudents] = useState([]);
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Natasa Jovicic",
      description: 
        'Smer: Informacioni sistemi i tehnologije Godina: IV',
      chosen: false,
      image: '../assets/1.jpg'
    },
    {
      id: 2,
      name: "Ana Anic",
      description: 
        'Smer: Informacioni sistemi i tehnologije Godina: IV',
      chosen: false,
      image: '../assets/2.jpg'  
    },
    {
      id: 3,
      name: "Ivan Radonjic",
      description: 
        'Smer: Informacioni sistemi i tehnologije Godina: IV',
      chosen: false,
      image: '../assets/3.jpg' 
    },
    {
      id: 4,
      name: "Marko Popovic",
      description: 
        'Smer: Informacioni sistemi i tehnologije Godina: apsolvent',
      chosen: false,
      image: '../assets/4.jpg'
    },
    {
      id: 5,
      name: "Irina Milic",
      description: 
        'Smer: Informacioni sistemi i tehnologije Godina: IV',
      chosen: false,
      image: '../assets/5.jpg'
    },
    {
      id: 6,
      name: "Petra Markovic",
      description: 
        'Smer: Informacioni sistemi i tehnologije Godina: IV',
      chosen: false,
      image: '../assets/6.png'
    },
    
  ]);

  const refreshTeam = () => {
    const newStudents = students.filter((student) => student.chosen);
    setChosenStudents(newStudents);
  };

  const addToTeam = (id) => {
    students.map((student) => {
      if (student.id === id) {
        if(teamNum<3) {
          student.chosen = true;
          const a = teamNum + 1;
          setTeamNum(a);
          //refreshTeam();
          updateTeam(student);
        } else {
          alert("Tim je vec popunjen!");
        }
      }
    })

  };

  const removeFromTeam = (id) => {
    students.map((student) => {
      if (student.id === id) {
        student.chosen = false;
        const a = teamNum - 1;
        setTeamNum(a);
        refreshTeam();
      }
    })
  };

  const updateTeam = (student) => {
    setChosenStudents([...chosenStudents, student]);
  };

  return ( 
    <BrowserRouter>
    <NavBar teamNum={teamNum} />
    <Routes>
      <Route
        path="/"
        element={
          <Students
            students={students}
            onAdd={addToTeam}
            onRemove={removeFromTeam}
          />
        }
      />
      <Route path="/team" element={<Team chosenStudents={chosenStudents} onRemove={removeFromTeam}/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
