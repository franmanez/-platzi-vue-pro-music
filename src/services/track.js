import axios from 'axios'
import configService from '@/services/config'

const trackService = { }

trackService.search = async (q) => {
  try {
    const type = 'track'
    return await axios.get(`${configService.apiUrl}/search`, {
      params: { q, type }
    })
      .then(res => {
        return res.data
      })
  } catch (errors) {
    console.error(errors)
  }
}

trackService.getById = async function (id) {
  return await axios.get(`${configService.apiUrl}/tracks/${id}`)
    .then(res => res.data)
}

export default trackService
