import axios from 'axios'
export default async function() {
  return await axios
    .get(`https://api.betacore.nl/language/5f8c9a749164d18e61001a78`)
    .then(res => {
      var languages = []
      res.data.forEach(language => {
        languages.push({
          code: language.code,
          iso: language.iso,
          name: language.name,
          dir: language.dir,
          file: 'translations.js'
        })
      })
      return languages
    })
}
