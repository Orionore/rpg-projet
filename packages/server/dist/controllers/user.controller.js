"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getUsers = void 0;
const utils_1 = require("../utils");
const getUsers = async (request, response) => {
    try {
        utils_1.logger.info("[GET] /users - Récupérer tout les utilisateurs");
        (0, utils_1.APIResponse)(response, [], "List of all users", 200);
    }
    catch (error) {
        utils_1.logger.error(`Erreur lors de la récupération des utilisateurs: ${error.message}`);
        (0, utils_1.APIResponse)(response, null, error.message, 500);
    }
};
exports.getUsers = getUsers;
const getUser = async (request, response) => {
    const { id } = request.params;
    if (id) {
        (0, utils_1.APIResponse)(response, { id }, "User found");
    }
    else {
        (0, utils_1.APIResponse)(response, null, "User not found", 404);
    }
};
exports.getUser = getUser;
