import { useState } from 'react'
import { useText } from '../../hooks/useText'
import './textarea.scss'

export const Textarea = () => {
  const { value, handleTextAreaText } = useText()
  return (
    <div className="textarea-container">
      <textarea
        name=""
        id=""
        placeholder='Digite seu texto'
        value={value}
        onChange={(e) => handleTextAreaText(e.target.value)}
      >
      </textarea>
    </div>
  )
}