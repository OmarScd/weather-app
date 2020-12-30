const request = require('request');

const geocode = (address, cb) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic2Fsc2F1Y2VkbyIsImEiOiJja2phZmx6am4wYWRhMnhxdjZuOXRzZHBuIn0.V28z2aIR9ZBpSga65TWHTQ&limit=1`;
  request({ url, json: true }, (error, { body }) => {
    if (error)
      return cb('Unable to connect to location service.', undefined);
    
    if (body.features.length === 0)
      return cb('Unable to find location, try another search.', undefined);
    
    const { center:[longitude, latitude], place_name:placeName } = body.features[0];
    cb(undefined, { latitude, longitude, placeName });
  });
};

module.exports = geocode;
