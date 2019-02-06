import React from 'react'

const AlbumsForm = ({ data, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input
            className="input"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={data.name}
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
            value={data.image}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Release Date</label>
        <div className="control">
          <input
            className="input"
            type="date"
            placeholder="Release Date"
            name="releaseDate"
            onChange={handleChange}
            value={data.releaseDate}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Genre</label>
        <div className="control">
          <input
            className="input"
            placeholder="Genre"
            name="genre"
            onChange={handleChange}
            value={data.genre}
          />
        </div>
      </div>

      <button className="button is-primary">Submit</button>
    </form>
  )
}

export default AlbumsForm
