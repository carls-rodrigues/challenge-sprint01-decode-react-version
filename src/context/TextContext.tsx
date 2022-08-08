import { createContext, ReactNode, useState } from "react";

export type TextContextProviderTypes = {
  children: ReactNode
}
export type TextContextTypes = {
  value: string
  message: string
  handleTextAreaText: (text: string) => void
  handleHandleMessage: (text: string) => void
  handleCopy: () => void
}

export const TextContext = createContext({} as TextContextTypes)

export function TextContextProvider({ children }: TextContextProviderTypes) {
  const [value, setValue] = useState('')
  const [message, setMessage] = useState('')
  function handleTextAreaText(text: string)  {
    setValue(text)
  }
  function handleHandleMessage(text: string) {
    setMessage(text)
    setValue('')
  }
  function handleCopy() {
    navigator.clipboard.writeText(message)
  }
  return (
    <TextContext.Provider value={{ value, message, handleTextAreaText, handleHandleMessage, handleCopy }}>
      {children}
    </TextContext.Provider>
  )
}