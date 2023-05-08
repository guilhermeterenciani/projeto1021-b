import express, {Request,Response} from 'express';
import mysql2 from 'mysql2/promise'
const app = express();
app.use(express.json())
app.get('/pessoas',async (req:Request,res:Response)=>{
    let banco = await mysql2.createConnection({
        host:"localhost",
        user:"test",
        password:"test",
        database:"test"
    })
    let query = "SELECT * FROM pessoas";
    let [resultado, _ ] = await banco.query(query);
    res.send(resultado);
});

app.get('/tere', (req:Request, res:Response) => {
    res.send('Hello Tere!');
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});