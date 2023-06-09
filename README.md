# ML Tools

**ML Tools** is a collection of three complementary parts: **ML Interface Wizard**, **ML Measure**, and **ML Contribute**. These tools are designed to simplify the development and deployment of Machine Learning models.

Please note that during the development process, this repository's name will be changed to **ML Tools** to accurately reflect the scope of the project.
![ml_tools](https://github.com/davutkulaksiz/ml-interface-wizard/assets/58954450/25f8f978-ba7d-43f7-9ca5-30f1d0a426c0)

---
# ML Interface Wizard

**ML Interface Wizard** is a full stack application that aims to simplify the creation of front-end interfaces for Machine Learning models. It provides a user-friendly interface to interact with models, check their correctness, and provide additional testing data. The application generates a UI for any Machine Learning model based on model metrics and provided metadata.

## Problem Statement

During the development of a data application based on a Machine Learning model, it is often necessary to create a front-end application specifically for that model. However, when the underlying model changes, a new front-end needs to be generated based on updated metrics and metadata. ML Interface Wizard solves this problem by automatically generating a UI for any Machine Learning model.

## Tech Stack

![tech_stack](https://github.com/davutkulaksiz/ml-interface-wizard/assets/58954450/ba7f227b-b886-4683-87ff-740bddf7c8fe)

## Features

- Web-based UI for interacting with Machine Learning models.
- Easy model usage and correctness checking.
- Support for providing additional testing data.
- Automatic UI generation based on model metrics and metadata.
- File and state management for up to 4 possible file uploads.
- Server-side validation for uploaded files and configuration files.
- Context-based state management solution using the React Context API.
- Dynamic generation of UI form elements based on configuration files.
- Support for uploading files in the "pkl" format and configuration files in JSON format.
- RESTful API for communication between the frontend and backend.
- Integration with Uvicorn, Python, FastAPI, and MongoDB on the backend.
- Deployment using Docker, AWS, Linode, and Azure.

## Uploading Files to Generate the Form
![firstgif](https://github.com/davutkulaksiz/ml-interface-wizard/assets/58954450/a8c4eb29-409b-4888-acd1-ae1a62eb38c3)

## Getting a Prediction by Filling Out the Form
![secondgif](https://github.com/davutkulaksiz/ml-interface-wizard/assets/58954450/dbca1950-df16-4f47-b8a5-f20f1a4872b7)


## Installation and Setup

1. Clone the backend repository and run it by following guide for the **Docker** version:

```shell
git clone https://github.com/nikolaDrljaca/interface-wizard-backend.git
```

```

# 1. Create virtual environment
python3 -m venv env

# 2. Activate created env
source env/bin/activate # Unix
.\env\Scripts\activate # Windows

# 3. Install packages
pip install -r requirements.txt

# 5. IMPORTANT - Create `.env` file in the same directory as `docker-compose.yml`
This will be used to setup the MongoDB instance. The following keys need to be present.
Define values as desired or leave listed defaults.
DB_USER=test
DB_PASS=test1234
DB_HOST=localhost
DB_PORT=27017

# 4. Setup MongoDB instance, make sure Docker is installed
docker compose up -d

# Controll the docker container
docker compose stop -> stop or shutdown the container, but DON'T tear it down, the data will not stay
docker compose start -> If the container is stopped, start it this way

# 5. Run the app
uvicorn app.main:app --reload
```

**If you are having problems with how to run backend, please check the following repository:**

[**ML Interface Backend**](https://github.com/nikolaDrljaca/interface-wizard-backend)

## If You Want to Run the Frontend Locally:

1. Clone the frontend repository:

```shell
git clone https://github.com/davutkulaksiz/ml-interface-wizard.git
```

2. Install the required dependencies:
```shell
npm install
```

3. Start the frontend development server:
```shell
npm start
```

4. Access the application by visiting http://localhost:3000 in your web browser.

## Contact

For any questions or inquiries, please contact the project maintainers:

- Nikola Drljaca - [GitHub](https://github.com/nikolaDrljaca)
- Davut Kulaksız - [GitHub](https://github.com/davutkulaksiz)

Thank you for using ML Interface Wizard! We hope it simplifies your Machine Learning model development process.

---
# ML Measure

Will be updated...

---
# ML Contribute

Will be updated...
