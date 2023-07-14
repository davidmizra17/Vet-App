import React, { Component } from 'react'

export default class Formulario extends Component {
  render() {
    return (
      <div className="md:w-1/2 lg:w-2/5">
        <h2 className='font-black text-3xl text-center'>
            Seguimiento de Pacientes
            </h2>
            <p className='text-xl mt-5 text-center mb-10'>
                Añade pacientes y {''}
               <span className='text-indigo-600 font-bold'>adminístralos</span> 
            </p>
            <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10' >
                <div>
                    <label htmlFor="mascota" className='block text-gray-700 uppercase'>
                        Nombre Mascota</label>

                    <input 
                    id='mascota'
                    type="text" 
                    placeholder='Nombre de la mascota'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
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
                    />
                </div>

                <div className='mt-5'>
                    <label htmlFor="alta" className='block text-gray-700 uppercase'>
                        Alta</label>

                    <input 
                    id='alta'
                    type="date" 
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    />
                </div>

                <div className='mt-5'>
                    <label htmlFor="sintomas" className='block text-gray-700 uppercase'>
                        Sintomas</label>

                    <textarea name="sintomas" id="sintomas" cols="50" rows="5"  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Describa los síntomas que presente el animal'></textarea>
                    
                </div>

                <input 
                type="submit"
                className='bg-indigo-600 w-full p-3 rounded-md text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' 
                value="Agregar Paciente"
                 />
            </form>

        </div>



        
    )
  }
}
