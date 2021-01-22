import axios from 'axios'
export default async (context, locale) => {
  return await axios
    .get(`https://api.betacore.nl/language/5f8c9a749164d18e61001a78`)
    .then(res => {
      var language = res.data.find(language => language.code === locale)
      return language.translations
    })
}
