import axios from 'axios'
import configService from '@/services/config'

axios.defaults.baseURL = configService.apiUrl
