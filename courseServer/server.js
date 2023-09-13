// server.js
const express = require('express');
const cors=require('cors')
const app = express();


app.use(express.json());

app.use(cors())

app.get('/courses', (req, res) => {
  res.json([
    {
      CourseName:"Basic Algorithm",
      startDate:"27 Jan,2023",
      lessonCompleted:"10/25 (48%)",
      Duration:"14h 38m 56s"
    },
      {
        CourseName:"Web Development",
        startDate:"23 Feb,2023",
        lessonCompleted:"40/45 (97%)",
        Duration:"36h 30m 00s"
      },
      {
        CourseName:"Basic Data Science",
        startDate:"14 jan,2023",
        lessonCompleted:"9/37 (40%)",
        Duration:"37h 00m 00s"
      },
      {
        CourseName:"UI/UX Design",
        startDate:"19 Feb,2023",
        lessonCompleted:"26/32 (84%)",
        Duration:"16h 40m 50s"
      },
      {
        CourseName:"Project Management",
        startDate:"27 jan,2023",
        lessonCompleted:"14/19 (89%)",
        Duration:"13h 20m 00s"
      },
  ]);
});

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
