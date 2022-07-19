import {useState} from 'react'

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <>
        <h1>Meu Cadastro:</h1>
        <form onSubmit={cadastrarUsuario}>
            <>
            <label htmlFor="name">Nome:</label>
            <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Digite seu nome" 
            onChange={(e) => setName(e.target.value)}
            />
            </>
            <>
            <label htmlFor="password">Senha:</label>
            <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Digite sua senha" 
            onChange={(e) => setPassword(e.target.value)}
            />
            </>
            <>
            <input type="submit" value="Cadastrar" />
            </>
        </form>
        </>
    )   
}


export default Form