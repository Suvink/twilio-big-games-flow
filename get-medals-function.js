exports.handler = function (context, event, callback) {
    const axios = require('axios');
    const country = event.country.split(" ")[0];
    let resp;

    axios({
        method: 'post',
        url: "https://olympics.suvin.me/medals",
        data: {
            "country": country,
        }
    }).then(function (response) {
        console.log(response.data);
        resp = response.data;
        return callback(null, resp)
    })
        .catch(function (error) {
            console.log(error);
        });
};
