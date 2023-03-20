 (() => {

    // Principio de responsabilidad única
    type Gender = 'M'|'F';

    class Person {
        constructor(
            public name:string, 
            public gender: Gender, 
            public birthdate:Date
        ){}
    }

    const newPerson = new Person('Exequiel', 'M', new Date());
    console.log(newPerson);

    class User extends Person {

        constructor(
            public email:string,
            public role: string,
            private lastAccess: Date,
            public name:string, 
            public gender: Gender, 
            public birthdate:Date
        ){
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }

    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            public email:string,
            public role: string,
            public name:string, 
            public gender: Gender, 
            public birthdate:Date
        ) {
            super(email, role, name, gender, birthdate)
        }
    }

    // const newUser = new User();

 })()