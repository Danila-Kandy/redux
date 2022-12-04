import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbums } from '../../store/albums/actions'
import './Albums.css'

export default function Albumss() {
  const dispatch = useDispatch()
  const albums = useSelector((state) => state.albums.albums)

  useEffect(() => {
    dispatch(fetchAlbums())
  }, [])

  if (albums.loading) return <div>Loading...</div>

  return (
    <div className="albums">
      {albums.map((albums) => (
        <Link key={albums.id} to={`/albums/${albums.id}`}>
          <div className="albumsTitle">
            <span id="albumid">{albums.id}</span>
            {albums.title}
          </div>
        </Link>
      ))}
    </div>
  )
}
