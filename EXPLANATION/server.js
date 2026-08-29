const userMap = new Map([
    ["user1", "ritam"],
    ["user2", "pavan"]
]);

(function middleware(userName = "ritam") {
    const isValid = [...userMap.values()].includes(userName);
    if (!isValid) {
        console.log('invalid user');
        return;
    }
    console.log('valid user'); // <-- now this runs correctly
})();

