DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;

CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  firstname CHAR(15) NOT NULL,
  initials CHAR(15),
  lastname CHAR(15) NOT NULL
);

CREATE TABLE books (
  "ISBN" VARCHAR(14) PRIMARY KEY,
  title CHAR(40) NOT NULL,
  author_id INT,
  genre CHAR(20)
);

INSERT INTO authors (firstname, initials, lastname) VALUES
  ('George', 'R. R.', 'Martin'),
  ('Terry', NULL, 'Pratchett'),
  ('J.', 'R. R', 'Tolkien'),
  ('Ursula', NULL, 'Le Guin');

INSERT INTO books VALUES
  ('978-0552166614', 'Equal Rites', 2, 'Fantasy'),
  ('978-0007488353', 'The Return of the King', 3, 'Fantasy'),
  ('978-0007447848', 'A Storm of Swords 1: Steel & Snow', 1, 'Fantasy'),
  ('978-1442459960', 'Tehanu', NULL, 'Fantasy'),
  ('978-0552166638', 'Sourcery', 2, 'Fantasy'),
  ('978-1442459915', 'The Tombs of Atuan', NULL, 'Fantasy'),
  ('978-0007447831', 'A Clash of Kings', 1, 'Fantasy'),
  ('978-0552166607', 'The Light Fantastic', 2, 'Fantasy'),
  ('978-0007488315', 'The Fellowship of the Ring', 3, 'Fantasy'),
  ('978-0007447855', 'A Storm of Swords 2: Blood & Gold', 1, 'Fantasy'),
  ('978-0689845345', 'The Farthest Shore', NULL, 'Fantasy'),
  ('978-0007582235', 'A Feast for Crows', 1, 'Fantasy'),
  ('978-0007488339', 'The Two Towers', 3, 'Fantasy'),
  ('978-0007548231', 'A Game of Thrones', 1, 'Fantasy'),
  ('978-0552166621', 'Mort', 2, 'Fantasy'),
  ('978-0552166591', 'The Colour of Magic', 2, 'Fantasy'),
  ('978-0141354910', 'A Wizard of Earthsea', NULL, 'Fantasy');