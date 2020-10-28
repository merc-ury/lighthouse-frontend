export interface INote {
    data:    INoteData | INoteData[];
    success: boolean;
    message: null;
}

export interface INoteData {
    userID: number;
    noteID: number;
    title: string;
    content: string;
    priority: number;
    category: number;
    createdOn: Date;
}
