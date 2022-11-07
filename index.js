import express, { json } from 'express';
import cors from 'cors';
import chalk from 'chalk';

const app = express()

app.use(json());
app.use(cors());

const user = []

app.post('/sign-up', (req, res) => {
    const { username, avatar } = req.body

    user.push({ username, avatar })

    res.send('OK');
    
});


app.listen(5000, () => {
    console.log(chalk.bold.blue('Servidor funcionando'));
});