import NavbarLogout from '../../partials/NavbarLogout'
import ConnexionFormLayout from '../layouts/ConnexionFormLayout'
import Footer from '../../partials/Footer'

const Connexion = () => {
    return (
        <div className='div-connexion'>
            <NavbarLogout />
            <ConnexionFormLayout />
            <Footer />
        </div>
    )
}

export default Connexion