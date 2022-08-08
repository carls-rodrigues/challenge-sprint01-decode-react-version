import './aside.scss';
import EmptyBgImage from '../../assets/images/empty-bg.png';
import { Button } from '../../components/button/Button';

export const AsideContent = ({ message }: {message?: string }) => { 
  return (
    <aside className="aside-container">
      {
        !!message ? <WithMessageContent message={message} /> : <EmptyMessageContent />
      }
    </aside>
  )
}
const EmptyMessageContent = () => {
  return (
    <div className='aside-container-empty-message-content'>
      <img src={EmptyBgImage} alt="" />
      <h2>Nenhuma mensagem encontrada</h2>
      <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
    </ div>
  )
}
const WithMessageContent = ({ message }: { message?: string }) => { 
  return (
    <div className='aside-container-message-content'>
      <p> {message} </p>
      <Button style='secondary' type='copy' name="Copiar" />
    </ div>
  )
}