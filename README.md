# Portfolio Mini-Project
---
![Portfolio Project](https://hrmcdn-13a1c.kxcdn.com/images/hr-sg/content-images/priya-june-2020-patrick-tay-work-from-home-lead-istock.jpg)
---

### Project Summary of REST/CRUD/MVC:

I made a very simple portfolio application to display my Unit 1 Project Card Battle Game and some of my other side projects. The portfolio application uses a RESTful API design by combining a MongoDB Atlas database with route paths and HTTP verbs that control the interaction between my presentational view templates and functional database. 

The 7 RESTful routes located in my controllers directory handle all the CRUD operations for making changes to my MongoDB collection of "project" objects. They're rendered on an an index page using JSX templates with links to their individual show pages. There're also routes to create, delete, or edit a portfolio project. 

My presentational and functional resources are also organized according to the "Model-View-Controller" architectural design pattern. This seperates my application into three main logical components that are responsible for seperate tasks. My views folder handles the visual resources that are presented to a client using my website, my models folder creates the schema for my "project" documents, and my controllers folder contains my RESTful API routes and acts at the glue that brings everything together.

### Wireframe:


![Link](https://res.cloudinary.com/mtruong/image/upload/v1607552959/Project_2_Portfolio_Wireframe-Home_gosevq.png)


### Technologies Used:

- RESTful API design
- Heroku 
- MongoDB Atlas
- Mongoose 
- React-Bootstrap
- Node and Express

## Lessons/Ongoing Issues:

### Improving the quality of my CSS styling
- I have realized that my CSS styling isn't very good. I'm not very confident in my front-end design when using CSS. 
- There are a million ways of styling things and a million ways to break those styles in CSS, and it's hard for me to keep a mental map of all the different CSS properties that affect how different elements are displayed on a page.
- I will try to work on improving my CSS styling skills in the future.