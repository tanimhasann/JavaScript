let identity={
    name:'Tanim',
    roll:119,
    section:'Apple',
    address:{//multiple object declarer
        city:'Dhaka',
        zill:'shariatpur',
    }
};


identity.address.city='tokeyo';//declare value update from outside
console.log(identity);
console.log(identity.roll);//see the individual value
console.log(identity.address.city);//when we see the value of sub object we must mentioned the main object for see the output

let name={
        name1:'alif',
        name2:'rafi',
    };
    delete name.name1;//delete the declare value from outside;
    console.log(name);

