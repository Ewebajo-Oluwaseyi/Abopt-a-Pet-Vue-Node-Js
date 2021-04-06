import axios from 'axios'

const url = 'api/dogs'

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

class DogService {
  static getDogs () {
    return new Promise((resolve, reject) => {
      axios.get(url).then((res) => {
        const data = res.data

        resolve(
          data.map(dogs => ({
            ...dogs
          }))
        )
      }).catch((err) => {
        reject(err)
      })
    })
  }

  static addDog (formData) {
    return axios.post(url, formData, config)
  }
}

export default DogService
