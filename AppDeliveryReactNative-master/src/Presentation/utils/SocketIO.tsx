import io from 'socket.io-client';

const socket = io('http://192.168.100.20:3000/api/orders/delivery');
export default socket;