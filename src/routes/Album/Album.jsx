import './Album.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link, Navigate } from 'react-router-dom'
import { fetchAlbum, fetchPhotos } from '../../store/albums/actions'
import { fetchUser } from '../../store/users/actions'

export default function Album() {
  const { id, userId } = useParams()
  const dispatch = useDispatch()
  const album = useSelector((state) => state.albums.album)
  const photos = useSelector((state) => state.albums.photos)
  const user = useSelector((state) => state.users.user)
  const usersLoad = useSelector((state) => state.users.loading)
  const albumsLoad = useSelector((state) => state.albums.loading)
  const error = useSelector((state) => state.albums.error)
  
  useEffect(() => {
    dispatch(fetchAlbum(id))
  }, [])

  useEffect(() => {
   dispatch(fetchUser(userId))
  }, [])

  useEffect(() => {
    dispatch(fetchPhotos(id))
  }, [])

  if (usersLoad || albumsLoad || !user || !album || !photos)
    return <div>Loading...</div>

  return (
    <>
      {error && <Navigate to="/404" />}
      <div>
        <div className="userinfo">
          <span className="title">Title:</span> {album.title}
        </div>

        <div className="userinfo">
          <span className="title">Creator:</span>
          <span id="name">
            <Link to={`/users/${album.userId}`}>
              <span>{user.name}</span>
            </Link>
          </span>
        </div>
        {photos && (
          <div className="photo">
            {photos
              .filter((photos) => photos.albumId === album.id)
              .map((photos) => (
                <div key={photos.id}>
                  <img src={photos.url} alt=""></img>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  )
}
