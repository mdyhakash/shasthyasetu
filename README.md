# ShasthyaSetu

ShasthyaSetu is a web-based platform designed to provide users with easy access to healthcare services. The website allows users to browse available doctors, view their details, book appointments, and interact with healthcare professionals in a seamless and user-friendly environment. The platform supports the SDG 3 (Good Health and Well-being) by facilitating access to healthcare services for all.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [Usage Guide](#usage-guide)
6. [Project Structure](#project-structure)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction

ShasthyaSetu is a dynamic healthcare website that allows users to:

- Browse a list of healthcare professionals (e.g., doctors, pharmacists, neurologists).
- View detailed profiles of healthcare professionals, including their specialties, ratings, and more.
- Book an appointment with doctors directly through the website.
- Use a responsive, mobile-friendly interface to ensure access across devices.

## Features

- **Doctor Profiles**: Each healthcare professional has a detailed profile that includes their name, specialty, rating, and availability for appointments.
- **Appointment Booking**: Users can book an appointment with their preferred doctor by clicking the "Make an Appointment" button on the doctor’s profile page.
- **Rating System**: Users can see doctors’ ratings based on previous patient reviews, with the rating displayed as filled and unfilled stars.
- **Responsive Design**: The website is fully responsive and works seamlessly across desktop, tablet, and mobile devices.
- **Easy Navigation**: A simple and intuitive user interface makes it easy to find doctors and book appointments.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js (optional, depending on your setup)
- **Database**: MongoDB (or another database, depending on your choice)
- **Routing**: Next.js (for dynamic routing)
- **APIs**: Optional, for fetching doctor details, ratings, and managing appointments.

## Setup Instructions

### Prerequisites

- Node.js (>= 14.x)
- npm (or yarn)

### Clone the Repository

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/shasthya-setu.git
   cd shasthya-setu
   ```

### Install Dependencies

2. Install project dependencies:

   ```bash
   npm install
   ```

   or if using yarn:

   ```bash
   yarn install
   ```

### Run the Development Server

3. Start the development server:

   ```bash
   npm run dev
   ```

   or with yarn:

   ```bash
   yarn dev
   ```

4. Open your browser and visit [http://localhost:3000](http://localhost:3000).

## Usage Guide

### Browsing Doctors

1. Upon visiting the homepage, you will be presented with a list of doctors.
2. Each doctor is displayed in a card format with their name, specialty, and rating.
3. You can click on the doctor’s name or image to view their **profile page**.

### Doctor Profile Page

1. The **Doctor Details Page** includes the doctor’s full profile with their specialty, ratings, and a brief bio.
2. You will also see an **appointment button** on the profile page.
3. Ratings are displayed with a star system, where filled stars represent the doctor’s rating based on user reviews.

### Booking an Appointment

1. On the doctor’s profile page, click the **"Make an Appointment"** button.
2. This will redirect you to the **appointment page**, where you can choose a date and time for your appointment.
3. Complete the necessary details (e.g., name, contact information, etc.) and submit the appointment request.
4. After submitting, you will receive a confirmation message, and your appointment will be scheduled.

### User Interaction

- **Appointment Confirmation**: After booking an appointment, users will receive a confirmation email or on-screen message with the appointment details (if integrated with email services).
- **Responsive Interface**: The interface is designed to be mobile-friendly, ensuring a seamless user experience on different devices.

## Project Structure

```plaintext
/shasthya-setu                         # Root directory of the project
│
├── /app                                # Main application logic and pages
│   ├── /doctor                         # Doctor-related pages and components
│   │   ├── [id].js                     # Dynamic doctor profile page (doctor details)
│   │   ├── DoctorList.js               # Displays all doctors with brief info
│   │   └── DoctorCard.js               # Individual doctor card component (used in DoctorList)
│   │
│   ├── /appointment                    # Appointment-related pages and components
│   │   ├── AppointmentPage.js          # Main page for appointment booking
│   │   └── AppointmentForm.js          # Form for selecting doctor, date, time
│   │
│   ├── /home                           # Homepage
│   │   ├── HomePage.js                 # Landing page with doctor cards
│   │   └── HeroSection.js              # Hero section at the top (intro, call-to-action)
│   │
│   └── /shared                         # Shared components across pages
│       ├── Navbar.js                   # Navigation bar
│       ├── Footer.js                   # Footer component
│       ├── RatingStars.js              # Star rating component for doctors
│       └── Button.js                   # Reusable button component
│
├── /public                             # Static files (images, fonts, etc.)
│   ├── /images                         # Folder for storing images (doctor images, logos)
│   │   └── doctor1.jpg                 # Example doctor image
│   └── favicon.ico                     # Favicon for the website
│
├── /components                         # Reusable UI components (Doctor profile, appointment, UI elements)
│   ├── /DoctorProfile                  # Components for displaying doctor details
│   ├── /Appointment                    # Components related to appointments (form, calendar)
│   └── /UI                             # UI components (cards, modals, buttons)
│
├── /hooks                              # Custom hooks for data fetching and form logic
│   ├── useGetAllDoctors.js             # Fetch all doctors
│   ├── useGetDoctor.js                 # Fetch specific doctor by ID
│   └── useSubmitAppointment.js         # Submit the appointment form
│
├── /styles                             # Styling-related files
│   ├── tailwind.config.js              # Tailwind CSS configuration
│   ├── globals.css                     # Global styles for the website
│
├── /pages                              # The main pages for routing in Next.js
│   ├── index.js                        # Main landing page (Home page)
│   └── /doctor                         # Folder for doctor-related routes
│       ├── [id].js                     # Dynamic route for displaying doctor details
│   ├── /appointment                    # Appointment-related routes
│   │   └── book.js                     # Appointment booking page
│
├── package.json                        # Project metadata and dependencies
├── tailwind.config.js                  # Tailwind CSS configuration file
└── README.md                           # Project documentation
```
## Contributing

We welcome contributions! Here’s how you can help improve the project:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add new feature'`)
5. Push to the branch (`git push origin feature-name`)
6. Open a pull request

Please make sure your code adheres to the project’s coding standards.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

