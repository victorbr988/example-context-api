import Pagination from './Routes/pagination'
import Provider from './context/contextProvider'

function App() {
  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center">
      {/*
        Aqui o Provider precisa precisa estar em volta de toda a minha aplicação
        Coloquei dentro do App mas também poderia ter sido dentro do meu arquivo main.jsx
        O ideal é que fique no topo da sua aplicação porque ele é quem vai prover(dar)
        Acesso do seu estado global para os outros componentes
      */}
      <Provider>
        <Pagination /> 
      </Provider>
    </div>
  )
}

export default App
