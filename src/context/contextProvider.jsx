import { useState } from "react"
import EmailContext from "./emailContext";

// função que retorna um componente
// eu coloquei Provider mas pode ser qualquer nome
// ela recebe um componente por parâmetro e passa esse 
// componenete para dentro do Provider do React
export default function Provider({children}) {

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  // o contextType nada mais é que um objeto onde está armazenado toda informação
  // que eu quero que meus componentes possam utilizar, seja apenas para exibir em tela
  // ou alterar o estado, ou vice-versa
  const contextType = {
    mail, setMail, password, setPassword
  }

  return (
    // O value espera receber um objeto, por esse motivo também criamos o contextType
    // caso não queria criar, pode passar um objeto dentro do value, contendo todas as informações
    /* caso de exemplo
      <EmailContext.Provider value={
        {
          mail, setMail, password, setPassword
        }
      }
      >
        {children}
      </EmailContext.Provider>
    */
    <EmailContext.Provider value={contextType}>
      {children}
    </EmailContext.Provider>
  )
}