const { memoize } = require('cerebro-tools')

// Expire places cache in 30 minutes
const EXPIRATION = 30 * 60 * 1000

const getPlaces = ({ keyword, location, lang }) => {
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyDqXQ-ENWbbjxE0pLPiS3fv7qJStrCVp60&query=${encodeURIComponent(keyword)}&language=${lang}&location=${location}`
  return fetch(url)
    .then(response => response.json())
    .then(json => json.results)
}

module.exports = memoize(getPlaces, {
  maxAge: EXPIRATION
})
