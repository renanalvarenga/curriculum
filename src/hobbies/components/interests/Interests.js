import React from 'react'
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MovieIcon from '@material-ui/icons/Movie';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import './interests.css'

function Interests() {
  return (
    <div className='interesses'>
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
    </div >
  )
}

export default Interests;
