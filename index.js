const sqlite = require("sqlite3");
let sql = "";

const db = new sqlite.Database("./data.db", sqlite.OPEN_READWRITE, (error) => {
  if (error) {
    console.error(error);
  }
});

// sql = `CREATE TABLE IF NOT EXISTS categories (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name VARCHAR(100) NOT NULL
// )`;

// db.run(sql, (error) => {
//   if (error) {
//     console.error(error);
//   }
// });

// sql = `INSERT INTO categories (name) VALUES (?)`;

// db.run(sql, ["Categoría 4"], (error) => {
//   if (error) {
//     console.error(error);
//   }
// });

// sql = `UPDATE categories SET name = ? WHERE id = ?`;

// db.run(sql, ["Categoría 1B", 1], (error) => {
//   if (error) {
//     console.error(error);
//   }
// });

// sql = `DELETE FROM categories WHERE id = ?`;

// db.run(sql, [2], (error) => {
//   if (error) {
//     console.error(error);
//   }
// });

// sql = `SELECT * FROM categories`;

// db.all(sql, (error, rows) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(rows);
//   }
// });

// db.close((error) => {
//   if (error) {
//     console.error(error);
//   }
// });

// sql = `SELECT * FROM categories WHERE id = ?`;

// db.get(sql, [3], (error, rows) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(rows);
//   }
// });

sql = `SELECT * FROM categories WHERE name LIKE ?`;

db.all(sql, ['%a 3%'], (error, rows) => {
  if (error) {
    console.error(error);
  } else {
    console.log(rows);
  }
});
