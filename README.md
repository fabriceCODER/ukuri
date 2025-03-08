# UkuriKose - Modern News Platform

## Overview
UkuriKose is a modern, functional news website built using Next.js and Tailwind CSS. It provides real-time and verified information across all domains, including politics, technology, entertainment, and more. The platform features dynamic articles, an interactive map, a user submission form, and an admin dashboard for moderation.

## Features
- **Dynamic Articles**: Fetches and displays up-to-date news articles.
- **User Submissions**: Allows users to submit articles for review.
- **Interactive Map**: Uses `react-leaflet` to visualize global news data.
- **Admin Dashboard**: Moderation panel for managing content and users.
- **SEO & Performance Optimized**: Ensures fast page loads and discoverability.
- **Dark & Light Mode Support**: User-friendly UI with customizable themes.
- **Secure & Scalable Backend**: Uses PostgreSQL for database, Firestore for storage, and Firebase for media uploads.
- **Deployment on Vercel or Netlify**: Ensures high availability and scalability.

## Tech Stack
- **Frontend**: Next.js, Tailwind CSS
- **Backend**: PostgreSQL, Firestore, Firebase Storage
- **Authentication**: Firebase Auth
- **Map Visualization**: react-leaflet
- **Deployment**: Vercel / Netlify

## Installation & Setup
### Prerequisites
- Node.js 18+
- npm or yarn installed
- PostgreSQL database setup

### Steps
1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/ukurikose.git
   cd ukurikose
   ```
2. **Install Dependencies**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Setup Environment Variables**
   Create a `.env.local` file and add the required environment variables:
   ```sh
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_POSTGRESQL_URL=your_database_url
   NEXT_PUBLIC_MAPBOX_API_KEY=your_mapbox_key
   ```
4. **Run the Development Server**
   ```sh
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at `http://localhost:3000`

5. **Build for Production**
   ```sh
   npm run build
   npm start
   ```

## Folder Structure
```
ukurikose/
│── public/            # Static assets
│── components/        # Reusable UI components
│── pages/             # Next.js pages
│── lib/               # Utility functions & API calls
│── styles/            # Global styles
│── hooks/             # Custom React hooks
│── .env.local         # Environment variables
│── next.config.js     # Next.js configuration
│── tailwind.config.js # Tailwind CSS configuration
│── package.json       # Dependencies and scripts
```

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries or suggestions, reach out to:
- **Email**: fabricecoder009@gmail.com
- **Twitter**: @Fabrice00023
- **Instagram**: @ishi-fab

