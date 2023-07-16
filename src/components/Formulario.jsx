import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import Error from './Error';
 

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente  }) => {
  
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const[error, setError] = useState(false);

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)

            
        }else{
            console.log('vacio')
        }
    }, [paciente])

  

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)

        return fecha + random;
    }
    

    
    const handleSubmit = (e) => {
        e.preventDefault();

        // FORM VALIDATION
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            console.log("Hay al menos un campo vacío")
            setError(true);
            return;
        }
        setError(false);

        //OBJETO PACIENTE
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            
        }

        if(paciente.id){
            //EDITANDO REGISTRO
            objetoPaciente.id = paciente.id
            console.log(objetoPaciente)
            console.log(paciente)

            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})


        }else{
            //NUEVO REGISTRO
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        

        //REINICIAMOS EL FORM
        setEmail('')
        setFecha('')
        setNombre('')
        setSintomas('')
        setPropietario('')

        
        console.log("enviando form"); 
    }

    
    return (
      <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className='font-black text-3xl text-center'>
            Seguimiento de Pacientes
            </h2>
            <p className='text-xl mt-5 text-center mb-10'>
                Añade pacientes y {''}
               <span className='text-indigo-600 font-bold'>adminístralos</span> 
            </p>
            <form onSubmit={handleSubmit}
            
            className='bg-white shadow-md rounded-lg py-10 px-5 mb-10' >
                {error && <Error mensaje='Todos los campos son obligatorios'/>} 
                
                <div className='mb-5'>
                    <label htmlFor="mascota" className='block text-gray-700 uppercase'>
                        Nombre Mascota
                        </label>

                    <input 
                    id='mascota' 
                    type="text" 
                    placeholder='Nombre de la mascota'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={nombre}
                    onChange={ (e) => setNombre(e.target.value) }
                    />
                </div>

                <div className='mt-5'>
                    <label htmlFor="propietario" className='block text-gray-700 uppercase'>
                        Nombre propietario</label>

                    <input 
                    id='propietario'
                    type="text" 
                    placeholder='Nombre del propietario'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={propietario}
                    onChange={ (e) => setPropietario(e.target.value) }
                    />
                </div>
                <div className='mt-5'>
                    <label htmlFor="email" className='block text-gray-700 uppercase'>
                        Ingrese email</label>

                    <input 
                    id='email'
                    type="email" 
                    placeholder='Email propietario'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={email}
                    onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>

                <div className='mt-5'>
                    <label htmlFor="alta" className='block text-gray-700 uppercase'>
                        Alta</label>

                    <input 
                    id='alta'
                    type="date" 
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={fecha}
                    onChange={ (e) => setFecha(e.target.value) }
                    />
                </div>

                <div className='mt-5'>
                    <label htmlFor="sintomas" className='block text-gray-700 uppercase'>
                        Sintomas</label>

                    <textarea 
                    name="sintomas" 
                    id="sintomas" 
                    cols="50" rows="5"  
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Describa los síntomas que presente el animal'
                    value={sintomas}
                    onChange={ (e) => setSintomas(e.target.value) }
                    ></textarea>
                    
                </div>

                <input 
                type="submit"
                className='bg-indigo-600 w-full p-3 rounded-md text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' 
                value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                 />
            </form>

        </div>



        
    )
  
}
export default Formulario;
