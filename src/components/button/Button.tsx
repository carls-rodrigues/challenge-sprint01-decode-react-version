import { useText } from '../../hooks/useText'
import { encrypt, decrypt } from '../../resources/Encrypts'
import './button.scss'

export const Button = ({ name, type, style }: { name: string, type?: 'encrypt' | 'decrypt' | 'copy',  style: 'primary' | 'secondary' }) => {
  const { value, handleHandleMessage, handleCopy } = useText()

  const handleClick = () => {
    switch (type) {
      case 'encrypt':
        if (value) handleHandleMessage(encrypt(value))
        break;
      case 'decrypt':
        if (value) handleHandleMessage(decrypt(value))
        break;
      case 'copy':
        handleCopy()
        break;
      default:
        break;
    }
  }
  return (
    <button className={`btn ${style}`} onClick={handleClick}>{ name }</button>
  )
}