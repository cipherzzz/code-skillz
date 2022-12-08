import { Body, Controller, Get, Path, Post, Query, Route, SuccessResponse } from 'tsoa';

import { User } from './user';
import { UserService, UserCreationParams } from './user-service';

@Route('users')
export class UserController extends Controller {
    @Get('{id}')
    public async getUser(@Path() id: number, @Query() name?: string): Promise<User> {
        return new UserService().get(id, name);
    }

    @SuccessResponse('201', 'Created') // Custom success response
    @Post()
    public async createUser(@Body() requestBody: UserCreationParams): Promise<User> {
        const createdUser = new UserService().create(requestBody);

        this.setStatus(201); // set return status 201

        return createdUser;
    }
}