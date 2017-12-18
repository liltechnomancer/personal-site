---
title: How to (nearly) perfectly replicate Matt Caron’s Wrecking Ball Datamosh Parody 
date: "2016-05-28"
---

**[Matt Caron](https://twitter.com/heyitsMattCaron) is pretty great at datamoshing**

[The Wrecking Ball Parody](https://vimeo.com/87545616) he did is one of the finest example of it as art that I have ever seen. The video he did for [Watsky](https://www.youtube.com/watch?v=NNRGTmu5Sok) also super amazing. So, naturally I wanted to see if I could replicate one of his videos.

_This is NOT an explanation of datamoshing, or an explanation on why it works. Also, you need Ruby installed on your system and need to be comfortable in the command line to follow this tutorial._

Before we get into this I want to say, I don’t actually think me and him used the same technique. As a web developer I wanted to do it mostly in the command line. I believe he did most of his work in Avidmux. Although I could be wrong. I want to be clear this is how I like to datamosh, there are plenty of other ways, I just think this is the most simple and efficient. All of the techniques take extensive knowledge of something, either feeling comfortable in the command line or being comfortable getting down and dirty with some pretty old software . That said, lets get started.
Alright. So lets jump in to the story. I wanted to replicate his Wrecking Ball video, since the Watsky is an original and I do not have un-datamoshed footage for it.


### Alright, lets get to the nitty gritty.

You need to install ffmepg I use Ruby a lot and therefore use homebrew. So this was easy enough for me. If you have no idea what I am talking about check this out. http://brew.sh/ now, if you have no idea what that is look up an Avidmux tutorial. I promise you will have an easier time and more fun with that if you are not familiar with the command line.

`brew install ffmpeg`

Next you need a video to datamosh. I used Wrecking Ball to compare my results with his before moving on to other projects. You can get that here

http://keepvid.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DMy2FRPA3Gf8

Use the 1080p version if you want it to look as close to his as possible. Next we are going to need to convert that from an .mp4 to an .avi. This is what ffmpeg is for. The parameters below are what I have found work best. Feel free to look up each piece individually and customize it to what works best for you.

`ffmpeg -i input.mp4 -vcodec libxvid -qscale 1 -g 100 -me_method epzs -bf 0 -mbd 0 -aspect 16:9 -acodec copy output.avi`

The basic rundown is an input .mp4 will go through the libxvid codec with a quality scale of 1. 0 is the lowest option but 1 works fine. -g sets the frame rate at 100. -me_method epzs is the default motion tracking method, -bf 0 sets b frames at zero. -mbd is something I don’t fully understand… oops. I know 0 is good for quality… Anyway, the rest is aspect ratio and codec, finally the output. WHEW! The hardest part is over.
Now please install both AVIglitch and Moshy.

```
gem install moshy
gem install aviglitch
```

Moshy makes my life slightly easier and is how I make datamoshed .gifs but you could do without it. AVIglitch is the core of this. Take your new .avi file and run it through AVIglitch.

`datamosh input.avi -o output.avi`

BOOM! Shits datamoshed yo! Take a look at that fine as video using vlc player. But the video is technically broken as hell.
So then I use moshy to bake that into a complete non-broken video.

`moshy -m bake -i input.avi -o output.avi`

Now the video is pretty much done, but you probably want it in an .mp4 again to add the music or make into a .gif.

`ffmpeg -i input.avi -strict -2 output.mp4`

gif

There, now you are officially done! Go post that shit somewhere. Thanks for reading and be sure to follow me on [twitter](https://www.twitter.com/lvrbrtsn).
