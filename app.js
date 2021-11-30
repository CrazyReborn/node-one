const fs = require('fs');

const content = 'Some content again';

fs.readFile('test.txt', 'utf8', (data, err) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log(data);
})