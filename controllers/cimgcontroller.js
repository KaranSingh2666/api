const { Configuration, OpenAIApi } = require("openai");


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  
const createimg = async(req,res) =>{
  const imgsize = req.body.size === 'small' ? "254x254" : req.body.size === 'medium' ? '512x512' : '1024x1024'
try {
  const response = await openai.createImage({
      prompt: req.body.input,
      n:1,
      size:imgsize
    });
    const url =  response.data.data[0]
res.status(200).json(url)  
  
} catch (error) {
  if (error.response) {
    console.log(error.response.status);
    console.log(error.response.data);
  } else {
    console.log(error.message);
  }
}
    
}

module.exports={createimg}