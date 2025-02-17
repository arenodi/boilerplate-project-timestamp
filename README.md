# Timestamp Microservice

## This is the first project for the Back End Development and API's certification - FCC

It must pass the following tests:

- Passed:You should provide your own project, not the example URL.
- Passed:A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)
- Passed:A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT
- Passed:A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }
- Passed:Your project can handle dates that can be successfully parsed by new Date(date_string)
- Passed:If the input date string is invalid, the API returns an object having the structure { error : "Invalid Date" }
- Passed:An empty date parameter should return the current time in a JSON object with a unix key
- Passed:An empty date parameter should return the current time in a JSON object with a utc key
