
CREATE TABLE wines (
  id INTEGER PRIMARY KEY,
  grape TEXT,
  year INTEGER,
  region TEXT,
  price INTEGER,
  currency TEXT
);

-- INSERT INTO wines (id, grape, year, region, price, currency) VALUES (3, "XX", 2012, "Mendoza", 18, "AUD");

INSERT INTO wines VALUES (0, "Shiraz", 2012, "Margaret River", 126, "AUD");
INSERT INTO wines VALUES (1, "Tempranillo", 2014, "Barossa", 88, "AUD");
INSERT INTO wines VALUES (2, "Malbec", 2013, "Mendoza", 80, "AUD");
INSERT INTO wines VALUES (3, "XXX", 2012, "Mendoza", 18, "AUD");
INSERT INTO wines VALUES (4, "QQQ", 2016, "Margaret River", 29, "AUD");
INSERT INTO wines VALUES (5, "KKK", 2015, "Barossa", 36, "AUD");
INSERT INTO wines VALUES (6, "LKI", 2012, "Margaret River", 124, "AUD");
INSERT INTO wines VALUES (7, "Shiraz", 2014, "Margaret River", 56, "AUD");
INSERT INTO wines VALUES (8, "Shiraz", 2011, "NNNAAA", 36, "AUD");
