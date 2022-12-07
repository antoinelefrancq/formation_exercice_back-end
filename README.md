# formation_exercice_back-end

This projet as been develop during my formation. It works with ExpressJs, PostGreSQL, Sequelize, Ejs, Bcrypt and Dotenv.

## Initiate
 - Make sur to get NodeJS installed on your computer.
 - Begin by `npm i` to install all the dependancies.
 - Then create a file `.env` based on the `.env.example`. 
 - Create the postgresSQL database :
   - On Linux : make sur to get PostgreSQL
     1. Use `sudo -i -u postgres psql` in the terminal to acces psql to edit.
     2. Now, you have a commande prompt looking like `postgres=#`. 
     3. `CREATE USER my-username WITH PASSWORD 'my-password';` (replace by the username and password you choose)
     4. `CREATE DATABASE my-database OWNER my-username;` (select the username previously defined and give a name to your database).
     5. Get out of psql by `\`+`Q` (`\` is accessible by combinaison `Alt Gr`+`8`).
     6. (Option) you can test your database by `psql -U my-username -d my-database`.
     7. Then execute the SQL script by typing `psql -U my-username -d my-database -f data/structure-data.sql`
     8. Replace the pg_url in your .env by your personnalize url (looking like : PG_URL=postgres://my-username:my-password@localhost/my-database)
   - On windows : make sur to get PostgreSQL
     1. Create your user with PGadmin or
     2. Continue at ***fourth step*** with the password you selected while you installed postgres and the username= `postgres`
 - After that, run node on the file "index.js" at the root of this repository and follow the url defined in your .env
  
