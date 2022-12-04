import './Error.css'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className="error">
      <h2>404</h2>
      <h1>Page not found</h1>
      <h2 style={{ color: 'grey' }}>
        Go to <Link to="/">home</Link>
      </h2>
    </div>
  )
}
