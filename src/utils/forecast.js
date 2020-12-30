const request = require('request');

const forecast = (latitude, longitude, cb) => {
  const url = `http://api.weatherstack.com/current?access_key=cc90b0ded64842778f1fe9d1842ffc1e&query=${latitude},${longitude}&units=m`;
  request({ url, json: true }, (error, { body }) => {
    if (error)
      return cb('Unable to conect to Weather service.', undefined);

    if (body.error) 
      return cb('Unable to get forecast for that location.', undefined);

    const { temperature, feelslike, weather_descriptions, humidity } = body.current;
    cb(undefined, `${weather_descriptions[0]}. It is ${temperature}°C out. It feels like ${feelslike}°C. The humidity is ${humidity}%.`);
  });
};

module.exports = forecast;
