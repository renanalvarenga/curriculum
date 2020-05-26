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
          <li>
            <SportsSoccerIcon htmlColor='black' fontSize='large'/>
            <h4>Esporte</h4>
          </li>
          <li>
            <PlayCircleFilledIcon htmlColor='black' fontSize='large'/>
            <h4>Música</h4>
          </li>
          <li>
            <MovieIcon htmlColor='black' fontSize='large'/>
            <h4>Cinema</h4>
          </li>
          <li>
            <FlightTakeoffIcon htmlColor='black' fontSize='large'/>
            <h4>Viagens</h4>
          </li>
          <li>
            <PhotoCameraIcon htmlColor='black' fontSize='large'/>
            <h4>Fotografia</h4>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Interests;
