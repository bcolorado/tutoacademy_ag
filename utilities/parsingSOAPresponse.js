
export function parseSoapResponse(data){

    const xml2js = require('xml2js');

    console.log(`data received: ${data}`)

    const parser = new xml2js.Parser({ explicitArray: false });

    var my_json = "not defined"
    
    parser.parseString(data, (err, result) => {
    if (err) {
        console.error('Error al parsear el XML:', err);
        return;
    }

    
    
    const parameters = result['soap:Envelope']['soap:Body']['tns:GetPostsResponse']['tns:parameters']['tns:parameters'];

    
    const parametersArray = Array.isArray(parameters) ? parameters : [parameters];

    
    const products = parametersArray.map((param) => ({
        title: param.Title,
        price: parseInt(param.Price),
        image: param.Image,
        units: parseInt(param.Units),
    }));

     my_json = products
    });

    return my_json
}