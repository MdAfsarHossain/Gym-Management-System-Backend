# [GYM-MANAGEMENT SYSTEM]()

The `Gym Management System` is designed to manage gym operations efficiently. The system defines three roles: `Admin`, `Trainer`, and `Trainee`, each with specific permissions. Admins are responsible for creating and `managing trainers`, `scheduling classes`, and `assigning trainers` to these schedules. Each day can have a maximum of `five class schedules`, with each class lasting `two hours`. Trainers conduct the classes and can view their assigned class schedules but cannot create new schedules or manage trainee profiles. Trainees can `create` and `manage` their own profiles and book class schedules if there is availability, with a maximum of ten trainees per schedule.

## [TECHNOLOGIES USED]()

| **Layer**            | **Technology**       |
| -------------------- | -------------------- |
| Programming Language | TypeScript           |
| Web Framework        | Express JS           |
| ODM                  | Mongoose             |
| Database             | MongoDB              |
| Authentication       | JWT(JSON Web Tokens) |

---

## [ADMIN CREDENTIALS]()

- `ADMIN_EMAIL:` afsar-hossain@gmail.com
- `ADMIN_PASSWORD:` Afsar12345#

## [INSTRUCTIONS TO RUN LOCALLY]()

- 1.  Clone the Repository:

```npm
git clone https://github.com/MdAfsarHossain/Gym-Management-System-Backend
cd gym-management-system-backend
```

- 2. Install Dependencies:

```ts
npm install
```

- 3. Configure Environment Variables:

##### Create a `.env` file with:

```npm
PORT=5000
DB_URL= <db_url>
NODE_ENV=development

# BCRYPT
BCRYPT_SALT_ROUND=10

# JWT
JWT_ACCESS_SECRET=access_secret
JWT_ACCESS_EXPIRES=1d

# ADMIN
ADMIN_EMAIL= <admin_email>
ADMIN_PASSWORD= <admin_pass>
```

- 4. Run the Server:

```ts
npm run dev
```

## [LIVE HOSTING LINK]()

- <a href="https://gym-management-system-backend.vercel.app">Live Server Link</a>

## [API DOCUMENTATION]()

### Authentication Endpoints

#### Register User

```
POST /api/v1/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "name": "Afsar Hossian",
  "role": "TRAINEE" // Optional: ADMIN, TRAINER, TRAINEE
}
```

#### Login

```
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### User Management Endpoints

#### Get All Trainers

```
GET /api/v1/user/all-trainers
Authorization: Bearer <token>
```

#### Get Profile

```
GET /api/v1/profile/
Authorization: Bearer <token>
```

### Class Schedule Endpoints

#### Create Schedule (Admin Only)

```
POST /api/v1/class-schedule/create-schedule
Authorization: Bearer <token>
Content-Type: application/json

{
  "date": "2024-03-15",
  "startTime": "2024-03-15T10:00:00Z",
  "endTime": "2024-03-15T12:00:00Z",
  "trainerId": "trainer_id_here",
  "description": "Morning Yoga Class"
}
```

#### Get Schedules

```
GET /api/schedules?date=2024-03-15
Authorization: Bearer <token>
```

#### Get Trainer Schedules (Trainer Only)

```
GET /api/v1/class-schedule/
Authorization: Bearer <token>
```

### Booking Endpoints

#### Book Class (Trainee Only)

```
POST /api/v1/booking/create-booking
Authorization: Bearer <token>
Content-Type: application/json

{
   "traineeId": "trainee_id_here",
   "classId": "schedule_id_here"
}
```

#### Get Trainee Bookings

```
GET /api/v1/booking/all-bookings
Authorization: Bearer <token>
```

#### Cancel Booking

```
DELETE /api/v1/booking/cancel-booking/bookingId
Authorization: Bearer <token>
```

## [POSTMAN DOCUMENTATION](https://documenter.getpostman.com/view/17765698/2sB34foMZv)

<a href="https://documenter.getpostman.com/view/17765698/2sB34foMZv">Postman Documentation Live Link</a>

Import the provided Postman collection for all endpoints and example requests/responses.

## [ER DIAGRAM]()

<a href="https://drive.google.com/file/d/1B3qVvk9NgkiRajeupF82ofPIphnesdK2/view?usp=sharing" target="_blank">ER Diagram Link</a>
