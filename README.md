# 🤝 UnityCharity: The Future of Giving

Demo link :
https://koushiksiddhu1916.github.io/charity/

UnityCharity is a multi-platform charity ecosystem designed to bridge the gap between donors and meaningful causes. This repository contains both a high-performance **Android Application** and a premium **Web Platform**, all powered by a robust **Firebase Backend**.

## 🌟 Key Features

### 💻 Web Platform (React + Vite)
- **Premium Aesthetics**: Dark/Light mode support with Glassmorphism and Framer Motion animations.
- **Firebase Auth**: Secure user registration, login, and profile management.
- **Dynamic Campaigns**: Real-time progress tracking of charity goals via Firestore.
- **Donation History**: Personalized logs of user contributions.
- **Responsive Design**: Seamless experience across mobile, tablet, and desktop.

### 📱 Android App (Java)
- **RecyclerView & Adapters**: Efficient listing of ongoing campaigns.
- **Interactive UI**: Action Bar integration and custom campaign cards.
- **AlertDialogs**: Native donation flow with input validation.
- **Push Notifications**: Real-time alerts when campaign goals are reached.
- **State Persistence**: Full orientation change handling using Parcelable.

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (for Web)
- [Android Studio](https://developer.android.com/studio) (for Mobile)
- [Firebase Account](https://firebase.google.com/)

### 2. Web Setup
```bash
cd charity-web
npm install
```
- Create a `.env` file in the `charity-web` directory.
- Add your Firebase configuration keys (see `.env.example`).
- Run locally: `npm run dev`

### 3. Firebase Deployment
To deploy the web platform to Firebase Hosting:
```bash
npm run build
firebase deploy
```

---

## 📂 Project Structure
```text
├── app/               # Android App Source (Java)
├── charity-web/       # Web Platform Source (React + Vite)
├── web_mockup/        # Quick HTML/CSS Preview Mockup
└── README.md          # Project Documentation
```

## 🛠️ Built With
- **Frontend**: React.js, Framer Motion, Lucide Icons
- **Mobile**: Android SDK, Java
- **Backend**: Firebase Authentication, Firestore Database
- **Styling**: Modern CSS3 (Variables, Flex/Grid)

---

Developed with ❤️ for the community.
