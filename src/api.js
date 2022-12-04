const JSON_URL = 'https://jsonplaceholder.typicode.com'

export async function getData(url) {
  const res = await fetch(JSON_URL + url)
  if (!res.ok) throw Error()
  return res.json()
}

export const getUser = async (id) => {
  return getData('/users/' + id)
}

export const getAlbum = async (id) => {
  return getData('/albums/' + id)
}

export const getUsers = async () => {
  return getData('/users/')
}

export const getAlbums = async () => {
  return getData('/albums/')
}

export const getPhotos = async (id) => {
  return getData(`/albums/${id}/photos`)
}
