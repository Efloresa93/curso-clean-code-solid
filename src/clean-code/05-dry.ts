
type Size = ''|'S'|'M'|'XL';

class Product {
    constructor(
        public name: string = '',
        public price:number = 0,
        public size:Size = ''
    ) {}

    isProductReady() : boolean {
        if(this.name.length <= 0) throw Error("Name is empty");
        if(this.price <= 0) throw Error("Price is empty");
        if(this.size.length <= 0) throw Error("Size is empty");

        // for( const key in this ) {
        //     switch(typeof this[key]) {
        //         case 'string':
        //             if( this[key] )
        //     }
        // }

        return true;
    }

    toString() {

        if(!this.isProductReady) return;

        return `${this.name} (${this.price}), ${this.size}`; 
        
    }

}

(() => {

    const bluePants = new Product('Blue Large pants');
    bluePants.toString();
    
})();