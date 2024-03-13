# Plants On Demand

Plants On Demand is a web application that allows users to manage their existing plants, keep track of their plants, set watering reminders, learn how to take care of plants, and experience a plant simulation to help them understand plant care better. Users can log in using their Google account and access their protected area, where they can add new plants, view plant details, and set up reminders for watering their plants.

## Features

- **Google OAuth Login**: Users can log in to the application using their Google account, ensuring a secure and seamless authentication process.

- **Protected Area**: After successful login, users can access their protected area, where they can manage their virtual garden and view their plants.

- **Plant Search**: Users can search for plants by name and filter them based on care level or other criteria, making it easy to find specific plants.

- **Plant Details**: Users can view detailed information about a specific plant, including its common name, scientific name, care guides, and images.

- **Add New Plants**: Users can add new plants to their virtual garden, providing essential information such as common name, scientific name, care level, and more.

- **Set Watering Reminders**: Users can set watering reminders for their plants, choosing the frequency and time of the reminders.

- **Plant Simulation**: Users can experience a guided interactive simulation that teaches them how to take care of plants effectively.

## Stack and Libraries Used

The application was built using the following technologies and libraries:

- Front-end: HTML, CSS, JavaScript
- Back-end: Python, Flask framework
- Database: SQLite
- Perenual API: Used to fetch plant information
- Google Calendar API: Used to set watering reminders

## Obtain the necessary API keys:

To run the application successfully, you'll need to obtain the following API keys:

- **Google Client ID**: Follow the instructions in the "Authentication" section below to create a Google Cloud project and obtain the client ID.

- **Perenual API Key**: You will need an API key from Perenual API to fetch plant information. Sign up and obtain your API key at https://perenual.com.

## Authentication

To set up authentication for your web application, follow these steps:

1. Create a Google Cloud project at https://console.cloud.google.com/.

2. Enable the Google Calendar API for your project.

3. Create OAuth 2.0 credentials for your web application and set the authorized redirect URI to "http://127.0.0.1:5000/callback".

4. Download the JSON file containing your client secrets and save it as "client_secret.json" in the project directory.

## Usage

1. Clone the repository to your local machine.

2. Install the required dependencies using `pip install -r requirements.txt`.

3. Set up the Google API credentials by placing the "client_secret.json" file in the project directory.

4. Run the application using `python app.py`.

5. Open your web browser and navigate to `http://127.0.0.1:5000` to access the application.

## Screenshots

![Login Page](image_sub)
Description: This is the login page where users can authenticate using their Google account.

![Protected Area](image_sub)
Description: After successful login, users can access their protected area, where they can manage their plants and view their plants.

![Plant Details](image_sub)
Description: Users can view detailed information about a specific plant, including its common name, scientific name, images and other care related information.

![Plant Search](image_sub)
Description: Users can search for plants by name and filter them based on care level, making it easy to find specific plants.

![Add Plant](image_sub)
Description: Users can add new plants to their virtual garden, providing essential information such as common name, scientific name, care level, and more.

![Plant Diary](image_sub)
Description: Users can keep track of their plant care activities and set watering reminders.

## Contributing

Contributions are welcome! Access to Follow Soon.

## Acknowledgments

This project was developed as an SEO Tech Developer Final Project.

We thank Perenual API for providing the plant data.

## Contact

If you have any questions or inquiries, please feel free to contact us:

- Jackson Larnier: jackson.h.lanier@vanderbilt.edu
- Vimbisai Basvi: basvi.vimbisai@gmail.com
- Nana Nyanor: nadu1900@gmail.com

---

**Happy gardening with Plants On Demand!** 🌱
