const { VersionCheck } = require("../../models/utils");

const version = {
      ios:"10001",
      android:"10001"
}
const getVersion = async (request, response, next) => {
      try {
        response.status(200).json(version).end();
      } catch (error) {
        next(error);
      }
    };
    
    module.exports = {getVersion}