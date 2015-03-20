Run the following commands inside the project directory.

npm install

bower install

create config.js in the root folder and insert these lines

module.exports = {
    'port': process.env.PORT || 8080,
    'database': '<--your mongodb connection information-->',
    'secret': '<--any string of values like uubYhhggs556hHVj so your token can be encrypted and decrypted-->'
};