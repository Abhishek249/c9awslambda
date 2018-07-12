const fetch = require('node-fetch')
exports.handler = async (event) => {
    // TODO implement
    
    let imgurl = await printImage(event.userId);
    return imgurl;
};

async function printImage(useId)
{
  let image = await fetch(`https://catappapi.herokuapp.com/users/${useId}`);
  let parsedjson = await image.json()
  console.log(parsedjson.imageUrl);
}

