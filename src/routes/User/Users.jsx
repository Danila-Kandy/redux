import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../store/users/actions'
import './Users.css'

export default function Users() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  if (users.loading) return <div>Loading...</div>

  return (
    <div className="users">
      {users.map((user) => (
        <NavLink key={user.id} to={`/users/${user.id}`}>
          <div className="usersName">{user.name}</div>
        </NavLink>
      ))}
    </div>
  )
}
