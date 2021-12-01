new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Leave Before You Love Me",
          artist: "Marshmello x Jonas Brothers",
          cover: "./img/1.png",
          source: "./mp3/1.mp3",
          url: "https://www.youtube.com/watch?v=hmUyEDG7Jy0&ab_channel=MarshmelloVEVO",
          lyrics: "I see you calling I didn\'t wanna leave you like that It's five in the morning, yeah, yeah A hundred on the dash \'Cause my wheels are rolling Ain\'t taking my foot off the gas And it only took the one night To see the end of the line Staring deep in your eyes, eyes Dancing on the edge, \'bout to take it too far It\'s messing with my head, how I mess with your heart If you wake up in your bed, alone in the dark I\'m sorry, gotta leave before you love me Ay, ay, leave before you love me Ay, ay, leave before you love me Ay, ay, leave before you love me Ay, ay, leave before you love me I\'m so good at knowing Of when to leave the party behind Don\'t care if they notice, yeah, yeah, no I\'ll just catch a ride I'd rather be lonely, yeah Than wrapped around your body too tight Yeah, I\'m the type to get naked Won\'t give my heart up for breaking \'Cause I'm too gone to be stayin\', staying' (dancing on) Dancing on the edge, 'bout to take it too far It\'s messing with my head, how I mess with your heart If you wake up in your bed, alone in the dark I\'m sorry, gotta leave before you love me Ay, ay, leave before you love me Ay, ay, leave before you love me Ay, ay, leave before you love me Ay, ay, leave before you love me Dancing on the edge, take it too far Messing with my head, how I mess with your heart I\'m sorry, alone in the dark I\'m sorry Ay, ay, leave before you love me",
          favorited: true
        },
        {
          name: "Chandelier",
          artist: "Sia",
          cover: "./img/2.jpg",
          source: "./mp3/2.mp3",
          url: "https://www.youtube.com/watch?v=2vjPBrBU-TM",
          lyrics: "Party girls don\'t get hurt Can\'t feel anything, when will I learn\? I push it down, push it down I\'m the one \"for a good time call\" Phone\'s blowin\' up, ringin\' my doorbell I feel the love, feel the love One, two, three, one, two, three, drink One, two, three, one, two, three, drink One, two, three, one, two, three, drink Throw \'em back \'til I lose count I\'m gonna swing from the chandelier From the chandelier I\'m gonna live like tomorrow doesn\'t exist Like it doesn\'t exist I\'m gonna fly like a bird through the night Feel my tears as they dry I\'m gonna swing from the chandelier From the chandelier But I\'m holding on for dear life Won\'t look down, won\'t open my eyes Keep my glass full until morning light \'Cause I\'m just holding on for tonight Help me, I\'m holding on for dear life Won\'t look down, won\'t open my eyes Keep my glass full until morning light \'Cause I'm just holding on for tonight, on for tonight Sun is up, I\'m a mess Gotta get out now, gotta run from this Here comes the shame, here comes the shame One, two, three, one, two, three, drink One, two, three, one, two, three, drink One, two, three, one, two, three, drink Throw \'em back \'til I lose count I\'m gonna swing from the chandelier From the chandelier I\'m gonna live like tomorrow doesn\'t exist Like it doesn\'t exist I\'m gonna fly like a bird through the night Feel my tears as they dry I\'m gonna swing from the chandelier From the chandelier But I\'m holding on for dear life Won\'t look down, won\'t open my eyes Keep my glass full until morning light \'Cause I\'m just holding on for tonight Help me, I\'m holding on for dear life Won\'t look down, won\'t open my eyes Keep my glass full until morning light \'Cause I\'m just holding on for tonight On for tonight, on for tonight \'Cause I\'m just holding on for tonight Oh, I\'m just holding on for tonight On for tonight, on for tonight \'Cause I\'m just holding on for tonight \'Cause I\'m just holding on for tonight Oh, I\'m just holding on for tonight On for tonight, on for tonight",
          favorited: true
        },
        {
          name: "One Step Closer",
          artist: "Linkin Park",
          cover: "./img/3.jpg",
          source: "./mp3/3.mp3",
          url: "https://www.youtube.com/watch?v=4qlCC1GOwFw",
          lyrics: "I cannot take this anymore Saying everything I\'ve said before All these words, they make no sense I find bliss in ignorance Less I hear, the less you say You\'ll find that out anyway Just like before Everything you say to me \(Takes me one step closer to the edge\) \(And I'm about to break\) I need a little room to breathe \(\'Cause I\'m one step closer to the edge\) \(I\'m about to break\) I find the answers aren\'t so clear Wish I could find a way to disappear All these thoughts they make no sense I find bliss in ignorance Nothing seems to go away Over and over again Just like before Everything you say to me \(Takes me one step closer to the edge\) \(And I'm about to break\) I need a little room to breathe \(\'Cause I\'m one step closer to the edge\) \(I\'m about to break\) Everything you say to me \(Takes me one step closer to the edge\) \(And I'm about to break\) I need a little room to breathe \(\'Cause I\'m one step closer to the edge\) \(And I\'m about to\-\) Break, break, break\.\.\. Shut up when I\'m talking to you Shut up, shut up, shut up Shut up when I\'m talking to you Shut up, shut up, shut up Shut up I\'m about to break Everything you say to me \(Takes me one step closer to the edge\) \(And I'm about to break\) I need a little room to breathe \(\'Cause I\'m one step closer to the edge\) \(I'm about to break\) Everything you say to me \(Takes me one step closer to the edge\) \(And I'm about to break\) I need a little room to breathe \(\'Cause I\'m one step closer to the edge\) \(And I\'m about to\) Break",
          favorited: false
        },
        {
          name: "Someone Like You",
          artist: "Adele",
          cover: "./img/4.jpg",
          source: "./mp3/4.mp3",
          url: "https://www.youtube.com/watch?v=hLQl3WQQoQ0",
          lyrics: "I heard that you\'re settled down That you found a girl and you\'re married now I heard that your dreams came true Guess she gave you things, I didn\'t give to you Old friend, why are you so shy\? Ain\'t like you to hold back or hide from the light I hate to turn up out of the blue, uninvited But I couldn\'t stay away, I couldn\'t fight it I had hoped you\'d see my face And that you\'d be reminded that for me, it isn\'t over Never mind, I\'ll find someone like you I wish nothing but the best for you, too \"Don\'t forget me, \" I beg I remember you said \"Sometimes it lasts in love, but sometimes it hurts instead\" \"Sometimes it lasts in love, but sometimes it hurts instead\" You know how the time flies Only yesterday was the time of our lives We were born and raised in a summer haze Bound by the surprise of our glory days I hate to turn up out of the blue, uninvited But I couldn\'t stay away, I couldn\'t fight it I had hoped you\'d see my face And that you\'d be reminded that for me, it isn\'t over Never mind, I\'ll find someone like you I wish nothing but the best for you, too \"Don't forget me, \" I begged I remember you said \"Sometimes it lasts in love, but sometimes it hurts instead\" Nothing compares, no worries or cares Regrets and mistakes, they\'re memories made Who would have known how bittersweet this would taste\? Never mind, I\'ll find someone like you I wish nothing but the best for you \"Don't forget me, \" I beg I remember you said \"Sometimes it lasts in love, but sometimes it hurts instead\" Never mind, I\'ll find someone like you I wish nothing but the best for you, too \"Don't forget me, \" I begged I remember you said \"Sometimes it lasts in love, but sometimes it hurts instead\" \"Sometimes it lasts in love, but sometimes it hurts instead\" ",
          favorited: false
        },
        {
          name: "i hate u, i love u",
          artist: "gnash ft. olivia o'brien",
          cover: "./img/5.jpg",
          source: "./mp3/5.mp3",
          url: "https://www.youtube.com/watch?v=BiQIc7fG9pA&ab_channel=GarrettNash",
          lyrics: "Feeling used but I\'m still missing you And I can\'t see the end of this Just wanna feel your kiss against my lips And now all this time is passing by But I still can\'t seem to tell you why It hurts me every time I see you Realize how much I need you I hate you, I love you I hate that I love you Don\'t want to but I can\'t put Nobody else above you I hate you, I love you I hate that I want you You want her, you need her And I\'ll never be her I miss you when I can\'t sleep Or right after coffee Or right when I can\'t eat I miss you in my front seat Still got sand in my sweaters From nights we don\'t remember Do you miss me like I miss you\? Messed around and got attached to you Friends can break your heart too And I\'m always tired but never of you If I pulled a you on you, you wouldn\'t like that I put this reel out, but you wouldn\'t bite that I type a text but then I \'nevermind\' that I got these feelings but you never mind that Oh oh, keep it on the low You\'re still in love with me but your friends don\'t know If you wanted me you would just say so And if I were you, I would never let me go I don\'t mean no harm I just miss you on my arm Wedding bells were just alarms Caution tape around my heart You ever wonder what we could have been\? You said you wouldn\'t and you did Lie to me, lie with me, get your fix Now all my drinks and all my feelings are all mixed Always missing people that I shouldn\'t be missing Sometimes you gotta burn some bridges just to create some distance I know that I control my thoughts and I should stop reminiscing But I learned from my dad that it\'s good to have feelings When love and trust are gone I guess this is moving on Everyone I do right does me wrong So every lonely night, I sing this song I hate you, I love you I hate that I love you Don\'t want to, but I can\'t put Nobody else above you I hate you, I love you I hate that I want you You want her, you need her And I\'ll never be her All alone I watch you watch her Like she\'s the only girl you\'ve ever seen You don\'t care you never did You don\'t give a damn about me Yeah all alone I watch you watch her She\'s the only thing you\'ve ever seen How is it you never notice That you are slowly killing me I hate you, I love you I hate that I love you Don\'t want to but I can\'t put Nobody else above you I hate you, I love you I hate that I want you You want her, you need her And I'll never be her",
          favorited: true
        },
        {
          name: "New York City",
          artist: "The Chainsmokers",
          cover: "./img/6.png",
          source: "./mp3/6.mp3",
          url: "https://www.youtube.com/watch?v=rSwdh3tITwE&ab_channel=ChainsmokersVEVO",
          lyrics: "To know what it\'s like to love somebody the way I love you To know what it\'s like to love somebody the way I love you To know how it feels to kill yourself with bad habits To know what you want, know you\'ll never truly have it New York City, please go easy on me tonight New York City, please go easy on this heart of mine \'Cause I\'m losing my lover to the arms of another New York City, please go easy on me tonight New York City, please go easy on me, tonight When I went away, saw your face in my rear-view I know that look on your face, that I had lost you New York City, please go easy on me tonight New York City, please go easy on this heart of mine \'Cause I\'m losing my lover to the arms of another New York City, please go easy on me tonight You promised, I promised I never knew I could be this selfish Nights downtown, it\'s a new town But I keep thinking I see your face in the crowd But you\'re not here and you won\'t be \'Cause you love me enough to let go of me New York City, please go easy on me tonight New York City, please go easy on this heart of mine \'Cause I\'m losing my lover to the arms of another New York City, please go easy on me tonight",
          favorited: false
        },
        {
          name: "When I Was A Boy",
          artist: "Jeff Lynne's ELO",
          cover: "./img/7.jpg",
          source: "./mp3/7.mp3",
          url: "https://www.youtube.com/watch?v=tM34A80RTv4&ab_channel=ELOVEVO",
          lyrics: "When I was a boy, I had a dream All about the things I\'d like to be Soon as I was in my bed Music played inside my head When I was a boy, I had a dream When I was a boy, I learned to play Far into the night and drift away Don\'t wanna work on the milk or the bread Just wanna play my guitar instead When I was a boy, I had a dream And radio waves kept me company In those beautiful days When there was no money When I was a boy, I had a dream Finding out what life could really mean Don\'t want a job \'cause it drives me crazy Just wanna sing, \"Do you love me, baby\?\" When I was a boy, I had a dream  And radio waves kept me company In those beautiful days When there was no money When I was a boy, I had a dream When I was a boy",
          favorited: true
        },
        {
          name: "Say You Won't Let Go",
          artist: "James Arthur",
          cover: "./img/8.jpeg",
          source: "./mp3/8.mp3",
          url: "https://www.youtube.com/watch?v=0yW7w8F2TVA&ab_channel=JamesAVEVO",
          lyrics: "I met you in the dark, you lit me up You made me feel as though I was enough We danced the night away, we drank too much I held your hair back when You were throwing up Then you smiled over your shoulder For a minute, I was stone-cold sober I pulled you closer to my chest And you asked me to stay over I said, I already told ya I think that you should get some rest I knew I loved you then But you\'d never know \'Cause I played it cool when I was scared of letting go I know I needed you But I never showed But I wanna stay with you until we're grey and old Just say you won\'t let go Just say you won\'t let go I\'ll wake you up with some breakfast in bed I\'ll bring you coffee with a kiss on your head And I\'ll take the kids to school Wave them goodbye And I\'ll thank my lucky stars for that night When you looked over your shoulder For a minute, I forget that I\'m older I wanna dance with you right now Oh, and you look as beautiful as ever And I swear that everyday you\'ll get better You make me feel this way somehow I\'m so in love with you And I hope you know Darling, your love is more than worth its weight in gold We\'ve come so far, my dear Look how we\'ve grown And I wanna stay with you until we're grey and old Just say you won\'t let go Just say you won\'t let go I wanna live with you Even when we\'re ghosts \'Cause you were always there for me when I needed you most I\'m gonna love you \'til My lungs give out I promise \'til death we part like in our vows So I wrote this song for you, now everybody knows That it'\s just you and me \'til we're grey and old Just say you won\'t let go Just say you won\'t let go Just say you won\'t let go Oh, just say you won\'t let go",
          favorited: false
        },
        {
          name: "Like I'm Gonna Lose You",
          artist: "Meghan Trainor",
          cover: "./img/9.jpg",
          source: "./mp3/9.mp3",
          url: "https://www.youtube.com/watch?v=2-MBfn8XjIU&ab_channel=MeghanTrainorVEVO",
          lyrics: "I found myself dreaming In silver and gold Like a scene from a movie That every broken heart knows we were walking on moonlight And you pulled me close Split second and you disappeared and then I was all alone I woke up in tears With you by my side A breath of relief And I realized No, we\'re not promised tomorrow So I\'m gonna love you Like I\'m gonna lose you I\'m gonna hold you Like I\'m saying goodbye wherever we\'re standing I won\'t take you for granted \'cause we\'ll never know when When we\'ll run out of time so I\'m gonna love you Like I\'m gonna lose you I\'m gonna love you like I\'m gonna lose you In the blink of an eye Just a whisper of smoke You could lose everything The truth is you never know So I\'ll kiss you longer baby Any chance that I get I\'ll make the most of the minutes and love with no regrets Let\'s take our time To say what we want Use what we got Before it\'s all gone \'Cause no, we\'re not promised tomorrow So I\'m gonna love you Like I\'m gonna lose you I\'m gonna hold you Like I\'m saying goodbye wherever we\'re standing I won\'t take you for granted \'cause we\'ll never know when When we\'ll run out of time so I\'m gonna love you Like I\'m gonna lose you I\'m gonna love you like I\'m gonna lose you Hey Whoa I\'m gonna love you Like I\'m gonna lose you I\'m gonna hold you Like I\'m saying goodbye wherever we\'re standing I won\'t take you for granted \'cause we\'ll never know when When we\'ll run out of time so I\'m gonna love you Like I\'m gonna lose you I\'m gonna love you like I\'m gonna lose you", 
          favorited: false
        },
        {
          name: "Let Her Go",
          artist: "Passenger",
          cover: "./img/10.jpg",
          source: "./mp3/10.mp3",
          url: "https://www.youtube.com/watch?v=RBumgq5yVrA&ab_channel=Passenger",
          lyrics: "Well, you only need the light when it\'s burning low Only miss the sun when it starts to snow Only know you love her when you let her go Only know you\'ve been high when you\'re feeling low Only hate the road when you\'re missing home Only know you love her when you let her go And you let her go Staring at the bottom of your glass Hoping one day you\'ll make a dream last But dreams come slow, and they go so fast You see her when you close your eyes Maybe one day, you\'ll understand why Everything you touch surely dies But you only need the light when it\'s burning low Only miss the sun when it starts to snow Only know you love her when you let her go Only know you\'ve been high when you\'re feeling low Only hate the road when you\'re missing home Only know you love her when you let her go Staring at the ceiling in the dark Same old empty feeling in your heart \'Cause love comes slow, and it goes so fast Well, you see her when you fall asleep But never to touch and never to keep \'Cause you loved her too much, and you dived too deep Well, you only need the light when it\'s burning low Only miss the sun when it starts to snow Only know you love her when you let her go Only know you\'ve been high when you're feeling low Only hate the road when you\'re missing home Only know you love her when you let her go And you let her go Oh, oh, mm, oh And you let her go Oh, oh, uh, uh Well, you let her go \'Cause you only need the light when it\'s burning low Only miss the sun when it starts to snow Only know you love her when you let her go Only know you\'ve been high when you\'re feeling low Only hate the road when you're missing home Only know you love her when you let her go \'Cause you only need the light when it\'s burning low Only miss the sun when it starts to snow Only know you love her when you let her go Only know you\'ve been high when you're feeling low Only hate the road when you\'re missing home Only know you love her when you let her go And you let her go",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
