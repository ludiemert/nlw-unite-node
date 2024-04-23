<h1 align="center"> 💻 NLW-unite-pass.in-Node.js</h1>
<h3>Project developed in Rocketseat's NLW Unite Node.js Track.</h3>

### Node.js
About the project:

- pass.in is an application for managing participants at face-to-face events.

- The tool allows the organizer to register an event and open a public registration page.

 - Registered participants can issue a credential for check-in on the day of the event.

 - The system will scan the participant's credential to allow entry to the event.
 - The project also included the integration of a backend developed in the NodeJS track.


## Functional requirements
 The organizer must be able to register a new event;
 The organizer must be able to view event data;
 The organizer must be able to view the list of participants;
 The participant must be able to register for an event;
 The participant must be able to view their registration badge;
 The participant must be able to check-in at the event;

##  Business rules
 The participant can only register for an event once;
 The participant can only register for events with available places;
 The attendee can only check-in to an event once;
 
## Non-functional requirements
 Check-in at the event will be done via a QRCode;

 API documentation (Swagger)
For API documentation, go to: https://nlw-unite-nodejs.onrender.com/docs

## Database
In this application we will use a relational database (SQL). For the development environment, we will use SQLite because of its ease of use.


 ## Diagrama ERD

 
---
<h2 align="center"> 💻 Project Diagrama ERD </h2>
<div align="center">
 <img src="./src/assets/erd.svg" width="400px" alt="Home Image"/>
</div>



##  Database structure (SQL)

```

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "details" TEXT,
    "slug" TEXT NOT NULL,
    "maximum_attendees" INTEGER
);

-- CreateTable
CREATE TABLE "attendees" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "attendees_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "check_ins" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "attendeeId" INTEGER NOT NULL,
    CONSTRAINT "check_ins_attendeeId_fkey" FOREIGN KEY ("attendeeId") REFERENCES "attendees" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "events_slug_key" ON "events"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "attendees_event_id_email_key" ON "attendees"("event_id", "email");

-- CreateIndex
CREATE UNIQUE INDEX "check_ins_attendeeId_key" ON "check_ins"("attendeeId");

```


##  Technologies used:
- Node.js
- Fastify
- Typescript
- Prisma
- SQLite



## Layout 🎨
Veja aqui os detalhes do projeto no [Figma](https://www.figma.com/file/HE0J9JzhUpJJ7W31dr5hVZ/pass.in-(Community)?type=design&node-id=2007-1477&mode=design&t=UYtvwoASlK6RjWZv-0)


 #### Start Back-End: PS C: npm run dev
     http://localhost:3333/
     
  #### Start Prisma: npx prisma studio
    http://localhost:5555


---
<h2 align="center"> 💻 Project Home Page</h2>
<div align="center">
 <img src="./src/assets/1 - Pass-in-Web - Pag_One.png" width="400px" alt="Home Image"/>
</div>

<h2 align="center"> 🤩 URL State - Page</h2>
<div align="center">
  <img src="./src/assets/2 - URL - State.png" width="400px" alt="Home Image"/>
</div>

<h2 align="center"> 🤩 earch - URL State - Page</h2>
<div align="center">
 <img src="./src/assets/3 - Search - URL State.png" width="400px" alt="Home Image"/>
</div>

---
#### How to run
- Before initializing the project, it is necessary to install:
- [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)

- After installation, you need to run:
- [repositório front-end da aplicação](https://github.com/ludiemert/nlw-unite-react)</br>

- Then clone this repository:
```
https://github.com/ludiemert/nlw-unite-node.git
```

- Access the application directory:
```
cd pass-in
```

- Install the dependencies:
```
npm install
```

- Run the application:
```
npm run dev
```
---



#### 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---


#### ✒️ Authors

 * ** #Rocketseat **

- #### My LinkedIn - [![Linkedin Badge](https://img.shields.io/badge/-LucianaDiemert-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lucianadiemert/)](https://www.linkedin.com/in/lucianadiemert/)

#### Contact

<img align="left" src="https://www.github.com/ludiemert.png?size=150">

#### [**Luciana Diemert**](https://github.com/ludiemert)

🛠 `Front-end` `Back-end`Developer Jr. <br>
📍 São Jose dos Campos – SP - Brazil

<a href="https://www.linkedin.com/in/lucianadiemert" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn Badge" height="25"></a>&nbsp;
<a href="mailto:lucianadiemert@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white" alt="Gmail Badge" height="25"></a>&nbsp;
<a href="#"><img src="https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white" title="LuDiem#0654" alt="Discord Badge" height="25"></a>&nbsp;
<a href="https://www.github.com/ludiemert" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white" alt="GitHub Badge" height="25"></a>&nbsp;

<br clear="left"/>
