# Hackiea

Build-your-own Hackathon Idea Generator

This is a website that generates random buzzwords and ideas for hackathon projects. This project is meant to provide absurd or nonsensical project ideas to inspire individuals/teams at a hackathon. The website is made in React and the backend server is mainly developed in express. 

## Getting Started

For running on a local client, we recommend using **Node.JS** along with **nodemon** for testing the backend server. 

### Installation

If cloning the repository for the first time, use npm install in both the /client and /backend directories.

```
npm install
```
#### Frontend Dependencies

* http-proxy-middleware
* react
* react-bootstrap
* react-slot-machine

#### Backend Dependencies

* body-parser
* express
* mongoose 

### Running Locally

To start the website, first setup the backend server by navigating to the directory **/hackiea/backend** and running the following code:

```
npx nodemon
```

In a new terminal, then run the frontend client by navigating to the directory **/hackiea/client** and running the following code:

```
npm start
```

The backend will be running locally through port localhost:5000 and its results can be seen through your terminal running in node.
The frontend (client) will be running locally through port localhost:3000.

## Authors

Aleksandra Dziewulska

Elizabeth Him

Tiffany Lam

Philip Poppler
