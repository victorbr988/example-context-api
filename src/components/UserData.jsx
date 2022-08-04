import { useContext } from "react"
import emailContext from "../context/emailContext"

export default function UserData() {
  const userData = useContext(emailContext)

  return (
    <div className="text-2xl flex flex-col gap-2 text-gray-800">
      <header>Suas informações</header>
      {JSON.stringify(userData)}
    </div>
  )
}