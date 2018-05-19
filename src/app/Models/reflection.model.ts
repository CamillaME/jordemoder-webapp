export class Reflection {

    Date: string;
    SheetNumber: number;
    Title: string;
    Teacher: string;
    ReflectionText: string;
    Birth: number;
    ShiftNumber: number;
    Week: number;
    DescriptionOfTheCourseSituation: string;
    JdmAcademicConsiderationsForCareMm: string;
    IndividualGoals: string;
    Literature: string;
    WhatWillIContinueWith: string;
    FullName: string;

    constructor(date: string, reflectionCount: number, title: string, teacher: string, reflection: string,
        birth: number, number: number, week: number, birthDescription: string, considerations: string,
        individualGoals: string, literature: string, continueWith: string, fullName: string) {

        this.Date = date;
        this.SheetNumber = reflectionCount;
        this.Title = title;
        this.Teacher = teacher;
        this.ReflectionText = reflection;
        this.Birth = birth;
        this.ShiftNumber = number;
        this.Week = week;
        this.DescriptionOfTheCourseSituation = birthDescription;
        this.JdmAcademicConsiderationsForCareMm = considerations;
        this.IndividualGoals = individualGoals;
        this.Literature = literature;
        this.WhatWillIContinueWith = continueWith;
        this.FullName = fullName;
    }
}

// export interface Reflection {
//     date: string;
//     reflectionCount: number;
//     title: string;
//     teacher: string;
//     reflection: string;
//     birth: number;
//     number: number;
//     week: number;
//     birthDescription: string;
//     considerations: string;
//     individualGoals: string;
//     literature: string;
//     continueWith: string;
// }