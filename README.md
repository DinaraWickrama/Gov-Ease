[README.md](https://github.com/user-attachments/files/21813342/README.md)
# Government Services App

A modern web application designed to streamline various government services for citizens and provide administrative tools for government officers. This project demonstrates a comprehensive frontend interface for a multi-faceted service platform.

## Features

*   **User Authentication:** Secure login and registration for citizens.
*   **Dynamic Dashboard:** Personalized dashboard with time-based greetings and user-specific information.
*   **Appointments Management:**
    *   Browse and select government departments and services.
    *   Interactive calendar for booking appointments.
    *   Booking confirmation with reference numbers and QR code placeholders.
    *   Option to book another appointment.
*   **Citizen Profile:** View and manage personal profile details (Username, Mobile Number, Email, NIC).
*   **Notifications System:** Simulated notifications for appointment confirmations, reminders, and status updates.
*   **Recent Activities:** Track and view past actions performed within the app.
*   **Report Issues:**
    *   Select departments to report issues.
    *   Form for detailed problem description, location, and evidence upload.
    *   Submission confirmation.
*   **Pay Bills:**
    *   Select various bill types (Water, Telephone, Electricity, Tax).
    *   Form to enter account details, name, and amount.
    *   Conditional payment methods (Credit/Debit Card, Bank Transfer with slip upload).
    *   Payment successful confirmation.
*   **Government Officer Interface:**
    *   Dedicated dashboard for officers to manage appointments (upcoming/past).
    *   Document management section for uploading and reviewing documents.
*   **Analytics Dashboard:** (For Government Authorities)
    *   Data visualization dashboard displaying key metrics like peak booking hours, departmental load, no-show rates, and average processing times.
*   **Integrated Feedback System:** Provide ratings and feedback on service experience.

## Technologies Used

*   **Next.js:** React framework for building server-rendered React applications.
*   **React:** JavaScript library for building user interfaces.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **Local Storage:** Used for client-side data persistence (e.g., user login status, user details).

## Setup and Installation

To get this project up and running on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd gov-app
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

## Running the Application

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will typically run on `http://localhost:3000`. Open this URL in your web browser.

## Important Note on Backend

This project is a **frontend-only** implementation. All data persistence and "backend" functionalities (like user authentication, data storage, email/SMS notifications, and actual document processing) are simulated using `localStorage` in the browser.

For a fully functional application, you would need to implement a robust backend system (e.g., using Node.js with Express, Python with FastAPI/Django, etc.) and integrate it with this frontend.
