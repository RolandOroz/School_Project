import express from "express";
import mysql from "mysql2"; 

const app = express();
const connection = mysql.createConnection ({
    host: "localhost",
    port: 3327,
    user: "sqltool",
    password: "password",
    database: "test"
});

app.get("/", (req, res) =>{
    res.json("Backend GET");
});

app.get("/books", (req, res) =>{
    const query = "SELECT * FROM books;"
    connection.query(query, (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.post("/books", (req,res) =>{
    const query = "INSERT INTO books (title, book_desc, cover) VALUES (?);";
    const values = ["title from backend", "desc backend", "backend.jpg"];
    connection.query(query, [values],(err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8800, () =>{
    console.log("Connected to backend!!");
});