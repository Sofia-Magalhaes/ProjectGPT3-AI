import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className=''>Vamos construir algo incrível com GPT-3 Open IA</h1>
        <p>
          No entanto, cama qualquer para a indulgência de assistência de viagem desagradável. Nem os pensamentos todos exercem bênçãos.
          Indulgência maneira tudo alegria alteração turbulenta o apego. Partido que nós anos para pedir permitir pediu.
        </p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Seu Email' />
          <button type='button'>Vamos começar</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="pessoas" />
          <p>1.600 pessoas solicitaram acesso nas últimas 24 horas</p>
        </div>
      </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt="I.A" />
        </div>
    </div>
  )
}

export default Header