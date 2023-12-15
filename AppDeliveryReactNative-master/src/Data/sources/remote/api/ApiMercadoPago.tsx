import axios from 'axios';

const ApiMercadoPago = axios.create({
    baseURL: 'https://api.mercadopago.com/v1',
    headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer TEST-2517611372218744-071006-d103c7e58077e542c572a8bfde66ab50-1252780063'
    }
})

export { ApiMercadoPago }