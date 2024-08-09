const axios = require('axios');

const getDeviceById = async (id) => {
    try {
        const response = await axios.get(`https://gps.autotracker.group/api/devices?id=${id}`);
        return response;
    } catch (e) {}
};


module.exports = getDeviceById