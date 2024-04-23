import {
  registerForEvent
} from "./chunk-KMYDNBUS.mjs";
import {
  errorHandler
} from "./chunk-ZGPHZCAS.mjs";
import {
  checkIn
} from "./chunk-JWOWY5RP.mjs";
import {
  createEvent
} from "./chunk-UTBZNUOH.mjs";
import "./chunk-I6MAUO2B.mjs";
import {
  getAttendeeBadge
} from "./chunk-RY77BDYX.mjs";
import {
  getEventAttendees
} from "./chunk-B7JXR7RT.mjs";
import {
  getEvent
} from "./chunk-32OB64E3.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-A2KC6FBC.mjs";
import "./chunk-SWTOKJCE.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler
} from "fastify-type-provider-zod";
import fastifyCors from "@fastify/cors";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especificacoes da API para o back-end pass.in construida no nlw unite da Rocketseat",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("Http server running!!!");
});
export {
  app
};
