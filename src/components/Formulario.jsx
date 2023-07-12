import React, { Component } from 'react'

export default class Formulario extends Component {
  render() {
    return (
      <div className="md:w-1/2 lg:w-2/5">
        <h2 className='font-black text-3xl text-center'>
            Seguimiento de Pacientes
            </h2>
            <p className='text-lg mt-5 text-center mb-10'>
                Añade pacientes y {''}
               <span className='text-indigo-600 font-bold'>adminístralos</span> 
            </p>
            <form className='bg-white shadow-md rounded-lg py-10 px-5' >
                <div>
                    <label className='block text-gray-700 uppercase'>Nombre Mascota</label>

                    <input type="text" 
                    placeholder='Nombre de la mascota'
                    className='border-2 w-full p-2 mt-2 placeholder-red-600'
                    />
                </div>
            </form>

        </div>
    )
  }
}
