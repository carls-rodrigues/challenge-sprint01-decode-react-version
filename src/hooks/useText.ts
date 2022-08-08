import { useContext } from "react";
import { TextContext } from "../context/TextContext";

export function useText() {
  const context = useContext(TextContext);
  return context
}