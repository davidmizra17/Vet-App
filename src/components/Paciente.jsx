import React, { Component } from 'react'

export default class Paciente extends Component {
  render() {
    return (
        <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'> 
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
            <span className='font-normal normal-case'>Hook</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
            <span className='font-normal normal-case'>David</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
            <span className='font-normal normal-case'>correo@correo.com</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de alta: {''}
            <span className='font-normal normal-case'>16 de diciembre</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {''}
            <span className='font-normal normal-case'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita modi voluptatibus quos ut facere recusandae consequuntur totam dolores, 
            officiis animi sint reprehenderit placeat nisi deleniti! Sit velit praesentium quia cumque!</span>
        </p> 
      </div>
    )
  }
}
