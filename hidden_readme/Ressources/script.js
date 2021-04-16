const axios = require('axios');
const URL = "http://IP/.hidden/"
var JSSoup = require('jssoup').default;

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const readFiles = async (url) => {
    try {
        const response = await axios.get(url);
        const html = response.data;
        var soup = new JSSoup(html);
        var tags = soup.findAll('a');
        for (var i = 0; i < tags.length; i++) {
            await sleep(800)
            const link = tags[i].attrs.href;
            if (link == 'README') {
                const res = await axios.get(url + link);
                const content = res.data
                if(!content.startsWith('T') && !content.startsWith('D') && !content.startsWith('N'))
                    console.log('url: '+ url+link, 'content: ' + res.data)
            }
            else if (link === '../');
            else {
                readFiles(url + link)
            }
        }
    }
    catch (e) {
        console.log(e)
    }

}

readFiles(URL)