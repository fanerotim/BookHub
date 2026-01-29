# BookHub

This is a course project, which I built during my ReactJS course @ SoftUni academy. Front-end is built with React and back-end is built with ExpressJS and MongoDB. I am also using Sass and BEM convention. It is a responsive application and it works on mobile devices also.

Currently its REST API is deployed on a free 'Render' server and due to this on first load it takes some time until it fetches data from backend.

The application is now deployed and could be accessed via this link: (not currently hosted)

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

- It is a CRUD application which allows users to register and create their own accounts. Upon successful registration the users receive an email to confirm their registration. 
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

## Quotes page
![image](https://github.com/user-attachments/assets/97589697-328c-4fa9-b1fc-208f65bdc1d0)

## Quote details
![image](https://github.com/user-attachments/assets/759f5ad4-8229-4498-8515-6ac11c43e580)

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

