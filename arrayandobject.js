let person=[
    {
        name:'sakib',
        id:75,
        position:"all rounder",
    },
    {
    name:'Musfiq',
    id:19,
    position:'batsman',
    achivment:['one iccc cup','one t20','Asia cup'],
    }
    

    ];
    console.log(person[1].achivment[2]);//we print the value secound element of achivement array of person 1.

    
    for(let i=0;i<person[1].achivment.length;i++)
    {
        console.log(person[1].achivment[i]);//we can print the all value of achievment 
    }
   