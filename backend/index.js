const mysql =require("mysql2");
const cors=require("cors");
const express=require("express");

const app=express();
app.use(cors());
app.use(express.json());

const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"KA26@vya"
    // database:"userstb"
});

db.connect((err)=>{
    if(err){
console.log("not connected");

    }else{
console.log(" connected");
    }
});

app.get("/list",(req,res)=>{
db.query("select * from products.productslist",(err,result)=>{
    if (err) {
        return res.status(400).json("err")
    } else {
        return res.status(200).json(result)
    }
})
})

app.get("/search", (req, res) => {

    const search = req.query.search;

    db.query(
        "SELECT * FROM products.productslist WHERE name LIKE ?",
        [`%${search}%`],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            return res.status(200).json(result);
        }
    );
});

app.post("/register", (req, res) => {

    const { username, password } = req.body;

    db.query(
        "INSERT INTO loginui.userstb (username, password) VALUES (?, ?)",
        [username, password],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            return res.status(200).json({
                message: "User Registered Successfully"
            });
        }
    );
});
// SELECT * FROM loginui.userstb

app.post("/login", (req, res) => {

    const { username, password } = req.body;

    db.query(
        "SELECT * FROM loginui.userstb WHERE username=? AND password=?",
        [username, password],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            if (result.length > 0) {

                return res.status(200).json({
                    message: "Login Success"
                });

            } else {

                return res.status(401).json({
                    message: "Invalid User"
                });
            }
        }
    );
});


app.listen(5000,()=>{
console.log("server connected");


})