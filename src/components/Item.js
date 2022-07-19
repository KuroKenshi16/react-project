import PropTypes from 'prop-types'


function Item({marca, anoLancamento}) {
    return(
        <>
        <li>
            {marca} - {anoLancamento}
        </li>
        <p></p>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number,
}

Item.defaultProps = {
   marca: 'Faltou a marca zé mané',
   anoLancamento: 0, 
}

export default Item