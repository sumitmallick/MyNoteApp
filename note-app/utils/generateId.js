const { randonUUID } = require('crypto');

const generateId = () => randonUUID();

module.exports = generateId;