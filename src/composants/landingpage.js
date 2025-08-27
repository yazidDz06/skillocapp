import styles from './landing.module.css';
import logo from '../assets/appbackground.png';
import Services from './servicesskill';
import { servicesTable } from './servicesskill';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


  
export default function LandingPage({ title, description, buttonText, features }) {
     const [servicesvis, setServicesvis] = useState(2);
       const navigate = useNavigate(); // pour naviguer entre pages
  return (
     
    <div className={styles.landing}>
      <img src={logo} alt="Logo Skilloc" className={styles.appbackground} />
      
      <h1>{title}</h1>
      <p>{description}</p>
      <button className={styles.ctabutton}  onClick={() => navigate('/login')}>{buttonText}</button>

      <div className={styles.features}>
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            {feature}
          </div>
        ))}
      </div>
      
        <Services 
        title="Nos Services"
        description="Nous offrons une variété de services pour répondre à vos besoins, plomberie, peinture, électricien, jardinier, ect. Nos professionnels sont là pour vous aider à chaque étape."
        
 />
<div class="flex gap-6 justify-center">
   <div  className={styles.servicesGrid}>
      {servicesTable.slice(0, servicesvis).map((service, index) => (
        <div key={index} className={styles.serviceItem}>
          <h3>{service.name}</h3>
          <img src={service.image} alt={service.name} />
          <p>{service.description}</p>
        </div>
      ))}
      {/* lorsque le nombre de services affichés est inférieur à la longueur du tableau, afficher le bouton "Voir plus" */}
      {servicesvis < servicesTable.length && (
     <div className="col-span-1 md:col-span-2 flex justify-center mt-6"> 
    <button className="px-6 py-2 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-600 transition"
      onClick={() => setServicesvis(servicesvis + 2)} >
      Voir plus
    </button>
    </div>
      )}
    </div>
    </div>
  </div>
    
    
    
    
    
    
    
  );
}
