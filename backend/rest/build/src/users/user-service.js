"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    get(id, name) {
        return {
            id,
            email: 'jane@doe.com',
            name: name !== null && name !== void 0 ? name : 'Jane Doe',
            status: 'Happy',
            phoneNumbers: []
        };
    }
    create(params) {
        return Object.assign({ id: 1, status: 'Happy' }, params);
    }
}
exports.UserService = UserService;
