# Redditfix
fixes a massive media player bug of reddit

the shreddit-player disturbs native media playback by replacing all controls meant to control media 
with stylish css and extra svg but also knocks out its webapp own css. 
Which leads technically to videos impossible to watch, all videos!
As long the cover image residing in shadowRoot below shreddit-player stays in front and triggeres also reddits "automatic" play-stop algo it will never work.

hint, hire better coders!
No i dont need that job. It took me 5minutes to figure that out. I dont want to die from boredom. 

well but here the code that fixes at least the interference. Happy debugging!
