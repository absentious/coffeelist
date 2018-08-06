import React from 'react'
import { Field, reduxForm } from 'redux-form'

let UserReduxForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>{/* form body*/}
        <div class='form_flow'>
            <div class='form_input_holder'>
                <label htmlFor="email" className="cafeAddress_text"></label>
                <Field name="email" component="input" type="text" className="form_input" />
            </div>
            <div class='form_input_holder'>
                <label htmlFor="pass" className="cafeAddress_text"></label>
                <Field name="password" component="input" type="password" className="form_input" />
            </div>
            <div class='form_input_holder'>
                <button type="submit">Submit</button>
            </div>
        </div>
    </form>
  )
}

UserReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(UserReduxForm)


export default UserReduxForm