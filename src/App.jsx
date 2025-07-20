import { useState } from 'react'

import reactLogo from './assets/react.svg'
import sacLogo from './assets/sac1.png'
import instm from './assets/ins.png'
import yout from './assets/you.png'
import faceb from './assets/face.png'
import './Menu.css'; // Importa el CSS
import './Correo.css'
import './App.css'









function App() {

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

          <a href="https://www.facebook.com/SACHAviacion" target="_blank">
          <img 
          src={faceb}
         alt="facebook"
         className="image-style2"
         />
          </a>
        </ul>
        </nav>
           
    </div>




        

      

        <p className='sa'>
        ESTAS EN <code>SACH.COM</code> VUELA ALTO
        </p>

 
         

      
      <p 
      className="read-the-docs">
        sitio en construccion
      </p>


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
  
    
       
  
    















    </>

  );
  
}





export default App;
