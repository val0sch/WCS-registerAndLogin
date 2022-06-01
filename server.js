const express = require("express");
const app = express();
const PORT = process.env.PORT || 5500;

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server is listening on port ${PORT}`);
  }
});
