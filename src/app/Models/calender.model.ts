export class Calendar {
    Date: string;
    WorkHours: string;
    Shift: string;
    ID: string;
    UserID: string;

    constructor(date: string, workHours: string, shift: string, id: string, userID: string) {
        this.Date = date;
        this.WorkHours = workHours;
        this.Shift = shift;
        this.ID = id;
        this.UserID = userID;
    }
}