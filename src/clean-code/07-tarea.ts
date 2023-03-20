(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    interface HtmlElementProps {
        id: string;
        type: HtmlType;
    }

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        public id: string;
        public type: HtmlType; 
        constructor(
            { id, type }: HtmlElementProps
        ) {
            this.id = id;
            this.type = type;
        }
    }

    interface InputAttributesProps {
        value: string;
        placeholder: string;
    }

    class InputAttributes {

        public value      : string;
        public placeholder: string;

        constructor(
            {value, placeholder}: InputAttributesProps
        ) {
            this.placeholder = placeholder;
            this.value = value;
        }
    }

    interface InputEventsProps {
        value: string; 
        placeholder: string; 
        id: string;
    }

    class InputEvents {
        
        constructor( ) { }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    interface InputProps {
        id: string;
        type: HtmlType;
        placeholder: string;
        value: string;
    }
    
    class InputSettings {

        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents;

        constructor(
            { id, type, placeholder, value }:InputProps
        ){
            this.htmlElement = new HtmlElement({id, type});
            this.inputAttributes = new InputAttributes({value, placeholder});
            this.inputEvents = new InputEvents();
        }

    }

    //? Idea para la nueva clase InputElement

    const nameField = new InputSettings({id: 'txtName', type: "input", value: 'Fernando', placeholder: 'Enter first name'});
    console.log({ nameField });

})()