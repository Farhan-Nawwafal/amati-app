import createApp from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const app = createApp();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Your app running on http://localhost:${PORT}`);
});