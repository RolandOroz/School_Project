import express from "express";
import mysql from "mysql2"; 
import cors from "cors";

const app = express();
const dbConnection = mysql.createConnection ({
    host: "localhost",
    port: 3327,
    user: "sqltool",
    password: "password",
    database: "test"
});
app.use(express.json());
app.use(cors());

app.get("/", (req, res) =>{
    res.json("Backend GET");
});

app.get("/books", (req, res) =>{
    const query = "SELECT * FROM books;"
    dbConnection.query(query, (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.post("/books", (req,res) =>{
    const query = "INSERT INTO books (title, book_desc, price, cover) VALUES (?);";
    const values = [
        req.body.title,
        req.body.book_desc,
        req.body.price,
        req.body.cover
    ];
    dbConnection.query(query, [values],(err, data) =>{
        if(err) return res.json(err);
        return res.json("Book created...");
    });
});

app.delete("/books/:id", (req, res) =>{
    const bookId = req.params.id;
    const query = "DELETE FROM books WHERE id = ?";

    dbConnection.query(query, [bookId], (err, data) =>{
        if(err) return res.json(err);
        return res.json("Book '${bookId}' deleted");
    
    })
})

app.put("/books/:id", (req, res) =>{
    const bookId = req.params.id;
    const query = "UPDATE books SET `title` = ?, `book_desc` = ?, `price` = ?, `cover` = ? WHERE id = ?";

    const values = [
        req.body.title,
        req.body.book_desc,
        req.body.price,
        req.body.cover
    ];               

    dbConnection.query(query, [...values, bookId], (err, data) =>{
        if(err) return res.json(err);
        return res.json("Book `${bookId}` updated.");
    
    })
})


app.listen(8800, () =>{
    console.log("Connected to backend!!");
});