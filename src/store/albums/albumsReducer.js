const SET_ALBUMS = 'SET_ALBUMS'
const SET_ALBUM = 'SET_ALBUM'
const FETCH_ERROR = 'FETCH_ERROR'
const FETCH_START = 'FETCH_START'
const GET_PHOTOS = 'GET_PHOTOS'
const INITIAL_STATE = {
  photos: [],
  albums: [],
  album: {},
  loading: false,
  error: null,
}
const albumsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true }
    case FETCH_ERROR:
      return { ...state, loading: false, error: true }
    case SET_ALBUMS:
      return {
        ...state,
        loading: false,
        error: false,
        albums: [...action.payload],
      }
    case SET_ALBUM:
      return {
        ...state,
        loading: false,
        error: null,
        album: action.payload,
      }
    case GET_PHOTOS:
      return {
        ...state,
        loading: false,
        error: null,
        photos: [...action.payload],
      }
    default:
      return state
  }
}
export const setAlbumsAction = (payload) => ({ type: SET_ALBUMS, payload })
export const setAlbumAction = (payload) => ({ type: SET_ALBUM, payload })
export const getPhotosAction = (payload) => ({ type: GET_PHOTOS, payload })

export default albumsReducer
