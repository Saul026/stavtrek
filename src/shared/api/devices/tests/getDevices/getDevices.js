const axios = require('axios');

const getDevices = async () => {
    try {
        const response = await axios.get('https://gps.autotracker.group/api/devices');
        return response;
    } catch (e) {}
};


module.exports = getDevices