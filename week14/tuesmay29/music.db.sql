/*CREATE TABLE artist (
    id serial primary key,
    name varchar,
    release date,
    sales INT,
    label varchar,
    artist_id INT
);
CREATE TABLE album (
ID serial primary key,
name varchar,
release date,
sales INT,
label varchar,
artist_id INT
);

CREATE TABLE track(
ID serial primary key,
album_id INT,
track_no INT,
duration INT,
name varchar ,
song_id INT
);

CREATE TABLE song(
ID serial primary key,
name varchar,
writer_id INT,
date DATE
);

CREATE TABLE song_writer (
ID serial primary key,
name varchar
);*/
--Q1
 --SELECT name FROM track
 --WHERE album_id = 2;
--Q2
--SELECT name from album 
--WHERE artist_id =3; 
--Q4/5
--SELECT name from album
--WHERE release < '01-01-2000';
--Q3
--SELECT track.name, MAX(duration) FROM track;
--Q1 in class
--select * from track
--join album on track.album_id = album.id
--where album.name ='Blackstar';
--Q2 in class
--SELECT * from album
--join artist on album.artist_id =artist.id
--where artist.name ='Johnny Cash'
--Q 11
--select song.id, song.name, count(track.song_id) from song
--join track on track.song_id = song.id
--join song_writer on song.writer_id = song_writer.id
--group by song.id
--order by count desc
--Q12 skipppppp!

