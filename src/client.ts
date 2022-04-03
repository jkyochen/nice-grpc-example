import { createChannel, createClient, Client } from 'nice-grpc';
import { GreeterDefinition } from '../target/greeter';

const channel = createChannel('localhost:8080');

const client: Client<typeof GreeterDefinition> = createClient(
    GreeterDefinition,
    channel,
);

(async function () {
    const response1 = await client.sayHello({ name: "Lan" });
    console.log("response1", response1);

    try {
        const response2 = await client.sayHello({ name: "" });
        console.log("response2", response2);
    } catch (error) {
        console.error("response2 err: ", error.code, error.message);
    }

    channel.close();
})()
