import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function getAttendeeBadge(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/attendees/:attendeeId/badge",
    {
      schema: {
        params: z.object({ 
          attendeeId: z.coerce.number().int()
         }),
        //tipagem
        response: {
          200: z.object({
            badge: z.object({
              name: z.string(),
              email: z.string(),
              eventTitle: z.string(),
              checkInURL: z.string().url(),
            })
          })
        },
      },
    },
    async (request, reply) => {
      const { attendeeId } = request.params;

      const attendee = await prisma.attendee.findUnique({
        select: {
          name: true,
          email: true,
          event: {
            select: {
              title: true,
            },
          },
        },
        where: {
          id: attendeeId,
        },
      });
      if (attendee === null) {
        throw new Error("Attendee not found.. 🧐");
      }

      //console.log(request.url)
      //console.log(request.hostname)

      const baseURL = `${request.protocol}://${request.hostname}`;
      //console.log(baseURL)

      //checkInURL do backend badge (Cracha)
      const checkInURL = new URL(`/attendees/${attendeeId}/check-in`, baseURL);

      //tipagem TS
      return reply.send({
        badge: {
          name: attendee.name,
          email: attendee.email,
          eventTitle: attendee.event.title,
          checkInURL: checkInURL.toString(),
        },
      });
    }
  );
}
