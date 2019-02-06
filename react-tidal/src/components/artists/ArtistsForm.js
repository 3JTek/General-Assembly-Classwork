import React from 'react'

const ArtistsForm = ({ data, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input
            className="input"
            placeholder="Title"
            name="name"
            onChange={handleChange}
            value={data.name || ''}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            className="input"
            placeholder="Image"
            name="image"
            onChange={handleChange}
            value={data.image || ''}
          />
        </div>
      </div>

      <button className="button is-primary">Submit</button>
    </form>
  )
}

export default ArtistsForm
