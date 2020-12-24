/**
 * @typedef {Object} Weather
 * @property {number} id
 * @property {string} main
 * @property {string} description
 * @property {string} icon
 */

/**
 * @typedef {Object} Temperature
 * @property {number} day
 * @property {number} min
 * @property {number} max
 * @property {number} night
 * @property {number} eve
 * @property {number} morn
 */

/**
 * @typedef {Object} FeelsLike
 * @property {number} day
 * @property {number} night
 * @property {number} eve
 * @property {number} morn
 *
 */

/**
 * @typedef {Object} CurrentWeather
 * @property {number} dt
 * @property {number} sunrise
 * @property {number} sunset
 * @property {number} temp
 * @property {number} feels_like
 * @property {number} pressure
 * @property {number} humidity
 * @property {number} dew_point
 * @property {number} uvi
 * @property {number} clouds
 * @property {number} visibility
 * @property {number} wind_speed
 * @property {number} wind_deg
 * @property {Weather[]} weather
 */

/**
 * @typedef {Object} WeatherData
 * @property {number} dt
 * @property {number} sunrise
 * @property {number} sunset
 * @property {Temperature} temp
 * @property {FeelsLike} feels_like
 * @property {number} pressure
 * @property {number} humidity
 * @property {number} dew_point
 * @property {number} wind_speed
 * @property {number} wind_deg
 * @property {Weather} weather
 * @property {number} clouds
 * @property {number} pop - Probability of precipitation
 * @property {number} uvi
 */
