const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoibml0aW4yMiIsImEiOiJja2JsdjhnZnExYm82MndteWM1c2xuMzhxIn0.eUaqTtLxfa3vbEujPLSNfg&limit=1'

    request({ url, json: true}, (error, { body }) => {
        if (error){
            callback('Uabble to connect to location services!', undefined)
        } else if (body.features.length === 0){
            callback('Unable to find location. Please find another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode