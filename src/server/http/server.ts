'use strict';
import Hapi from '@hapi/hapi';
import { routes } from './routes/index';
import '@server/typeorm';
import AppError from '@server/errors/AppError';

const serverPort = 3333;
const serverHost = 'localhost';

export const init = async () => {
	const server = Hapi.server({
		port: serverPort,
		host: serverHost,
	});

	routes(server);
	server.ext('onPreResponse', (request, reply) => {
		if (request.response && 'isBoom' in request.response) {
			return new AppError(`Sorry can't find that!`);
		}
		return reply.continue;
	});
	await server.start();
	console.log(`server is running on port:${serverPort}`);
};
