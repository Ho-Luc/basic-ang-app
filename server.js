'use strict'

let express = require('express');
let app = express();

app.use(express.static(__dirname + '/app'))

app.listen(3000, () => console.log('server started on 3000.'))
