function Evento({numero}) {

    function meuEvento(){
        alert(`Opa, fui ativo! ${numero}`)
        console.log(`Opa, fui ativo! ${numero}`)
    }

    return(
        <>
        <p>Clique para disparar um evento:</p>
        <button onClick={meuEvento}>Ativar!</button>
        </>
    )
}


export default Evento