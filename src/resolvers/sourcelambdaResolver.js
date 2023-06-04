import { response } from "express";
import { generalRequest, getRequest } from "../../utilities/utilities";
import { URLsourcelambda } from "../server";
import { parseSoapResponse } from "../../utilities/parsingSOAPresponse";

const axios = require("axios");

export const sourcelambdaResolvers = {
  Query: {
    getSourcelambdaProducts: async (_) => {
      try {
        const headers = {
          "Content-Type": "application/soap+xml",
        };

        const soapRequest = `
                  <soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:examples:PostsService" xmlns:pos="http://www.examples.com/wsdl/PostsService.wsdl">
                    <soapenv:Header/>
                    <soapenv:Body>
                      <urn:GetPosts soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
                        <pos:PostsPage>
                          <iPage xsi:type="xsd:int">1</iPage>
                        </pos:PostsPage>
                      </urn:GetPosts>
                    </soapenv:Body>
                  </soapenv:Envelope>
                `;

        const response = await axios.post(URLsourcelambda, soapRequest, { headers });

        console.log("Respuesta del servicio:", response.data);
        console.log(typeof response.data);
        
        const my_json = parseSoapResponse(response.data);

        console.log("my json parsed: "+my_json)

        // THE CODE BELOW WAS USED FOR TESTING THE RESPONSE PARSING
        
        /*
        const products = [
          { title: "Product 1", price: 10, image: "image1.jpg", units: 5 },
          { title: "Product 2", price: 20, image: "image2.jpg", units: 10 },
          { title: "Product 3", price: 30, image: "image3.jpg", units: 8 },
        ]; */

        //console.log("type of products "+typeof products)
        console.log("type of my_json "+typeof my_json)

        return my_json;
      } catch (err) {
        console.error("Error al llamar al servicio:", err);
        console.log("error");
      }
    },
  },
};
