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
        email:string;
        role: string;
    }

    class User  {

        public email:string;
        public role: string;
        private lastAccess: Date;

        constructor({email, role }: UserProps){
            this.email = email;
            this.role = role; 
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }

    }

    interface SettingsProps {
        workingDirectory: string,
        lastOpenFolder: string,    
    }

    class Settings {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({ workingDirectory, lastOpenFolder } : SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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
    
    class UserSetting {

        public person  : Person;
        public user    : User;
        public settings: Settings;

        constructor(
            {
                name, gender, birthdate,
                email, role,
                workingDirectory, lastOpenFolder
            } : USerSettingsProps
        ) {
            this.person = new Person({name, gender, birthdate});
            this.user = new User({email, role});
            this.settings = new Settings({workingDirectory, lastOpenFolder});
        }

    }

    // const newUser = new User();

 })()