const request = require('request-promise-native');

const API_URL = process.env.API_LOCATION + '/stuff';

const options = {
    uri: API_URL,
    json: true
};

function getStuff() {
    return request(options)
            .catch(`Failed to fetch stuff from ${API_URL}`)
}

module.exports = {
  getStuff
};
