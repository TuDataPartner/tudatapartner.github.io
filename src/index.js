const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(require('./rutas/index'));

app.use(express.static(path.join(__dirname,'tudatapartner_paginaweb')));



app.listen(3000,()=>{
    console.log('servidor en puerto 3000')
});
  