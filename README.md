# <p align = "center"> Sing me a song </p>

<p align="center">
   <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f399-fe0f.svg" style="width:40%;"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Mateus Gueler-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/MatGueler/projeto21-singmeasong-front-end?color=4dae71&style=flat-square" />
</p>

## :clipboard: Description

Have you ever asked anyone for a song recommendation? It's time to turn this into code. This is a project that will help you share your favorite videos! In addition to your friends not getting out of date in conversations, many people will be able to take advantage of your recommendation.

Sing me a song is an application for anonymous song recommendation. The more people like a recommendation, the more likely it is to be recommended to others.

---

## <br/>

## 🏁 Running the application

The project has some essential dependencies that require the latest stable version of [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/). So make sure your version running locally is compatible.

First, clone this repository on your machine:

```
git clone https://github.com/MatGueler/projeto21-singmeasong-front-end
```

Then, inside the folder, run the following command to install the dependencies.

```
npm install
```

Finished the process, just start the react app

```
npm start
```

---

## :hammer: Testing the application

The tests were carried out on the front-end and abck end of this project. Addressing unit testing, integration testing, and end-to-end testing.

<br/>

### **Back-end**

To initialize the backend follow the steps described in the following link: [back-end repository](https://github.com/MatGueler/projeto21-singmeasong-back-end)

<br/>

### **Front-end**

In this project, CYPRESS was also used as a front-end test structure, for that, execute the command below to start the automatic tests. It is important to note that to test the front-end it is necessary to have the back-end server running and react initialized. The following commands are for starting end-to-end testing.

- #### e2e (END-TO-END)

In the back folder, run the command below to start the server is required (Following steps in [back-end repository](https://github.com/MatGueler/projeto21-singmeasong-back-end)).

In other command terminal run the comamand bellow to open cypress.

```
npx cypress open
```

Choose E2E testing type, and also choose your preferred browser for E2E testing (preferably electron).
