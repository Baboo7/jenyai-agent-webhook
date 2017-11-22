'use strict';

const axios = require('axios');

/*  Retrieve description from wikipedia.

  PARAM
    interaction (object): see Interaction class
      parameters (object): must contain the properties
        person (string): person to get the description

  RETURN
    Promise
*/
const wikipedia = interaction => {

  return new Promise((resolve, reject) => {

    // Check for parameters
    let person = interaction.getParameter('person');
    if (!person) {
      interaction.setFollowupEvent('fallback');
      resolve();
      return;
    }

    let url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${person}&limit=1&namespace=0&format=json`;

    axios.get(url)
    .then(res => {

      let beutifyPerson = res.data[1][0];
      let description = res.data[2][0];

      if(!description ||
        /may refer to:/.test(description)) {

          let data = {
            person: person
          };

          interaction.setFollowupEvent('smalltalk_do_you_know_who_is-descr_not_found', data);
      } else {

        let data = {
          person: beutifyPerson,
          description: description
        };

        interaction.setFollowupEvent('smalltalk_do_you_know_who_is-descr_found', data);
      }

      resolve();
    })
    .catch(err => {
      reject(err);
    });
  });
};

module.exports = wikipedia;
