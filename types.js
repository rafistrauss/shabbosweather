/**
 * @typedef {object} one_call_weather_data_response
 * @property {number} lat
 * @property {number} lon
 * @property {string} timezone
 * @property {number} timezone_offset
 * @property {current} current
 * @property {hourly[]} hourly
 * @property {daily[]} daily
 */

/**
* OpenWeatherMap API response for one call weather data
 * @typedef {object} current
 * @property {number} dt Time of the forecasted data, Unix, UTC
 * @property {number} sunrise
 * @property {number} sunset
 * @property {number} temp Temperature. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.
 * @property {number} feels_like Temperature. This accounts for the human perception of weather. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.
 * @property {number} pressure Atmospheric pressure on the sea level, hPa
 * @property {number} humidity Humidity, %
 * @property {number} dew_point Atmospheric temperature (varying according to pressure and humidity) below which water droplets begin to condense and dew can form. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.
 * @property {number} uvi UV index
 * @property {number} clouds Cloudiness, %
 * @property {number} visibility Average visibility, metres. The maximum value of the visibility is 10km
 * @property {number} wind_speed Wind speed. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour
 * @property {number} wind_deg Wind direction, degrees (meteorological)
 * @property {weather[]} weather
    // Temporarily adding these properties to the current object
 * @property {number} aqi Air Quality Index. Possible values: 1, 2, 3, 4, 5. Where 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor.
 */

/**
 * @typedef {object} weather
 * @property {number} id
 * @property {string} main
 * @property {string} description
 * @property {string} icon
 */

/**
 * @typedef {object} hourly
 * @property {number} dt Time of the forecasted data, Unix, UTC
 * @property {number} temp Temperature. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.
 * @property {number} feels_like Temperature. This accounts for the human perception of weather. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.
 * @property {number} pressure Atmospheric pressure on the sea level, hPa
 * @property {number} humidity Humidity, %
 * @property {number} dew_point Atmospheric temperature (varying according to pressure and humidity) below which water droplets begin to condense and dew can form. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.
 * @property {number} uvi UV index
 * @property {number} clouds Cloudiness, %
 * @property {number} visibility Average visibility, metres. The maximum value of the visibility is 10km
 * @property {number} wind_speed Wind speed. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour
 * @property {number} wind_deg Wind direction, degrees (meteorological)
 * @property {number} [wind_gust] Wind gust. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour.
 * @property {weather[]} weather
 * @property {number} pop Probability of precipitation. The values of the parameter vary between 0 and 1, where 0 is equal to 0%, 1 is equal to 100%
 */

/**
 * @typedef {object} rain
 * @property {number} "1h"
 */

/**
 * @typedef {object} snow
 * @property {number} 1h
 */

/**
 * @typedef {object} daily
 * @property {number} dt Time of the forecasted data, Unix, UTC
 * @property {number} sunrise
 * @property {number} sunset
 * @property {number} moonrise
 * @property {number} moonset
 * @property {number} moon_phase
 * @property {temp} temp
 * @property {feels_like} feels_like
 * @property {number} pressure Atmospheric pressure on the sea level, hPa
 * @property {number} humidity Humidity, %
 * @property {number} dew_point Atmospheric temperature (varying according to pressure and humidity) below which water droplets begin to condense and dew can form. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.
 * @property {number} wind_speed Wind speed. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour
 * @property {number} wind_deg Wind direction, degrees (meteorological)
 * @property {number} wind_gust
 * @property {weather[]} weather
 * @property {number} clouds
 * @property {number} pop
 * @property {number} uvi
 */

/**
 * @typedef {object} temp
 * @property {number} day
 * @property {number} min
 * @property {number} max
 * @property {number} night
 * @property {number} eve
 * @property {number} morn
 */

/**
 * @typedef {object} feels_like
 * @property {number} day
 * @property {number} night
 * @property {number} eve
 * @property {number} morn
 */

/**

Data from AirNow API (https://docs.airnowapi.org/)

* @typedef {object} AirNowData
* @property {string} DateObserved
* @property {number} HourObserved
* @property {string} LocalTimeZone
* @property {string} ReportingArea
* @property {string} StateCode
* @property {number} Latitude
* @property {number} Longitude
* @property {string} ParameterName
* @property {number} AQI
* @property {Category} Category
*/

/**
 * @typedef {object} Category
 * @property {number} Number
 * @property {string} Name
 */

// Object for air quality index (AQI) color codes, numbers, and descriptions
// map of AQI numbers to AQI objects, which contain color codes and descriptions
// https://docs.airnowapi.org/aq101
/**
 * @typedef {object} AQI
 * @property {number} CategoryNumber
 * @property {string} Color
 * @property {string} Description
 */
