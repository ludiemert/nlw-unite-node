import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { generateSlug } from "../utils/genetate-slug";
import { prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";
import { BadRequest } from "./_errors/bad-request";

export async function createEvent(app: FastifyInstance) {
  //criar uma rota, criar um evento: (POST)
  //title: z.string({ invalid_type_error: 'O titulo precisa ser um texto...'}).min(4),
  app.withTypeProvider<ZodTypeProvider>().post(
    "/events",
    {
      schema: {
        summary: "Create an event",
        tags: ["events"],
        body: z.object({
          title: z.string().min(4),
          details: z.string().nullable(),
          maximumAttendees: z.number().int().positive().nullable(),
        }),
        response: {
          201: z.object({
            eventId: z.string().uuid(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { title, details, maximumAttendees } = request.body;

      const slug = generateSlug(title);

      //verificar se tem algum evento com o mesmo nome (slug)
      const eventWithSameSlug = await prisma.event.findUnique({
        where: {
          slug,
        },
      });

      if (eventWithSameSlug !== null) {
        throw new BadRequest("Another event with same title already exists.");
      }

      //criando evento
      const event = await prisma.event.create({
        data: {
          title,
          details,
          maximumAttendees,
          slug,
        },
      });

      //cria o evento com o codigo 200 ok
      //return { eventId: event.id }

      //resposta de obj criado com sucesso 201 created
      return reply.status(201).send({ eventId: event.id });
    }
  );
}
