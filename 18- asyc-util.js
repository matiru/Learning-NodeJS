const { readFile,writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile)

const writeFilePromise = util.promisify(writeFile)






const start = async () => {
    try {

        const first = await readFilePromise('./content/first.txt','utf8');
        const second = await readFilePromise('./content/second.txt','utf8');

        await writeFilePromise('./content/result-mind-grenade.txt',`this is awesome stil :${first} ${second}`)

        const result= await readFilePromise('./content/result-mind-grenade.txt','utf8');
        console.log(first,second)
        console.log(result)
    }
    catch (error) {

        console.log(error)
    }




}
start()

