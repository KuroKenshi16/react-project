function Pessoa ({nome, idade, profiss, hob, foto}) {

    return (
        <div>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}.</h2>
            <p>Idade: {idade}.</p>
            <p>Profissão: {profiss}.</p>
            <p>Hobbie: {hob}.</p>
        </div>
    )
}

export default Pessoa