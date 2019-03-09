DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS videos;
DROP TABLE IF EXISTS playlists_videos;
DROP TABLE IF EXISTS playlists;

CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(20) NOT NULL,
  email VARCHAR(40) NOT NULL,
  avatar VARCHAR(40)
);

CREATE TABLE videos (
  id SERIAL NOT NULL PRIMARY KEY,
  title VARCHAR(80) NOT NULL,
  filename VARCHAR(80) NOT NULL,
  user_id INT NOT NULL
);

CREATE TABLE playlists_videos (
  playlist_id INT NOT NULL,
  video_id INT NOT NULL
);

CREATE TABLE playlists (
  id SERIAL NOT NULL PRIMARY KEY,
  title VARCHAR(80) NOT NULL,
  user_id INT NOT NULL
);

INSERT INTO users (username, email) VALUES
  ('jjbenson85', 'jjbenson85@gmail.com'),
  ('gessy90', 'santorogessica4@gmail.com');

INSERT INTO videos (title, filename, user_id) VALUES
  ('Things to see and do in London''s Hottest Borough', 'croydon.mp4', 1),
  ('Top 10 shark attacks in Croydon', 'sharky-mcshark.mp4', 1),
  ('Relaxing music', 'relaxing.mp4', 2),
  ('Peppa Pig', 'peppa-pig.mp4', 2);

INSERT INTO playlists (title, user_id) VALUES
  ('Croydon', 1),
  ('Rel', 2);

INSERT INTO playlists_videos (playlist_id, video_id) VALUES
  (1, 1),
  (1, 2),
  (2, 3),
  (2, 4);

-- Get gessy90's playlists
SELECT
  title
FROM
  playlists
JOIN
  users
ON
  playlists.user_id = users.id
WHERE
  users.username = 'gessy90';

-- Get jjbenson85's videos
SELECT
  videos.title
FROM
  videos
JOIN
  users
ON
  users.id = video.users_id
WHERE
  users.username = 'jjbenson85';

-- Get all the videos in gessy90's playlists
SELECT
  playlists.title AS playlist,
  videos.title AS video
FROM
  playlists
JOIN
  playlists_videos
ON
  playlists.id = playlists_videos.playlist_id
JOIN
  videos
ON
  playlists_videos.video_id = videos.id
JOIN
  users
ON
  users.id = videos.user_id
WHERE
  users.username = 'gessy90';
