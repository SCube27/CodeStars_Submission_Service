# CodeStars Submission Microservice
- This microservice is a part of the Codestars (Online Judge Project).

### Links to other Project Components:
- ***Microservices:***
    1. <a href="https://github.com/SCube27/CodeStars_Submission_Service">CodeStars Submission Service</a>
    2. <a href="https://github.com/SCube27/CodeStars_Evaluator_Service">CodeStars Evaluator Service</a>

- ***Frontend***
    1. <a href="https://github.com/SCube27/CodeStars_Frontend">CodeStars Frontend</a>

### Tech Stack Used:
- JavaScript
- Node.js
- Fastify
- MongoDB
- Redis (BullMQ)

## Functions of this Microservice:
1. The main objective of this service is to handle multiple submissions from the client side and push them in the *message queue* for the evaluator service to pick the job and evaluate them.

2. Takes the *user code* & *language of the submitted code* from the client and takes the *code stubs* & *test cases* from the problem service to form a submission job and pushes in the queue.

3. Handles submissions from the client side in large numbers and present the evaluation to the users accordingly. 

## Installation & Setup:
1. Clone the repository locally:
```
git clone https://github.com/SCube27/CodeStars_Submission_Service
```

2. Install the dependencies:
```
npm install
```

3. Setup a `.env` file according to the `template.env` given.

4. Start the Server:
```
npm run start
```

**If the project interests you a star to the repository and other associated repositories would be appreciated.**