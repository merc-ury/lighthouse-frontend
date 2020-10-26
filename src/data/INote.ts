export interface INote {
    data:    Data[];
    success: boolean;
    message: null;
}

export interface Data {
    userID:    number;
    noteID:    number;
    title:     string;
    content:   string;
    priority:  number;
    category:  number;
    createdOn: Date;
}
