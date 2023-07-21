export const getIcon = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;

export const openweathermapApiKey = 'dcba0ed759c66085eaeeca7f746953d9';

export const zip = '10033';

export const convertKelvinToFahrenheit = (kelvin) => {
	return Math.round(((kelvin - 273.15) * 9) / 5 + 32);
};

export const airnow_api_key = 'B65B5461-6DD5-4856-9B0F-D668C4C80457';

export const aqiObject = {
	1: {
		CategoryNumber: 1,
		Color: '#00e400',
		Description: 'Good'
	},
	2: {
		CategoryNumber: 2,
		Color: '#ffff00',
		Description: 'Moderate'
	},
	3: {
		CategoryNumber: 3,
		Color: '#ff7e00',
		Description: 'Unhealthy for Sensitive Groups'
	},
	4: {
		CategoryNumber: 4,
		Color: '#ff0000',
		Description: 'Unhealthy'
	},
	5: {
		CategoryNumber: 5,
		Color: '#8f3f97',
		Description: 'Very Unhealthy'
	},
	6: {
		CategoryNumber: 6,
		Color: '#7e0023',
		Description: 'Hazardous'
	}
};
