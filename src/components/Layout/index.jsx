import './styles.css'

const Layout = ({children}) => {
    return(
        <section className="container">
          <img src="../../../public/pokeapi_logo.png" alt="PokeAPI" />
            {children}
        </section>
    )
}

export default Layout