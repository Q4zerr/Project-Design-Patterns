"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
    doStudentStuff() {
        console.log("i\'m learning");
    }
}
exports.Student = Student;
//# sourceMappingURL=student.js.map