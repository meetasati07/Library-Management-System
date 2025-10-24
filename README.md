📚 Library Management System

A full-stack Library Management System built using the MERN Stack with TypeScript, featuring a Book Loan System for managing books, users, and lending records efficiently.

🧩 Tech Stack

Frontend: React.js + TypeScript
Backend: Express.js + Node.js + TypeScript
Database: MongoDB (Mongoose ODM)

📁 Project Structure
Library-Management-System/
├── library-app/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       │   └── Modal/
│       ├── features/
│       │   ├── authentication/
│       │   │   └── components/
│       │   │       ├── LibraryCardModal/
│       │   │       ├── LoginForm/
│       │   │       ├── LoginRegisterModal/
│       │   │       ├── RegisterForm/
│       │   │       └── RegisterLibraryCardForm/
│       │   ├── book/
│       │   │   ├── components/
│       │   │   │   ├── BookAdditionalInfo/
│       │   │   │   ├── BookCard/
│       │   │   │   ├── BookCarousel/
│       │   │   │   ├── BookCheckin/
│       │   │   │   ├── BookCheckout/
│       │   │   │   ├── BookHistory/
│       │   │   │   ├── BookHistoryItem/
│       │   │   │   ├── BookInfo/
│       │   │   │   ├── BookOverview/
│       │   │   │   ├── BookSubjects/
│       │   │   │   └── LoanBookModal/
│       │   │   └── utils/
│       │   ├── catalog/
│       │   │   ├── components/
│       │   │   │   ├── CatalogAdvancedSearch/
│       │   │   │   ├── CatalogOverview/
│       │   │   │   ├── CatalogOverviewSection/
│       │   │   │   ├── CatalogSearch/
│       │   │   │   └── CatalogSearchPageNavigator/
│       │   │   └── utils/
│       │   ├── landing/
│       │   │   └── components/
│       │   │       ├── BookOfTheWeek/
│       │   │       ├── ContactUs/
│       │   │       ├── LibraryCard/
│       │   │       ├── LibraryHours/
│       │   │       └── UpcomingEvents/
│       │   ├── navigation/
│       │   │   └── components/
│       │   │       ├── Footer/
│       │   │       └── Navbar/
│       │   └── profile/
│       │       └── components/
│       │           ├── ProfileLoanHistory/
│       │           ├── ProfileLoanRecord/
│       │           └── UpdateUserForm/
│       ├── models/
│       ├── pages/
│       │   ├── CatalogPage/
│       │   ├── HomePage/
│       │   ├── LayoutPage/
│       │   ├── ProfilePage/
│       │   └── ResoursePage/
│       └── redux/
│           └── slices/
└── library-server/
│   ├── dist/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── daos/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── daos/
│       ├── middlewares/
│       ├── models/
│       ├── routes/
│       ├── services/
│       └── utils/
└── books.json
└── README.md

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/meetasati07/Library-Management-System.git
cd library-management-system

2️⃣ Backend Setup
cd backend


Copy the environment file and fill in your credentials:

cp example.env .env


Edit .env:

MONGO_USERNAME=YOUR_MONGODB_USERNAME
MONGO_PASSWORD=YOUR_MONGODB_PASSWORD


Install dependencies:

npm install
# or
npm i


Start the backend:

npm run dev

3️⃣ Frontend Setup

Open a new terminal:

cd frontend


Install dependencies:

npm install
# or
npm i


Start the frontend:

npm run dev

🚀 Run the App

Once both backend and frontend are running:
🔗 Visit → http://localhost:5173

🧠 Source Tutorial

Based on:
🎥 MERN Stack With TypeScript Tutorial || Library Management System

🤝 Contributing

Feel free to fork this repository, open issues, or submit pull requests for new features and improvements.