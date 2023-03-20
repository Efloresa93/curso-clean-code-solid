 (() => {

    // Principio de responsabilidad única
    type Gender = 'M'|'F';

    interface PersonProps {
        name:string; 
        gender: Gender; 
        birthdate:Date;
    }

    class Person {

        public name:string;
        public gender: Gender; 
        public birthdate:Date;

        constructor({name, gender, birthdate}: PersonProps){
            this.name = name;
            this.gender = gender; 
            this.birthdate = birthdate; 
        }
    }

    // const newPerson = new Person('Exequiel', 'M', new Date());
    // console.log(newPerson);

    interface UserProps {
        name:string; 
        gender: Gender; 
        birthdate:Date;
        email:string;
        role: string;
    }

    class User extends Person {

        public email:string;
        public role: string;      
        constructor({ 
                name, 
                gender, 
                birthdate,
                email, 
                role }: UserProps){
            super({name, gender, birthdate});
            this.email = email;
            this.role = role; 
        }

        checkCredentials(){
            return true;
        }

    }

    interface USerSettingsProps {
            workingDirectory: string,
            lastOpenFolder: string,
            email:string,
            role: string,
            name:string, 
            gender: Gender, 
            birthdate:Date    
    }

    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor(
            {workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender, 
            birthdate} : USerSettingsProps) {
            super({email, role, name, gender, birthdate});

            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;

        }
    }

    // const newUser = new User();

 })()