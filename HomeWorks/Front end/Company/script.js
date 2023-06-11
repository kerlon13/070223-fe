const company1 = {
    name:"Qatar Air Ways",
    shortName:"Qatar Air",
    airBusAmout:8
};

const company2 = {
    name:"Lufthansa Germany",
    shortName:"Lufthansa",
    airBusAmout:7
};

const company3 = {
    name:"London Air Lines",
    shortName:"London AirComp",
    airBusAmout:3,
    passenger(passsengerName){
        return `${passsenger} использовал компанию ${this.name}, и у него место ${this.shortName} ${this.airBusAmout}`;
    }
};

result = company3.passenger("Dmitriy");
console.log(result);