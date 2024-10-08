# BookHub

This is my project, which I built during my ReactJS course @ SoftUni academy. Front-end is built with React and back-end is built with ExpressJS and MongoDB. I am also using Sass and BEM convention. 

# Installation

Once you clone / download the repository you you'd see two folders 'client' and 'server'. Front-end is present in 'client' folder and back-end in server folder. To start the application on your end, please follow the below steps:

1. Install dependencies by running `npm install` in both client and server folders. 
3. To start ReactJS run `npm run dev` inside 'client' folder. On success you'd see the following message:

Local:   http://localhost:5173/ <br/>
Network: use --host to expose <br/>
press h + enter to show help <br/>

For front-end to work, please also create a 'constants.js' file inside 'src' folder and add a constant called BASE_URL. <br/>
<br/>
If you keep backend port to 3000, then you can add the following line: <br/>
<br/>
`export const BASE_URL = 'http://localhost:3000`

4. To start back-end, first create a .env file inside 'server' folder. This file needs to include the following environment variables, to which you need to assign values depending on your machine:

`PORT <br/>
MONGO_DB_CONNECTION_STRING <br/>
JWT_SECRET <br/> `

For example:

`PORT=3000 <br/>
MONGO_DB_CONNECTION_STRING=mongodb://localhost:27017/book-hub <br/>
JWT_SECRET=some1Not2Very3Strong4Secret5But6It7is8useD!fOr@deVelopMent$ <br/> `

<br/>
Once this is done, please run `npm start` inside 'server' folder. On success you should see the following:
<br/>
<br/>

DB connected successfully <br/>
Server is listening on port 3000

Please also keep in mind that as I am using MongoDB, in order for backend to run on your machine you need to also have MongoDB installed and you can use MongoDB Compass to easily manage database

## Tech Stack
- Front-end: ReactJS
- Back-end: ExpressJS
- Database: MongoDB

## Front-end Architecture

My React JS app has four core folders:

1. **Components**: in this folder you can find all components which make up the application. Each component is in its own folder.  
2. **Contexts**: in contexts folder I have created authContext which is responsible for setting up persisted state by checking if we have a logged in user. This context can be used by any component via a customer hook called useAuthContext.
3. **Hooks**: in hooks folder I have created custom hooks for each component. 
4. **Services**: in this folder I created apiService, which is a requester, a function that generates and makes API Requests, which can also be used in any component.  

## Key functionalities

- It is a CRUD application which allows users to register and create their own accounts
- Once users sign up, they can add, delete and edit their own books
- Registered users have access to their Profile page where they can see the books they added and liked (if any)
- Registered users also have the option to delete their account if they decide to. This will delete all of the books they added to the website
- Any registered user can like a book that is created by another user. 
- Guests can view the library of books and the likes each book has, but are not able to create, like, edit or delete a book

## Application images

### Home page
![image](https://github.com/user-attachments/assets/127c162b-a0ad-43ef-a744-5ca93656ac80)
![image](https://github.com/user-attachments/assets/736d2235-320a-4bda-9de3-3b1a9cfb1e50)

## Login and Signup pages
![image](https://github.com/user-attachments/assets/0dc7ab98-66aa-4cd8-980c-713a7e5b5bf2)
![image](https://github.com/user-attachments/assets/8dba6b9a-158e-4a8f-a811-8c02cf81bc6e)

## Catalog / Library page
![image](https://github.com/user-attachments/assets/153e49e7-6f78-40f2-97ee-b9ec5640cc06)

## Details page
![image](https://github.com/user-attachments/assets/35fab10d-5adc-44fc-8c15-2f6739b5bed8)
![image](https://github.com/user-attachments/assets/5bc505b6-1ad0-45ad-bc28-c6c52aef13ba)

## Add book page
![image](https://github.com/user-attachments/assets/521c6457-2d86-41e7-812f-dfef1a85f42b)

## Edit page
![image](https://github.com/user-attachments/assets/120c6798-9600-4d8b-b5fa-32cb06d7cebd)

## Delete modal
![image](https://github.com/user-attachments/assets/fe6d5aeb-a4cf-4ccb-a0c9-1ff8d1d47dcb)

## Profile page
![image](https://github.com/user-attachments/assets/7e49d265-590a-4fff-b184-09319a27c24d)
![image](https://github.com/user-attachments/assets/c919dedf-85ce-4a80-a001-9b715feca606)
![image](https://github.com/user-attachments/assets/acfaf348-0c99-47b2-9304-c67dfc401f5d)

