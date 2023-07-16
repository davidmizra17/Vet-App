import React, { Component } from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente}) => {
  

    return (
    <div className="md:w-1/2 lg:w-3/5 h-screen overflow overflow-y-scroll">
      {pacientes && pacientes.length ? (
      <>
        <h2 className='font-black text-3xl text-center '>Listado de Pacientes</h2>
          <p className='text-xl mt-5 mb-10 md:text-center'>
        Administra tus {''}
            <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
          </p>

        { pacientes.map( paciente => (
          <Paciente 
          key={paciente.id}
          paciente={paciente}
          setPaciente={setPaciente}
          />
        ))}
  
      </>
      
    
    ) : (
      <>
        <h2 className='font-black text-3xl text-center '>No hay pacientes agregados</h2>
          <p className='text-xl mt-5 mb-10 md:text-center'>
        Comienza agregando pacientos para que  {''}
            <span className='text-indigo-600 font-bold'>aparezcan aqui</span>
          </p>
      </>
    )}
    </div>
    
    )
}
  

export default ListadoPacientes;