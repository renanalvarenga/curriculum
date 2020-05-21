import React from 'react'
import './interests.css'
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MovieIcon from '@material-ui/icons/Movie';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

function Interests() {
  return (
    <section className='interesses'>
      <h1>Idiomas e Interesses</h1>
      <hr class='detalhe'/>
          <div className='idiomas'>
            <h4>Português | Fluente</h4>
            <h4>Inglês | Fluente</h4>
            <h4>Espanhol | Intermediário</h4>
          </div>
          <nav>
            <ul>
              <li><SportsSoccerIcon htmlColor='black' fontSize='large'/></li>
              <li><PlayCircleFilledIcon htmlColor='black' fontSize='large'/></li>
              <li><MovieIcon htmlColor='black' fontSize='large'/></li>
              <li><FlightTakeoffIcon htmlColor='black' fontSize='large'/></li>
              <li><PhotoCameraIcon htmlColor='black' fontSize='large'/></li>
            </ul>
          </nav>
          <div>
            <h4>Esporte</h4>
            <h4>Música</h4>
            <h4>Cinema</h4>
            <h4>Viagens</h4>
            <h4>Fotografia</h4>
          </div>
          
    </section>
  )
}

export default Interests;
