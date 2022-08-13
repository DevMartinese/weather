exports.formatLocationData = (locationData) => {
  const { continentName, countryCode, countryName, regionName, city, postalCode } = locationData;

  return {
    continent: continentName,
    country: countryName,
    region: regionName,
    city,
    postal_code: postalCode,
    country_code: countryCode
  };
};