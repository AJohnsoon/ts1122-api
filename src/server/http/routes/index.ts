import { Server } from '@hapi/hapi';

export const routes = (server: Server) => {
	server.route({
		method: 'GET',
		path: '/health',
		handler: function (request, h) {
			const data = { message: 'Health OK !', statusCode: 200 };
			console.log(data);
			return data;
		},
	});
};
