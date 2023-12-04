const express = require('express');
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: '18.205.169.244',
  user: 'fran',
  password: '221193',
  database: 'integrador'
});
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  }
});

module.exports = connection;