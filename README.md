# StreamMERNia

MERN stack media player app for streaming audio content.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Stream audio content.
- Add new media entries.
- Retrieve all media entries.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/StreamMERNia.git
    ```

2. Navigate to the project directory:

    ```bash
    cd StreamMeERNia
    ```

3. Install server dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add the following environment variables:

    ```plaintext
    PORT=8000
    ```

5. Start the server:

    ```bash
    npm run dev
    ```
    
## Technologies Used

- **MongoDB**: Database for storing media entries.
- **Express**: Web framework for Node.js.
- **React**: Frontend library (setup not included in this README).
- **Node.js**: JavaScript runtime.
- **dotenv**: For managing environment variables.
- **cors**: For enabling Cross-Origin Resource Sharing.
- **body-parser**: For parsing incoming request bodies.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License.
