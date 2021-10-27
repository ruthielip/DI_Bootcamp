class Video{
	constructor(title, uploader, time){
		this.title = title;
		this.uploader = uploader;
		this.time = time;
	}
	watch(){
		console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`)
	}
}

const queenVid = new Video('I want to break free music video', 'Queen', 226);
queenVid.watch()
const howToPancake = new Video('How to make a pancake', 'Billy', 60);
howToPancake.watch()