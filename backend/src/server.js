import dotenv from 'dotenv';
dotenv.config();

import createApp from './app.js';

const app = createApp();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Your app running on http://localhost:${PORT}`);
});