
export function globalSetup() {
    var environmentName = process.env["SDLC"] || "local";
    var environment = require("../environment/environment_".concat(environmentName))["default"];
    return environment;
}
