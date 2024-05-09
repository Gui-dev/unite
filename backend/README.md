# Pass in

## ✨ Technologies used

- [Node.js](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev/)
- [Prisma](https://www.prisma.io/)
- [Zod](https://zod.dev/)

### Request

<p>Event</p>
<span>Create event</span>

```bash
POST /events
```

```bash
{
  "title": "Título de Teste",
  "details": "Esse evento é só para um participante 😂",
  "maximum_attendees": 1
}
```

<span>Create attendee</span>

```bash
POST /events/:event_id/attendees
```

```bash
{
  "name": "Bruce Wayne",
  "email": "bruce@email.com"
}
```

<span>Find Event By Id</span>

```bash
GET //events/:event_id
```

<span>Get Data Attendee</span>

```bash
GET /attendees/:attendee_id/badge
```

<span>Get attendee check in</span>

```bash
GET /attendees/5/check-in
```

<span>Get all Attendees from event</span>

```bash
GET /events/:event_id/attendees
```

<span>Find attendee</span>

```bash
GET /events/:event_id/attendees?query=bruce
```

## Install dependencies

```bash
npm ci
```

## Prisma Seed

```bash
npm run prisma
```

## Prisma Migrate

```bash
npm run db:migrate
```

## Prisma Studio

```bash
npm run db:studio
```

## Run app

```bash
npm run dev
```

## Licença

Este projeto está licenciado sob a licença MIT.
