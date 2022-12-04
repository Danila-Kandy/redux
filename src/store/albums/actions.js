import { getAlbum, getAlbums, getPhotos } from '../../api'
import {
  setAlbumsAction,
  setAlbumAction,
  getPhotosAction,
} from './albumsReducer'

export const fetchAlbum = (id) => async (dispatch) => {
  dispatch({ type: 'FETCH_START' })
  try {
    const album = await getAlbum(id)
    dispatch(setAlbumAction(album))
  } catch (err) {
    dispatch({ type: 'FETCH_ERROR', payload: err.message })
  }
}

export const fetchAlbums = () => async (dispatch) => {
  dispatch({ type: 'FETCH_START' })
  try {
    const albums = await getAlbums()
    dispatch(setAlbumsAction(albums))
  } catch (err) {
    dispatch({ type: 'FETCH_ERROR', payload: err.message })
  }
}

export const fetchPhotos = (id) => async (dispatch) => {
  dispatch({ type: 'FETCH_START' })
  try {
    const photos = await getPhotos(id)
    dispatch(getPhotosAction(photos))
  } catch (err) {
    dispatch({ type: 'FETCH_ERROR', payload: err.message })
  }
}
