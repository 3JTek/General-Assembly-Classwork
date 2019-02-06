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
      <div className="field">
        <label className="label">Artist</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select name="artist">
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Album</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select name="album">
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Length</label>
        <div className="control">
          <input
            className="input"
            placeholder="Length"
            name="length"
            onChange={handleChange}
            value={data.length || ''}
          />
        </div>
      </div>

      <button className="button is-primary">Submit</button>
    </form>
  )
}

export default ArtistsForm
