import React from 'react'

import styled from 'styled-components'

function Skill({title, size}) {
  return (
    <SkillContent bar={size}>
        <h4>{title}</h4>
        <span>
            <span />
        </span>
    </SkillContent>
  )
}

export default Skill;

const SkillContent = styled.li`
    margin: 20px 0;

    h4 {
        margin-bottom: 6px;
        font-weight: bold;
    }

    & > span {
        background: white;
        display: block;
        height: 3px;
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 3px;
        box-shadow: 0 0 3px black; 

        span {
            height: 3px;
            float: left;
            background: rgb(0, 202, 202);
            width: ${props => props.bar}%;
            animation: habilidades 3s;
        }
    }

    @keyframes habilidades {
        0% {
            width: 0%;
        }
        100% {
            width: ${props => props.bar}%;
        }
    }
`
