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
    .then(res => {

      let followupEvent = interaction.followupEvent;
      let beutifyAny = res.data[1][0];
      let description = res.data[2][0];

      if(!description ||
        /may refer to:/.test(description)) {
        followupEvent.name = 'smalltalk_do_you_know_who_is-descr_not_found';
        followupEvent.data.any = any;
      } else {
        followupEvent.name = 'smalltalk_do_you_know_who_is-descr_found';
        followupEvent.data.any = beutifyAny;
        followupEvent.data.description = description;
      }

      resolve();
    })
    .catch(err => {
      reject(err);
    });
  });
};

module.exports = wikipedia;
