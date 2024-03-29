import React from 'react'
import { useForm } from 'react-hook-form'
import './Form.css'
import Swal from 'sweetalert2'

const Send = () => {
    Swal.fire(
        'Mensaje Enviado',
        'Te registraste con Exito',
        'success'
      )
      setTimeout(() => {
        window.location.reload();
      }, 1000);
}

const Form = () => {
  const { register, handleSubmit } = useForm() 
  const customSubmit = () => {
      
  }
  return (
    <>
    <div className='container-form'>
        <p className='tittle'>Contáctanos</p>
        <form onSubmit={ handleSubmit(customSubmit) } className='form-react'>
            <div className='form-control'>
                <label>Nombre</label>
                <input type="text" {...register('name')} />
            </div>
            <div className='form-control'>
                <label>Edad</label>
                <input type="number" {...register('age')} />
            </div>
            <div className='form-control'>
                <label>Direccion</label>
                <input type="text" {...register('country')} />
            </div>
            <button onClick={Send} type='submit'>Send</button>
        </form>
    
    </div>
    </>
  )
}

export default Form