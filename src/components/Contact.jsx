import React from 'react'
import '../css/contact.css'

const Contact = () => {

  return (
    <>
    <section className="container-fluid contact-bg">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center"> 
          <form action="" target="_self" id="bootstrapForm" method="POST">
            <fieldset>
                <h2 className="title">Contactatenos<br/><small></small></h2>
            </fieldset>
            <fieldset>
                <legend className="form__text d-flex justify-content-start">Nombre</legend>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Nombre" required/>
                </div>
            </fieldset>
            <fieldset>
                <legend className="form__text d-flex justify-content-start">E-mail</legend>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="email" required/>
                </div>
            </fieldset>
            <fieldset>
                <legend className="form__text d-flex justify-content-start">Teléfono</legend>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Teléfono" required/>
                </div>
            </fieldset>
            <fieldset>
                <legend className="form__text d-flex justify-content-start" >Mensaje</legend>
                <div className="form-group">
                    <textarea className="form-control" placeholder="Ingresá tu mensaje"></textarea>
                </div>
            </fieldset>
            <input className="btn btn-success" type="submit" value="Enviar"/>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact