# [GYM-MANAGEMENT SYSTEM]()

### Gym Class Scheduling and Membership Management System Task

Assignment Requirements:
Technology Stack:
● Programming Language: Typescript
● Web Framework: Express.js
● ORM or ODM: Prisma(prefer)/Mongoose  
● Database: MongoDB/PostgreSQL(prefer)
● Authentication: JWT (JSON Web Tokens)
Note: You must follow a pattern like MVC or Modular pattern. Modular patterns will get priority.
And please draw a relational diagram.
Project Discussion (please read carefully)
The Gym Class Scheduling and Membership Management System is designed to manage
gym operations efficiently. The system defines three roles: Admin, Trainer, and Trainee, each
with specific permissions. Admins are responsible for creating and managing trainers,
scheduling classes, and assigning trainers to these schedules. Each day can have a
maximum of five class schedules, with each class lasting two hours. Trainers conduct the
classes and can view their assigned class schedules but cannot create new schedules or
manage trainee profiles. Trainees can create and manage their own profiles and book class
schedules if there is availability, with a maximum of ten trainees per schedule.
The system enforces several business rules to ensure smooth operations. Admins are limited to
scheduling a maximum of 5 classes per day, and each schedule can accommodate no more
than 10 trainees. If a class schedule reaches its capacity, trainees will be prevented from
making further bookings, and admins cannot create additional schedules beyond the daily limit.
JWT-based authentication is implemented to control access, ensuring that only authorized users
can perform specific actions, such as booking classes or managing trainers. Robust error
handling is integrated throughout the system, addressing issues such as unauthorized access,
validation errors, and booking limit violations. This system provides an organized and flexible
solution for managing gym class scheduling and membership, with well-defined roles and
responsibilities.
Business Rules:

1. Class Scheduling:
   ○ Each day is limited to a maximum of 5 class schedules.
   ○ Each class schedule lasts for 2 hours.
   ○ The system enforces a maximum of 10 trainees per class schedule. Once the
   limit is reached, no additional bookings can be made for that schedule.
   ○ Admins are responsible for scheduling classes and assigning trainers.
2. Booking System:
   ○ Trainees can book class schedules if the schedule has available slots (maximum
   of 10 trainees per schedule).
   ○ A trainee cannot book multiple classes in the same time slot.
   ○ Trainees can cancel their bookings if needed.
   Error Handling:
   Implement proper error handling throughout the application. Use global error-handling
   middleware to catch and handle errors, providing appropriate error responses with status codes
   and error messages.
   ● Unauthorized Access: Users who attempt actions without proper authentication or
   authorization will receive an "Unauthorized access" error.
   ● Validation Errors: Input validation will ensure that all required fields are provided, and if
   any data is invalid (e.g., incorrect email format), appropriate validation errors will be
   returned.
   ● Class Booking Limit Exceeded: If a trainee attempts to book a class that has already
   reached the maximum of 10 attendees, the system will return an error message
   indicating that the schedule is full.
   ● Schedule Limit: Admins attempting to create more than 5 schedules per day will
   receive an error.
   Sample Error Response:
   ● For Validation Errors:
   {
   "success": false,
   "message": "Validation error occurred.",
   "errorDetails": {
   "field": "email",
   "message": "Invalid email format."
   }
   }

Unauthorized Access:
{
"success": false,
"message": "Unauthorized access.",
"errorDetails": "You must be an admin to perform this action."
}

Booking Limit Exceeded:
{
"success": false,
"message": "Class schedule is full. Maximum 10 trainees allowed per schedule."
}

Success Response:
{
"success": true,
"statusCode": 201,
"message": "Class booked successfully"
"Data":[display the response data]
}

Submission Process:
To ensure your submission meets the requirements, please carefully follow the steps
outlined below:

1. Host the Server:
   ● Deploy your server on a live platform like Vercel, Heroku, etc.
   ● Ensure the server and all API endpoints are accessible via a live link.
2. Create a Git Repository:
   ● Push all your code to a public GitHub (or GitLab/Bitbucket) repository.
   ● Include a detailed README.md file that explains the project.
3. README.md File Must Include:
   ● Project Overview: Brief description of the system.
   ● Relation Diagram: Draw a Relational Diagram for the backend and add the link
   or image.
   ● Technology Stack: List of technologies used (e.g., TypeScript, Express.js,
   Prisma/Mongoose, PostgreSQL/MongoDB, JWT).
   ● API Endpoints: Document API methods, parameters, and responses.
   ● Database Schema: Include model definitions.
   ● Admin Credentials: Provide login details for admin access.
   ● Instructions to Run Locally: Step-by-step guide with commands for setup,
   installation, and starting the server.
   ● Live Hosting Link: Provide the live link to your deployed project.
   ● Postman documentation: must have to provide
4. Testing Instructions:
   ● Provide admin credentials for testing.
   ● Explain how to test key features (e.g., creating trainers, scheduling classes,
   booking).
