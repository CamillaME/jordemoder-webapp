export class Profile {
    UserID: string;
    StudentNumber: number;
    FirstName: string;
    MiddelName: string;
    LastName: string;
    Street: string;
    City: string;
    Zip: number;
    PhoneNumber: string;
    Email: string;
    ImagePath: string;
    Term: string

    constructor(userID: string, studentNumber: number, firstName: string, middleName: string,
        lastName: string, street: string, city: string, zip: number, phoneNumber: string, email: string,
        imagePath: string, term: string) {
        this.UserID = userID;
        this.StudentNumber = studentNumber;
        this.FirstName = firstName;
        this.MiddelName = middleName;
        this.LastName = lastName;
        this.Street = street;
        this.City = city;
        this.Zip = zip;
        this.PhoneNumber = phoneNumber;
        this.Email = email;
        this.ImagePath = imagePath;
        this.Term = term;
    }
}