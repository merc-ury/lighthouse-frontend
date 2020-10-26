export interface IUser {
    data:    IUserData[];
    success: boolean;
    message: null;
}

export interface IUserData {
    userId: number;
    email: string;
    name: string;
    createdOn?: Date;
}
