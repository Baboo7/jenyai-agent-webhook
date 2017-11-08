'use strict';

const axios = require('axios');

/*  Retrieve description from wikipedia.

  PARAM
    interaction (object): contains main information from the agent
      parameters (object): must contain the properties
        any (string): thing to get the description

  RETURN
    Promise
*/
const wikipedia = interaction => {

  return new Promise((resolve, reject) => {

    // Check for parameters
    if (!interaction.parameters.any) return;

    let any = interaction.parameters.any

    let url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${any}&limit=1&namespace=0&format=json`;

    axios.get(url)
    .then(data => {
      // #####
      console.log(data);
      resolve();
    })
    .catch(err => {
      reject(err);
    });
  });
};

module.exports = wikipedia;
