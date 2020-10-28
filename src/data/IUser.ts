export interface IUser {
    data:    IUserData | IUserData[];
    success: boolean;
    message: null;
}

export interface IUserData {
    userID: number;
    email: string;
    name: string;
    createdOn: Date;
}
