import { fakerDE as faker } from '@faker-js/faker';

function makeHuman(num) {
    let humans = [];
    while(num!=0){

    
        humans.push({
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            image: faker.image.avatar(),
            company: faker.company.name()
        })
        num--
    }
    humans.forEach(function (humen){
        console.log(humen.firstName+" "+humen.lastName+" , "+humen.image+" , "+humen.company)
    })
}

makeHuman(2)