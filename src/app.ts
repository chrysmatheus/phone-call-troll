import "dotenv/config";
import * as totalVoice from 'totalvoice-node';

const client = new totalVoice(process.env.CLIENT_KEY);

const message = process.env.MESSAGE;

const options = {
    velocidade: 2,
    tipo_voz: "br-Camila",
    resposta_usuario: true,
};

client.tts.enviar(
    process.env.PHONE_NUMBER,
    message,
    options
)
.then((response) => {
    console.log('----call made successfully----');
    console.log('response: ', response);
})
.catch((error) => {
    console.log('error: ', error);
});