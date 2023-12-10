import './styles.css'
import { useNavigate } from "react-router-dom";

const Card = props => {
  const navigate = useNavigate();
  return(
    <section className="card" onClick={()=> {navigate(`/pokemon/${props.name}`)}}>
      <img className='pokemonImg' src={props.image || "https://cdn-icons-png.flaticon.com/512/188/188918.png"} alt="PokeAPI" />
      <div className='textSection'>
        <p className='title'>{props.name}</p>
        <p className='description'>{props.height ? `Height: ${props.height}` : ''} </p>
        <p className='description'>{props.status ? `Base experience: ${props.status}` : ''} </p>
      </div>
    </section>
  )
}

export default Card