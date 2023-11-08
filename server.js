const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(htmlRoutes)
app.use(apiRoutes)


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});