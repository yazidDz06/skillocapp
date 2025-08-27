import LandingPage from './composants/landingpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './composants/LoginPage';
import RegisterPage from './composants/register';
import Dashboard from './composants/Dash';
import Dashboardstats from './composants/Dashboardstats';
import RecherchePros from './composants/clientinterface';
import Clientinterface from './composants/clientinterface';

function App() {
  return (
     <Router>
      <Routes>
       <Route path="/" element={<LandingPage   title="Bienvenue à Skilloc, Plateforme qui relie les pros à leurs clients"
      description="Découvrez nos services et trouvez le professionnel qu'il vous faut."
      buttonText="Commencer"
      features={[
        "Trouver des professionnels qualifiés",
        "Services variés pour tous vos besoins",
        "Assistance client 24/7"
      ]} />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/dashboardstats" element={<Dashboardstats />} />
        <Route path="/recherchepros" element={<RecherchePros />} />
        <Route path="/clientinterface" element={<Clientinterface/>} />
      </Routes>
    </Router>
    
    
  
    
  );
}

export default App;

