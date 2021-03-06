const cheerio = require('cheerio');
const axios = require('axios');
const URL = "http://10.12.100.44/.hidden/"


const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const readFiles = async (url) => {
    try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);

        const linkObjects = $('a');

        linkObjects.each(async (i, e) => {
            await sleep(800)
            try {
                const link = $(e).attr('href')
                if (link == 'README') {
                    const res = await axios.get(url + link);
                    const content = res.data
                    //console.log({ url: url + link, content: res.data })
                    if(!content.startsWith('T') && !content.startsWith('D') && !content.startsWith('N'))
                        console.log({ url: url + link, content: res.data })
                }
                else if (link === '../');
                else {
                    readFiles(url + link)
                }
            }
            catch (e) {console.log(e)}
        })
    }
    catch (err) {console.log(err)}

}

readFiles(URL)