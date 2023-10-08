import './styles.css'

const Card = props => {
    return(
        <section className="card">
          <img className='pokemonImg' src={props.image || "https://sm.ign.com/ign_br/screenshot/default/29-1_97wq.jpg"} alt="PokeAPI" />
          <div className='textSection'>
            <p className='title'>{props.name}</p>
            <p className='description'>tipo: Eletrico</p>
            <p className='description'>status base: 45</p>
          </div>
        </section>
    )
}

export default Card