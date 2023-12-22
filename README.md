# jefferson-area-board-for-aging
## Point of Contacts
Any inquiries about the project, contact:
- Ricky Li (rickyli6@terpmail.umd.edu)
- Eric Yi(ericyi24@terpmail.umd.edu)
- Aryan Das(adas1@terpmail.umd.edu)
- Varun Chilukuri(vchiluku@terpmail.umd.edu)

## Project Info
Jefferson Area Board for Aging(JABA) is a nonprofit organization that supports seniors throughout the virginia area by providing them with resources and services that are able to aid their specific needs. Currently, JABA has all of its service information stored on a google document that is many pages long. When a client asks for help with an area of need, it can be troublesome for JABA employees to find the related services because the google document format is unorganized and thus diffult to parse through. This project aims to solve that issue by providing JABA with a data management tool that allows JABA employees the ability to login, search/filter for services by different fields for a list of services, export the list and print them out. This project also allows employees to register as either a normal user or an admin, and gives them different abilities. This project has the potential to be used by many other organizations similar to JABA in that area as well. 

## Teck Stack
Frontend: TypeScript, React, CSS Modules

Backend: Firebase


## Running The Repository Locally

- Initialize a git repository, and clone the JABA repository using `git clone https://github.com/Hack4Impact-UMD/jefferson-area-board-for-aging.git`
- Run `pnpm i` in the jaba directory
- Run `pnpm start` in the jaba directory
- Navigate to  http://localhost:3000/ in your browser and you should see the project running there.

## Hosting
Hosting for this project haven’t been set up yet, but we plan on using Firebase Hosting.


## Project Structure
### Backend - Firebase
- Contact Eric or Ricky to gain access to our firebase console
- We used the Firestore database feature of firebase to store our data
- For our project, we stored two collections on firebase:
  
Resources: used to store all the services/resources provided by the organization

Users: used to store information about employees who are using the project(either admin or regular user)

<img width="786" alt="Screen Shot 2023-12-21 at 10 47 02 PM" src="https://github.com/Hack4Impact-UMD/jefferson-area-board-for-aging/assets/68857577/7315f1e7-b8e3-4ef1-a33d-e430d4dca968">

## File Organization and Preferred Practices
- Here is the link for the preferred practices we established for this project: https://docs.google.com/document/d/1ufv9bhXxcZtAeJtLJa6XLqxNEPDXCIavJ33FO3piXoY/edit?usp=sharing

### Additional Notes
- All the pages for our project are stored in the jaba/src/pages directory. Inside that directory, each page contains a directory of its own that contains the page itself and the css module used for that page. They should be named as x.tsx and x.module.css, where x is the name of the page.
  
- Most of our images and visuals are in the jaba/src/assets folder, although some are from the react material icons (https://mui.com/material-ui/material-icons/) 














