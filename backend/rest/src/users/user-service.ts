import { User } from './user';

export type UserCreationParams = Pick<User, 'email' | 'name' | 'phoneNumbers'>;

export class UserService {
    public get(id: number, name?: string): User {
        return {
            id,
            email: 'jane@doe.com',
            name: name ?? 'Jane Doe',
            status: 'Happy',
            phoneNumbers: []
        }
    }

    public create(params: UserCreationParams): User {
        return {
            id: 1,
            status: 'Happy',
            ...params
        }
    }
}