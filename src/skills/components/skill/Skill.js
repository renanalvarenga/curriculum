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

const SkillContent = styled.div`
    margin: 20px 0;

    h4 {
        margin-bottom: 6px;
        font-weight: bold;
    }

    & > span {
        display: block;
        height: 4px;
        border-radius: 3px;
        box-shadow: 0 0 3px aqua; 

        span {
            height: 4px;
            float: left;
            background: white;
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
