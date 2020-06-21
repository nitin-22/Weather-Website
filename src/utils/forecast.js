const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b1969375ede1fa385cda81584f17722e&query='+ latitude + ','+longitude+'&units=m'
    request({url, json: true}, (error, { body }) => {
        if (error){
            callback('Unable to connect tot weather services', undefined)
        } else if (body.error){
            callback('unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]+'. The current tempersture is '+body.current.temperature+" degrees and it feels like "+body.current.feelslike+" degrees.")
        }
    })
}

module.exports = forecast