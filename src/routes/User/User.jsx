import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbums } from '../../store/albums/actions'
import { fetchUser } from '../../store/users/actions'
import { NavLink } from 'react-router-dom'
import './User.css'

export default function User() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const usersLoad = useSelector((state) => state.users.loading)
  const albumsLoad = useSelector((state) => state.albums.loading)
  const user = useSelector((state) => state.users.user)
  const albums = useSelector((state) => state.albums.albums)
  const error = useSelector((state) => state.users.error)

  useEffect(() => {
    dispatch(fetchAlbums())
    dispatch(fetchUser(id))
  }, [id])

  if (usersLoad || albumsLoad || !user) return <div>Loading...</div>

  return (
    <>
      {error && <Navigate to="/404" />}
      <div>
        <div className="userinfo">
          <span className="title">Name:</span> {user.name}
        </div>
        <div className="userinfo">
          <span className="title">Phone:</span> {user.phone}
        </div>
        <div className="userinfo">
          <span className="title">Username:</span> {user.username}
        </div>
        <div className="userinfo">
          <span className="title">Email:</span> {user.email}
        </div>
        <div className="album">
          {albums
            .filter((album) => album.userId === +id)
            .map((album) => (
              <NavLink key={album.id} to={`/albums/${album.id}/${id}`}>
                <div className="albumtitle">
                  <span id="albumid">{album.id}</span>
                  {album.title}
                </div>
              </NavLink>
            ))}
        </div>
      </div>
    </>
  )
}
