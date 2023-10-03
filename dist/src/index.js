"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrator = void 0;
const student_1 = require("./courses/student");
class Worker {
    constructor(username) {
        this.username = username;
    }
    getUsername() {
        return this.username;
    }
    login() {
        console.log('I\'m doing Worker login stuff');
    }
}
class Administrator {
    constructor(username) {
        this.username = username;
    }
    getUsername() {
        return "admin" + this.username;
    }
    login() {
        console.log('I\'m doing Admin login stuff');
    }
    changePassword(user, nextUsername) {
        user.username = nextUsername;
    }
}
exports.Administrator = Administrator;
// Adapter
class StudentAdapter {
    constructor(Student) {
        this.Student = Student;
    }
    getUsername() {
        return this.Student.getFullName();
    }
    login() {
        console.log('I\'m a student');
    }
}
const john = new student_1.Student("john", "doe");
const users = [
    new Worker("abc123"),
    new Worker("vzdadz"),
    new Administrator("admin123"),
    new StudentAdapter(john),
];
users.forEach((user) => {
    user.login();
});
//# sourceMappingURL=index.js.map