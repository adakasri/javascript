// I want to print my roommate names(rajaReddy,Sivaji,srimannarayana)

//steps
//creare local funtion
//print the firstRoommate(raja)
//print the another roommate name(srimannnarayana)
//print the third roommate name
//return roommate names
//receiving returned names and print it

//implementing
function firstRoommateName(firstRoommate) {
    let secondRoommateName = function () {
        const roommate = 'rajareddy';
        console.log('my first roommate name is:', roommate);
        return roommate;
    }
    secondRoommateName();
    let thirdRoomateName = function () {
        const roommateName = 'sivaji';
        console.log('my second Roommate Name:', roommateName);
        return roommateName;
    }
    thirdRoomateName();
    console.log('my third roommate name:', firstRoommate);
    return firstRoommate;
} const name = firstRoommateName('srimannarayana');