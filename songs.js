let songs=["song1","song2","song3","song4","song5"];
console.log("songs:",songs);

songs.push("song6");
console.log("Added song:",songs);

let removedsong=songs.splice(1,1);
console.log("after of removed song:",songs);
console.log(" removed song:",removedsong);

console.log("length: ",songs.length);

console.log("first song:",songs[0]);
console.log("last song:",songs[songs.length-1]);

let songs2=["song7","song8","song9",]
songs=songs.concat(songs2);
console.log("After concat:",songs);


