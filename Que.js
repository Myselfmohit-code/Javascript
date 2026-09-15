export function getTicketPrice(age, isWeekend) {

    if (typeof age !== 'number' || age < 0) {
        throw new Error('Invalid age');
    }

    if (typeof isWeekend !== 'boolean') {
        throw new Error('Invalid isWeekend value');
    }

    let price;

    if (age < 13) {
        price = 8;
    } 

    else if (age >= 13 && age <= 17) {
        price = 12;
    } 

    else if (age >= 18 && age <= 59) {
        price = 15;
    } 

    else {
        price = 10;
    
    }

    
    if (isWeekend) {
        price += 5;
    }

    return price;
}
