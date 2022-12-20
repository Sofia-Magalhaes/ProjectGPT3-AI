import React from 'react'
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title:'Melhorar tudo',
    text: 'Deles bom John ele dá de rico ele. Eles envelhecem e desenham a sra. como. Melhorar as desconfianças finais pode ser instantaneamente aplaudido pela família.'
  },
  {
    title:'Torne-se o ativo atendido',
    text: 'Considerado simpatizar dez assistência incomumente ocasional suficiente não. Carta de on tornar-se ele tendia a habilitar ativamente.'
  },
  {
    title:'Mensagem ou nada ',
    text: 'Perguntar possível amante relação elegância comer igualmente debatendo. Por mensagem ou não sou nada entre os principais endereços.'
  },
  {
    title: 'Realmente menino direito',
    text: 'Realmente menino direito condado ela incapaz de sua irmã. Pés você fora é como seis. Entre os sexos estão a lei de licença construída agora. Em mesa construída em um blush rápido.'
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gpt3__features-heading-h1'>O futuro é agora e você só precisa percebê-lo. Entre no futuro hoje e faça acontecer.</h1>
        <p>Solicite acesso antecipado para começar</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features