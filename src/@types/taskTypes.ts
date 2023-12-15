export enum Task_Type_Enum {
    LEARN = "სწავლა",
    WORK = "მუშაობა",
}

export interface TTask {
    id: string;
    description: string;
    type: Task_Type_Enum;
}