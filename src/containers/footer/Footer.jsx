import React from 'react'
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text-h1'>Você quer entrar no futuro antes dos outros</h1>        
      </div>
      <div className='gpt3__footer-btn'>
        <p>Solicitar acesso antecipado</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="Logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contato</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Empresa</h4>
          <p>Termso e Condição</p>
          <p>Política de Privacidade</p>
          <p>Contato</p>          
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Entrar em contato</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>   
          <p>info@payme.net</p>       
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer