var sha256 = require("js-sha256");

function hash256(data) {
  return sha256(data);
}

module.exports = {
  hash256,
};
