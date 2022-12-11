import express from "express"
const app = express()

app.get("/", (req:any, res:any)=>{
    console.log("GET")
    res.send("OK GET")
})
app.put("/", (req:any, res:any)=>{
    console.log("PUT")
    res.send("OK PUT")
})
app.post("/", (req:any, res:any)=>{
    console.log("POST")
    res.send("OK POST")
})
app.delete("/", (req:any, res:any)=>{
    console.log("DELETE")
    res.send("OK DELETE")
})