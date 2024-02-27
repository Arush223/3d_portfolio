import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';


const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name: "", email: "", message: "" });
  const [isLoading, setisLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const {alert, showAlert, hideAlert } = useAlert();



  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };
  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');
  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    setCurrentAnimation('hit');
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Aarush",
        from_email: form.email,
        to_email: 'aarushj1300@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setisLoading(false);
      showAlert({show: true, text: 'Message sent succesfully!', type: 'success'});

      setTimeout(() => {
        setCurrentAnimation('idle');
        setForm({name: '', email: '', message: ''});

      }, [3000])

      setForm({name: '', email: '', message:''});
    }).catch((error) => {
      setisLoading(false);
      setCurrentAnimation('idle');
      showAlert({show: true, text: 'Message was not sent :(!', type: 'danger'});
    })
  };

  return (

    <div className="bg-black">
    <section className = "relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert} /> }
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className = "head-text text-white">Get In Touch</h1>
        <form 
          className = "w-full flex flex-col gap-7 mt-14"
          onSubmit = {handleSubmit}
        >
          <label className = "text-white font-semibold">
            Name
            <input 
            type='text' 
            name='name' 
            className = 'input' 
            placeholder='Astro'
            required
            value = {form.name}
            onChange = {handleChange}
            onFocus = {handleFocus}
            onBlur = {handleBlur}
            /> 
          </label>
          <label className = "text-white font-semibold">
            Email
            <input 
            type='email' 
            name='email' 
            className = 'input' 
            placeholder='astro@nasa.com'
            required
            value = {form.email}
            onChange = {handleChange}
            onFocus = {handleFocus}
            onBlur = {handleBlur}
            /> 
          </label>
          <label className = "text-white font-semibold">
            Your Message
            <textarea
            name='message' 
            rows = {4}
            className = 'textarea' 
            placeholder='Hello from space!'
            required
            value = {form.message}
            onChange = {handleChange}
            onFocus = {handleFocus}
            onBlur = {handleBlur}
            /> 
          </label>
          <button type = "submit" className = "btn"  disabled = {isLoading} onFocus={handleFocus} onBlur={handleBlur}>
            {isLoading ? 'Sending...' : 'Send Message'}
            
          </button>

        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        
          <Canvas
            camera = {{
              position: [0,0,5],
              fov: 75,
              near: 0.1,
              far: 1000
            }}
          >
            
            <directionalLight intensity={2.5} position={[0,0,1]} />
            <ambientLight intensity={0.5} />  
            <Suspense fallback = {<Loader />}> 
              <Fox 
                currentAnimation={currentAnimation}
                position = {[0.5,0.35,0]}
                rotation = {[12.6,-0.6,0]}
                scale = {[.5,0.5,0.5]}
                
              />
            </Suspense>
          </Canvas>

      </div>
    </section>

    </div>
  )
}

export default Contact