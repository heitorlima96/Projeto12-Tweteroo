import express, { json } from 'express';
import cors from 'cors';
import chalk from 'chalk';

const app = express()

app.use(json());
app.use(cors());

const user = []
const tweets = []

app.post('/sign-up', (req, res) => {
    const { username, avatar } = req.body

    user.push({ username, avatar })

    res.send('OK');
    
});

app.get('/tweets', (req, res) => {
    res.send(tweets.slice(tweets.length - 10, tweets.length));
});

app.post('/tweets', (req, res) => {
    const { username, tweet } = req.body
    const usuario = user.find(user => {
        if (user.username === username) return true
    })

    const { avatar } = usuario

    tweets.push(
        {
            username,
            avatar,
            tweet
        }
    )

    res.send('OK');
   
});


app.listen(5000, () => {
    console.log(chalk.bold.blue('Servidor funcionando'));
});