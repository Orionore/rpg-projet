"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.register = void 0;
const zod_1 = require("zod");
const env_1 = require("../config/env");
const utils_1 = require("../utils");
const users_validation_1 = require("../validation/users.validation");
const { NODE_ENV } = env_1.env;
const register = async (request, response) => {
    try {
        // Validation des données entrantes avec Zod
        const { email, password, username } = users_validation_1.userValidation.parse(request.body);
        return (0, utils_1.APIResponse)(response, null, "Vous êtes inscrit", 200);
    }
    catch (err) {
        // Si l'erreur est lancée par Zod, on informe le client des champs invalides
        if (err instanceof zod_1.z.ZodError) {
            return (0, utils_1.APIResponse)(response, err.errors, "Le formulaire est invalide", 400);
        }
        utils_1.logger.error(`Erreur lors de l'inscription de l'utilisateur: ${err.message}`);
        (0, utils_1.APIResponse)(response, null, "Erreur serveur", 500);
    }
};
exports.register = register;
const login = async (request, response) => {
    try {
        const { email, password } = request.body;
        response.cookie('accessToken', "UnSuperToken", {
            httpOnly: true,
            sameSite: 'strict',
            secure: NODE_ENV === "production"
        });
        (0, utils_1.APIResponse)(response, null, "Vous êtes connecté", 200);
    }
    catch (err) {
        utils_1.logger.error(`Erreur lors de la connexion de l'utilisateur: ${err.message}`);
        (0, utils_1.APIResponse)(response, null, "Erreur serveur", 500);
    }
};
exports.login = login;
const logout = (request, response) => {
    response.clearCookie('accessToken');
    (0, utils_1.APIResponse)(response, null, "Vous êtes déconnecté", 200);
};
exports.logout = logout;
