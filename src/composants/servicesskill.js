import styles from './landing.module.css';
import plomb from '../assets/plomberie.png';
import peintre from '../assets/peinturepic.png';
import electr from '../assets/elec.png';
import jardinier from '../assets/jardin.png';

export default function Services({title,description}) {
   


    return (
        <div className={styles.services}>
        
            <h2>{title}</h2>
        
            <p>{description}</p>
            
        </div>
        
    )
   
}
export const servicesTable = [
        { name: "Plomberie",image: plomb, description: "Services de plomberie pour tous vos besoins domestiques et commerciaux." },
        { name: "Peinture",image : peintre, description: "Peinture intérieure et extérieure pour embellir votre espace." },
        { name: "Électricien",image : electr, description: "Installation et réparation électrique par des professionnels qualifiés." },
        { name: "Jardinier",image : jardinier, description: "Entretien de jardin et aménagement paysager." },

    ]
  