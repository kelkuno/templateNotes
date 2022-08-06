const pg = require('pg');

const config = {
  database: 'awesome_reads', 
  host: 'localhost', 
  port: 5432, 
  max: 10, 
  idleTimeoutMillis: 30000 
};

const pool = new pg.Pool(config);

pool.on("connect", () => {
  console.log("connected to postgres");
});

pool.on("error", (err) => {
  console.log("error connecting to postgres", err);
});

module.exports = pool;

//This file is put in the modules folder on the same level as public folder.
//any file (router or server file) that uses pool, put this there const pool = require('../modules/pool');
//things to check #make sure database in the config matches SQL
//if your project doesn't have pool as a dependency, then npm install pool
//if it does, just do npm install
