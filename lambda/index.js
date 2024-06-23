const Alexa = require('ask-sdk-core');
const axios = require('axios');

const API_KEY = '';
const CANT_RESULTS = 5;

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'FarmaSearch esperando respuesta';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const BuscarFarmaciasHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'BuscarFarmaciasIntent'||Alexa.getIntentName(handlerInput.requestEnvelope) === 'BuscarFarmaciasAbiertasIntent');
    },
    async handle(handlerInput) {
        const ubicacion = handlerInput.requestEnvelope.request.intent.slots.ubicacion.value;

        if (!ubicacion) {
            return handlerInput.responseBuilder
                .speak('Por favor, dime una ubicación para buscar farmacias.')
                .reprompt('Dime una ubicación para buscar farmacias.')
                .getResponse();
        }

        const geocodeUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=geometry&input=${encodeURI(ubicacion)}&inputtype=textquery&key=${API_KEY}`;
        let speakOutput;

        try {
            const geocodeResponse = await axios.get(geocodeUrl);
            if (geocodeResponse.data.candidates.length === 0) {
                speakOutput = 'No pude encontrar la ubicación que mencionaste.';
                
            } else {
                const location = geocodeResponse.data.candidates[0].geometry.location;
                let placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&rankby=distance&keyword=farmacia&key=${API_KEY}`;
                const filtro = Alexa.getIntentName(handlerInput.requestEnvelope);
                if (filtro === 'BuscarFarmaciasAbiertasIntent'){
                    const placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&opennow=true&rankby=distance&keyword=farmacia&key=${API_KEY}`;
                }

                const placesResponse = await axios.get(placesUrl);
                let results = placesResponse.data.results;

                if (results.length === 0) {
                    speakOutput = 'No encontré farmacias cerca de la ubicación proporcionada.';
                } else {
                    // Ordenar las farmacias por distancia
                    const farmacias = results.slice(0, CANT_RESULTS).map((farmacia, index) => {
                        const distancia = calcularDistancia(location.lat, location.lng, farmacia.geometry.location.lat, farmacia.geometry.location.lng);
                        return `${index + 1}. ${farmacia.name}, a ${distancia.toFixed(2)} kilómetros, ubicada en ${farmacia.vicinity}`;
                    });
                    speakOutput = `Las farmacias más cercanas a ${ubicacion} son las siguientes: ${farmacias.join('. ')}.`;
                }
            }
        } catch (error) {
            console.error(error);
            speakOutput = 'Lo siento, no pude obtener la información en este momento.';
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const HelpHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'Puedes decirme "encuentra las farmacias más cercanas a" y el nombre de la ubicación.';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

const CancelAndStopHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && 
               (request.intent.name === 'AMAZON.CancelIntent' || request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Adiós!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
        return handlerInput.responseBuilder.getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);
        const speechText = 'Lo siento, no entendí la instrucción. Por favor intenta de nuevo.';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

function calcularDistancia(lat1, lon1, lat2, lon2) {
    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    const R = 6371; // Radio de la Tierra en kilómetros
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = R * c; // Distancia en kilómetros
    return distancia;
}

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        BuscarFarmaciasHandler,
        HelpHandler,
        CancelAndStopHandler,
        SessionEndedRequestHandler
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();
