import { ServerError, ServiceImplementation, Status } from 'nice-grpc';
import { createServer } from 'nice-grpc';
import { DeepPartial, GreeterDefinition, HelloReply, HelloRequest } from '../target/greeter';

class greeterImpl implements ServiceImplementation<typeof GreeterDefinition> {
    async sayHello(request: HelloRequest): Promise<DeepPartial<HelloReply>> {
        if (!request.name) {
            throw new ServerError(Status.NOT_FOUND, 'Requested data does not exist');
        }
        return {
            message: `Hello, ${request.name}`,
        }
    }
}

const server = createServer();

server.add(GreeterDefinition, new greeterImpl());

(async function () {
    await server.listen('0.0.0.0:8080');
    console.log("server start success");
})()
