"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePhotos = exports.deletePost = exports.deleteUser = exports.patchPhotos = exports.patchPost = exports.patchUser = exports.getUserPosts = exports.getUserPhotos = exports.getUsers = void 0;
const isomorphic_unfetch_1 = __importDefault(require("isomorphic-unfetch"));
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield isomorphic_unfetch_1.default('https://jsonplaceholder.typicode.com/users');
        const json = yield response.json();
        req.typeResponse = 200;
        req.json = json;
    }
    catch (error) {
        req.typeResponse = 500;
        req.error = error;
    }
    next();
});
exports.getUsers = getUsers;
const getUserPhotos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield isomorphic_unfetch_1.default(`https://jsonplaceholder.typicode.com/photos/${req.params.id}`);
        const json = yield response.json();
        if (response.status === 200) {
            req.typeResponse = 200;
            req.json = json;
        }
        else {
            req.typeResponse = 400;
            req.message = 'Fotos del usuario no encontradas';
        }
    }
    catch (error) {
        req.typeResponse = 500;
        req.error = error;
    }
    next();
});
exports.getUserPhotos = getUserPhotos;
const getUserPosts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield isomorphic_unfetch_1.default(`https://jsonplaceholder.typicode.com/posts`);
        const json = yield response.json();
        req.typeResponse = 200;
        req.json = json;
    }
    catch (error) {
        req.typeResponse = 500;
        req.error = error;
    }
    next();
});
exports.getUserPosts = getUserPosts;
const patchUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield isomorphic_unfetch_1.default(`https://jsonplaceholder.typicode.com/users/${req.params.id}`, {
            method: 'PATCH',
            body: JSON.stringify(req.body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response.status === 200) {
            req.typeResponse = 200;
            req.message = 'Usuario actualizado correctamente';
        }
        else {
            req.typeResponse = 400;
            req.message = 'Usuario no encontrado';
        }
    }
    catch (error) {
        req.typeResponse = 500;
        req.error = error;
    }
    next();
});
exports.patchUser = patchUser;
const patchPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield isomorphic_unfetch_1.default(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, {
            method: 'PATCH',
            body: JSON.stringify(req.body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response.status === 200) {
            req.typeResponse = 400;
            req.message = 'Publicación actualizado correctamente';
        }
        else {
            req.typeResponse = 400;
            req.message = 'Publicación no encontrada';
        }
    }
    catch (error) {
        req.typeResponse = 500;
        req.error = error;
    }
    next();
});
exports.patchPost = patchPost;
const patchPhotos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield isomorphic_unfetch_1.default(`https://jsonplaceholder.typicode.com/photos/${req.params.id}`, {
            method: 'PATCH',
            body: JSON.stringify(req.body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response.status === 200) {
            req.typeResponse = 400;
            req.message = 'Fotos actualizadas correctamente';
        }
        else {
            req.typeResponse = 400;
            req.message = 'Fotos del usuario no encontradas';
        }
    }
    catch (error) {
        req.typeResponse = 500;
        req.error = error;
    }
    next();
});
exports.patchPhotos = patchPhotos;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield isomorphic_unfetch_1.default(`https://jsonplaceholder.typicode.com/users/${req.params.id}`, {
            method: 'DELETE',
            body: JSON.stringify(req.body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response.status === 200) {
            req.typeResponse = 400;
            req.message = 'Usuario eliminado correctamente';
        }
        else {
            req.typeResponse = 400;
            req.message = 'Usuario no encontrado';
        }
    }
    catch (error) {
        req.typeResponse = 500;
        req.error = error;
    }
    next();
});
exports.deleteUser = deleteUser;
const deletePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield isomorphic_unfetch_1.default(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, {
            method: 'DELETE',
            body: JSON.stringify(req.body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response.status === 200) {
            req.typeResponse = 400;
            req.message = 'Publicaciones eliminadas correctamente';
        }
        else {
            req.typeResponse = 400;
            req.message = 'Publicaciones de usuario no encontradas';
        }
    }
    catch (error) {
        req.typeResponse = 500;
        req.error = error;
    }
    next();
});
exports.deletePost = deletePost;
const deletePhotos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield isomorphic_unfetch_1.default(`https://jsonplaceholder.typicode.com/photos/${req.params.id}`, {
            method: 'DELETE',
            body: JSON.stringify(req.body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response.status === 200) {
            req.typeResponse = 400;
            req.message = 'Fotos de usuario eliminadas correctamente';
        }
        else {
            req.typeResponse = 400;
            req.message = 'Fotos de usuario no encontradas';
        }
    }
    catch (error) {
        req.typeResponse = 500;
        req.error = error;
    }
    next();
});
exports.deletePhotos = deletePhotos;
