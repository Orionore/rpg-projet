"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
exports.userValidation = zod_1.z.object({
    username: zod_1.z.string().min(1, { message: 'Name is required' }),
    password: zod_1.z.string()
        .min(6, { message: 'Password must be at least 6 characters' })
        .regex(/[0-9]/, { message: 'Password must contain at least 1 number' })
        .regex(/[!@#$%^&*()_+,?";:{}|<>\-]/, { message: 'Password must contain at least 1 special characters' }),
    email: zod_1.z.string()
        .email({ message: 'Email address must be a valid email address' })
});
