const apiip = require('apiip.net')(process.env.IP_API_KEY);

exports.getLocationByIp = async () => {
  const location = await apiip.getLocation();
  return location;
};