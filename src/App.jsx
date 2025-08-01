import { useState } from 'react'
import './index.css' // Importa el CSS de tailwind
import sacLogo from './assets/sac1.png'
import instm from './assets/ins.png'
import yout from './assets/you.png'
import faceb from './assets/face.png'
import './Menu.css'; // Importa el CSS
import './Correo.css'
import './App.css'
import autog from './componentes/autogiro.mp4'
import {Card, CardHeader, CardBody, Typography, Button} from "@material-tailwind/react";

 


function App() {




  const carreras = [
    "Piloto Privado y Comercial de Ala Fija",
    "Sobrecargo de Aviación",
    "Oficial de Operaciones Aeronáuticas",
    "Técnico en Mantenimiento Clases I y II",
  ];




  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log('Correo enviado:', email);
  };






  return (
    <>


      <div class="mi-caja1">

        <img
          src={sacLogo}
          alt="SACH"
          className="image-style"
        />




        <nav className="navbar">
          <ul className="menu-list">
            <li className="menu-item"><a href="#">Inicio</a></li>
            <li className="menu-item"><a href="#">!Conocenos¡</a></li>
            <li className="menu-item"><a href="#">Blog</a></li>
            <li className="menu-item"><a href="#">!Contactanos¡</a></li>

            <a href="https://www.instagram.com/sach_aviacion/" target="_blank">
              <img
                src={instm}
                alt="instagram"
                className="image-style4"
              />
            </a>

            <a href="https://youtu.be/2wEy9SkCtC4" target="_blank">
              <img
                src={yout}
                alt="youtube"
                className="image-style3"
              />
            </a>

            <a  href="https://www.facebook.com/SACHAviacion" target="_blank">
              <img
                src={faceb}
                alt="facebook"
                className="image-style2"
              />
            </a>
          </ul>
        </nav>

      </div>

        
        <div className="video-container">
        <video autoPlay loop muted className="custom-video">
          <source src={autog} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>
      




      


      <div class="email-container">


        <form onSubmit={handleSubmit} >
          <div>
            <label htmlFor="email">!Suscribete a nuestras ofertas y promociones! </label>
            <input
              className="email-input"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="sach@services.com"
              required

            />
            <button
              className="submit-btn"
              type="submit-btn">Enviar
            </button>
          </div>

        </form>

      </div>

 
 

        
      

    

      <div class="mi-caja2" > 
       
       <video autoPlay loop muted className="banne2">
          <source src={autog} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        
        <div>
        <p className='text1'>
          !Vive tus sueños!
        </p>
       
        <p className='text2'>
          Somos un Centro de Formación, Capacitación y adiestramiento, con número de Permiso F-178, otorgado por la Agencia Federal de Aviación Civil con los siguientes cursos:
        </p>

        <p>
        <ul className='list1'>
          
        {carreras.map((carreras, index) => (
        <li key={index}>{carreras}</li>
        ))}
        </ul>
        </p>
        </div>
        </div>




            <ul>
           {carreras.map((carreras, index) => (
            <li key={index}>{carreras}</li>
            ))}
            </ul>



      <p
        className="read-the-docs">
        sitio en construccion
      </p>
     



        <p className='sa'>
        ESTAS EN <code>SACH.COM</code> VUELA ALTO
      </p>













    </>

  );

}





export default App;
