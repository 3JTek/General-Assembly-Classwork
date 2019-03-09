import React from 'react'

const TrackForm = ({ artists, albums, data, handleChange, handleSubmit }) => {
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
            value={data.title || ''}
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
            <select name="artist" onChange={handleChange}>
              <option selected={true} disabled value="">Choose Tagging</option>
              {artists.map(artist =>
                <option key={artist._id} value={artist._id}>{artist.name}</option>
              )}
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Album</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select name="album" onChange={handleChange}>
              <option selected={true} disabled value="">Choose Tagging</option>
              {albums.map(album =>
                <option key={album._id} value={album._id}>{album.title}</option>
              )}
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

export default TrackForm
