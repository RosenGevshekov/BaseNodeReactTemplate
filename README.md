# Base Node React Template
Base template project, to start with a node.js with MySQL DB backend and react + bootstrap frontend stack.

# SET UP
1.Open the project in VSCode
<br />
2.Open the terminal
<br />
3.Type following commands:
  - cd backend
  - npm install

  - cd ../frontend
  - npm install
<br />
4.Configure the env file in the backend project with your MySQL DB credentials
<br />
5.Type following commands:
	- cd ../backend
	- npm start
	
	- cd ../frontend
	- npm start
	
# TEST

You can test it by every Rest Client (Postman for example)

Edit the About Page:

Example : 
<br />
	Endpoint: POST http://localhost:5000/api/admin/page
	
	Body (JSON):
		{
			"name": "about",
			"content": "This is updated content for the About Us page."
		}
		
Expected: A response with the updated page object.

This will update the about page, using the API

------------------------------------------------------------------------------

Add a Blog Post:
<br />
	Endpoint: POST http://localhost:5000/api/admin/blog
 
	Body (JSON):

		{
			"title": "My First Blog",
			"content": "This is the content of my first blog."
		}
		
Expected: A response with the created blog object.

This will add a new blog to the DB!

------------------------------------------------------------------------------

You can check them at the frontend side:

Link: http://localhost:3000/about
Link: http://localhost:3000/blog



Thank you for reading, and may this guide empower you to achieve your goals with confidence and creativity.
