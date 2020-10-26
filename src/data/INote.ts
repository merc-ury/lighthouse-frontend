export interface INote {
    data:    INoteData[];
    success: boolean;
    message: null;
}

export interface INoteData {
    userId: number;
    noteId: number;
    title: string;
    content: string;
    priority: number;
    category: number;
    createdOn: Date;
}
