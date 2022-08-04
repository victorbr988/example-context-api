import { useContext } from "react";
import { NavLink } from "react-router-dom";
import emailContext from "../context/emailContext";

export default function Form() {
    // pense no useContext uma função que retorna um objeto
    // você só precisa passar para ele o nome do seu contexto, que por baixo dos panos
    // o react identifica o seu estado global e coloca dentro do mailContext(no nosso caso)
    const mailContext = useContext(emailContext);

    // para ajudar na sua visualização
    console.log(mailContext)

    return (
        <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="px-6 py-4">
                <h2 className="text-3xl font-bold text-center text-gray-200 dark:text-white">Brand</h2>

                <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

                <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

                <form>
                    <div className="w-full mt-4">
                        <input
                            // aqui eu utilizo normalmente a minha função que altera o meu estado
                            // mas lembrando que ela está dentro de um objeto, então eu preciso chamar primeiro
                            // o meu objeto que no meu caso é o mailContext
                            onChange={(e) => mailContext.setMail(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address"
                        />
                    </div>

                    <div className="w-full mt-4">
                        <input
                            // aqui eu utilizo normalmente a minha função que altera o meu estado
                            // mas lembrando que ela está dentro de um objeto, então eu preciso chamar primeiro
                            // o meu objeto que no meu caso é o mailContext
                            onChange={(e) => mailContext.setPassword(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password"
                        />
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>

                        <NavLink to="user-data" className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none" type="button">Login</NavLink>
                    </div>
                </form>
            </div>

            <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

                <a href="#" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</a>
            </div>
        </div>
    )
}