import axios from 'axios'

const url = 'api/cats'

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

class CatService {
  static getCats () {
    return new Promise((resolve, reject) => {
      axios.get(url).then((res) => {
        const data = res.data

        resolve(
          data.map(cats => ({
            ...cats
          }))
        )
      }).catch((err) => {
        reject(err)
      })
    })
  }

  static addCat (formData) {
    return axios.post(url, formData, config)
  }
}

export default CatService
