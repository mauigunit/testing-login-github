import express  from 'express';
import expHandlebars  from 'express-handlebars';
import viewRouter  from './src/routes/views.js';
import sessionRouter  from './src/routes/session.js'
import mongoose from 'mongoose'
import passport from 'passport'
import inicializePassport from './src/config/passport.config.js';
import session from 'express-session'
import dotenv from 'dotenv'
dotenv.config();

const app = express();

/*const mongoStore = MongoStore.create({
    mongoUrl: process.env.CONNECTION_DB,
    mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
    ttl: 100
})*/


/*app.use(express.json());
app.use(express.urlencoded({extended: true}));*/

app.engine('.hbs', expHandlebars({extname: '.hbs', defaultLayout: 'main.hbs'}));
app.set('view engine', '.hbs');

const PORT = process.env.PORT
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${server.address().port}`);
});
server.on('error', error => console.log(error));

const connection = mongoose.connect(process.env.CONNECTION_DB);

inicializePassport();

app.use(session({
    secret: process.env.SECRET_SESSION
}));

app.use(passport.initialize());
app.use('/', viewRouter);
app.use('/api/sessions', sessionRouter);


