import { Button } from '../../components/button/Button'
import { Textarea } from '../../components/textarea/Textarea'
import AlertInfoImage from '../../assets/images/alert.png'
import './main.scss'

export const MainContent = () => {
  return (
    <div className="main-container-content">
      <Textarea />
      <div className="btn-area">
        <div className="content-info">
          <img src={ AlertInfoImage } alt="" />
          <p>Apenas letras minúsculas e sem acento.</p>
        </div>
        <div className="main-buttons">
          <Button style='primary' type='encrypt' name="Criptografar"/>
          <Button style='secondary' type='decrypt' name="Descriptografar" />
        </div>
      </div>
    </div>
  )
}