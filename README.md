# Attendance Backend

### Project Currently on Hold

## Summary

This is a backend I developed for use in a future Full Stack web app to handle tracking students attendance in the classroom. The goal is to allow teachers to create multiple classes (the specific class cohort),  each comprised of multiple sessions (the cohort meetings days), and multiple students. Once a class is created you would be able to generate a new session very easily generated from the existing students on the class roster. From there navigation to the class date would take you to a simple form to allow you to check who was in attendance that day.

This backend is using bcrypt for password encryption, and express-sessions to allow a signed in status for the frontend request to lower the amount of password checks, and reduce the amount of secure information being transmitted.

