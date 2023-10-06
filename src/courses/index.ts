import { Student } from './student';
import { UnionPublisher, Subscriber } from './unionNewspaper';

interface User {
    username: string;
    getUsername(): string;
    login(): void;
}

class Worker implements User{
    username: string;

    constructor(username){
        this.username = username;
    }
    getUsername(){
        return this.username;
    }
    login(){
        console.log('I\'m doing Worker login stuff');
    }
}

export class Administrator implements User{
    username: string;

    constructor(username){
        this.username = username;
    }
    getUsername(){
        return "admin" + this.username;
    }
    login(){
        console.log('I\'m doing Admin login stuff');
    }
    changePassword(user: User, nextUsername: string){
        user.username = nextUsername;
    }
}

// Adapter
class StudentAdapter implements User{
    username: string;
    Student: Student;

    constructor(Student: Student){
        this.Student = Student;
    }

    getUsername(): string{
        return this.Student.getFullName();
    }

    login(): void{
        console.log('I\'m a student');
    }
}

const john = new Student("john", "doe");

const users: User[] = [
    new Worker("abc123"), 
    new Worker("vzdadz"), 
    new Administrator("dzdadaz"), 
    new StudentAdapter(john),
];

users.forEach((user) => {
    user.login();
});