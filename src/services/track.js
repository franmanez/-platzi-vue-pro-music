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

export default trackService
