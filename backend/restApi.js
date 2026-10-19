
const express = require("express");

const app = express();
const PORT = 3000;

// Allow Express to read JSON request bodies
app.use(express.json());

// Temporary data
let students = [
    { id: 1, name: "Suraj", age: 21 },
    { id: 2, name: "Rahul", age: 22 }
];

// 1. GET: Get all students
app.get("/students", (req, res) => {
    res.json(students);
});

// 2. GET: Get one student by ID
app.get("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

// 3. POST: Add a student
app.post("/students", (req, res) => {
    const { name, age } = req.body;

    if (typeof name !== "string" || !name.trim() ||
        !Number.isInteger(age) || age < 0) {
        return res.status(400).json({
            message: "Provide a valid name and age"
        });
    }

    const newStudent = {
        id: students.length
            ? Math.max(...students.map(s => s.id)) + 1
            : 1,
        name: name.trim(),
        age: age
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});

// 4. PUT: Update a student
app.put("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const { name, age } = req.body;

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    if (typeof name !== "string" || !name.trim() ||
        !Number.isInteger(age) || age < 0) {
        return res.status(400).json({
            message: "Provide a valid name and age"
        });
    }

    student.name = name.trim();
    student.age = age;

    res.json(student);
});

// 5. DELETE: Delete a student
app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(index, 1)[0];

    res.json({
        message: "Student deleted successfully",
        student: deletedStudent
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
