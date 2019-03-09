import React from 'react'

const Form = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input is-large"
            placeholder="City eg: London, UK"
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <button className="button is-large is-primary">GO</button>
        </div>
      </div>
    </form>
  )
}

export default Form
