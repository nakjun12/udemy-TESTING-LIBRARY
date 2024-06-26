# sundae-server - DO NOT EDIT

### A server for the "Sundaes on Demand" app in the Udemy course "Testing Library for React"

**Note**: This is an Express server to support the React app in the course. **_Please do not write your React code here._** The React code belongs in the [sundae-starter](../sundae-starter) project.

## Installing

1. Clone or fork the course repository found at [https://github.com/bonnie/udemy-react-testing-library-projects]
2. `cd` into the `sundae-server` directory (where this README is located).
3. Run `npm install`

## Starting the server

Run `npm start`. The server will be found at [http://localhost:3030]

## Using the server

Server routes:

- `GET /scoops` and `GET /toppings` return sundae options (array of objects with keys `name` and `imagePath`)
- `POST /order` returns a random order number (does not process order)
- images via static `/images` directory.

## Testing

To test, run `npm test`.
