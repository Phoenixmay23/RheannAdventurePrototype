class Contents extends AdventureScene {
    constructor() {
        super("contents", "Table of Contents");
    }

    onEnter() {

        let story1 = this.add.text(this.w * 0.1, this.w * 0.1, "World's Biggest Coward")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("Coward's Hindsight")) {
                    this.showMessage("I wish I found the courage to tell you when I first realized I had feelings for you")
                } else {
                    this.showMessage("...When I first realized...")
                }
                
            })
            .on('pointerdown', () => this.gotoScene('story1'));

        let story2 = this.add.text(this.w * 0.1, this.w * 0.2, "After All, I'm Just a Gambler")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("Gambler's Insight")){
                    this.showMessage("Even though I enjoy spending time with you, I won't let your absence prevent me from enjoying myself")
                } else {
                this.showMessage("On relationships and emotional independence...");
                }
            })
            .on('pointerdown', () => this.gotoScene('story2'));
    
        let story3 = this.add.text(this.w * 0.1, this.w * 0.3, "Does that Make Me Insane?")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("Insanity's Final Safeguard")) {
                    this.showMessage("I don't know what scares me more, losing you, or the insanity I'd fall into as a result. What I do know is that talking to you makes me feel better, no matter what happens")
                } else {
                    this.showMessage("What scares me the most...");
                }
            })
            .on('pointerdown', () => this.gotoScene('story3'));

        let story4 = this.add.text(this.w * 0.1, this.w * 0.4, "Author's Note")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("Coward's Hindsight") || this.hasItem("Gambler's Insight") || this.hasItem("Insanity's Final Safeguard")) {
                    this.showMessage("One last story...")
                }
                else {
                    this.showMessage("Maybe you should read one of the other stories first?")
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("Coward's Hindsight") || this.hasItem("Gambler's Insight") || this.hasItem("Insanity's Final Safeguard")) {
                    this.gotoScene('authornote');
                } else {
                    this.tweens.add({
                        targets: story4,
                        x: '+=' + this.s,
                        repeat: 2,
                        yoyo: true,
                        ease: 'Sine.inOut',
                        duration: 100
                    });
                }
            });
    }
}

class Story1 extends AdventureScene {
    constructor() {
        super("story1", "World's Biggest Coward");
    }
    preload() {
        this.load.path = "d2 assets/";
        this.load.image('purp_stick', 'purp stick.png');
        this.load.image('yellow_stick', 'yellow stick.png');
    }
    onEnter() {
        this.add.text(this.w * 0.1, this.h * 0.9, "go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Back to Table of Contents");
            })
            .on('pointerdown', () => {
                this.gotoScene('contents');
            });
        
        let s1yellow = this.add.image(this.w * 0.65, this.h * 0.5, 'yellow_stick')
            .setScale(1.25)
        
        this.add.text(this.w * 0.025, this.h * 0.025, `We were walking down a hall in one of the museums we went to on a school trip 
It was just the two of us, we just split off from a larger group of friends.
I'm not sure what, how, or why, but something in that moment felt romantic.
Somehow this feels like a good moment to confess whatever feelings I have...`)
            .setFontSize(this.s * 1.5)

        let s1purp = this.add.image(this.w * 0.3, this.h * 0.5, 'purp_stick')
            .setScale(1)
        
        let say = this.add.text(this.w * 0.1, this.h * 0.5, "Say something?")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Should I say something?"))
            .on('pointerdown', () => {
                this.showMessage("No... I don't know how to articulate how I feel. Heck, I haven't even fully figured out how I feel in the first place.")
                this.tweens.add({
                    targets: say,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            })
        
        this.add.text(this.w * 0.1, this.h * 0.6, "Keep walking?")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Maybe I should just ignore my feelings and just keep moving along"))
            .on('pointerdown', () => {
                say.destroy()
                action.destroy()
                this.add.text(this.w * 0.1, this.h * 0.7, `I decided to do nothing, and just kept walking, 
hoping the thoughts I had would go away.
Little did I know, this moment would haunt my memory 
as my biggest regret for years to come.`)
                    .setFontSize(this.s * 1.5)
                this.gainItem("Coward's Hindsight")
                this.time.delayedCall(7500, () => this.gotoScene('contents'))
            })
        
        let action = this.add.text(this.w * 0.4, this.h * 0.6, "Take action?")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Maybe making a move will help me start a conversation?"))
            .on('pointerdown', () => {
                this.showMessage("No no, that's way too bold for me")
                this.tweens.add({
                    targets: action,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            })
    }
}

class Story2 extends AdventureScene {
    constructor() {
        super("story2", "After All, I'm just a Gambler");
    }
    preload(){
        this.load.path = "d2 assets/";
        this.load.image('swirl', 'spiral icon.png');
        this.load.image('forest', 'forest icon.png');
    }
    onEnter() {
        this.add.text(this.w * 0.1, this.h * 0.9, "go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Back to Table of Contents");
            })
            .on('pointerdown', () => {
                this.gotoScene('contents');
            });
        
        let swirl = this.add.image(this.w * 0.3, this.h * 0.5, 'swirl')
            .setInteractive()
            .on('pointerover', () => this.showMessage("Maybe watching the hypnosis show would make a good distraction?"))
            .on('pointerdown', () => {
                this.showMessage("Nah, I'd get too much second hand embarassment")
                this.tweens.add({
                    targets: swirl,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let trees = this.add.image(this.w * 0.4, this.h * 0.5, 'forest')
            .setInteractive()
            .on('pointerover', () => this.showMessage("Go for a walk in the forest?"))
            .on('pointerdown', () => {
                this.showMessage("That'll only remind me more of your absence...")
                this.tweens.add({
                    targets: trees,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });
        
        let casino = this.add.text(this.w * 0.4, this.h * 0.3, "CASINO")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Kill some time with 'gambling'?"))
            .on('pointerdown', () => {
                swirl.destroy()
                trees.destroy()
                this.add.text(this.w * 0.075, this.h * 0.7, `I went and played blackjack for a while, maybe a couple hours total. 
After the party, we ended up texting, some words you said,
            "I would like you to have fun, regardless of my presence"
helped me learn to have fun regardless of whether you were with me or not.`)
                    .setFontSize(this.s * 1.5)
                this.gainItem("Gambler's Insight")
                this.time.delayedCall(7500, () => this.gotoScene('contents'))
            })
    }
}

class Story3 extends AdventureScene {
    constructor() {
        super("story3", "Does that Make Me Insane?");
    }
    onEnter() {
        let back = this.add.text(this.w * 0.1, this.h * 0.9, "go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Back to Table of Contents");
            })
            .on('pointerdown', () => {
                this.gotoScene('contents');
            });
        
        let phonecase = this.add.rectangle(this.w * 0.3, this.h * 0.5, this.w * 0.4, this.h * 0.9, 0x055e3a)
        let phonescreen = this.add.rectangle(this.w * 0.3, this.h * 0.5, this.w * 0.3, this.h * 0.8, 0xd6d6d6)
        
        let bubble1  =this.add.rectangle(this.w * 0.3, this.h * 0.4, this.w * 0.25, this.h * 0.15, 0xaed6c8)
        let bubble1_text = this.add.text(this.w * 0.2, this.h * 0.4, "New voice message")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A voice message from you. It seems important..."))
            .on('pointerdown', () => {
                this.showMessage("I need to tell you something. They don't think I'm gonna make it, so they're pulling the plug. I'm sorry I have to tell you goodbye this way. I love you.")
                this.gainItem("Farewell Recording")
            })
        
        let bubble2 = this.add.rectangle(this.w * 0.3, this.h * 0.7, this.w * 0.25, this.h * 0.15, 0xaed6c8)
        let bubble2_text = this.add.text(this.w * 0.2, this.h * 0.7, "New text messages")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Text from your parents"))
            .on('pointerdown', () => {
                if (this.hasItem("Farewell Recording")) {
                    phonecase.destroy()
                    phonescreen.destroy()
                    bubble1.destroy()
                    bubble1_text.destroy()
                    bubble2.destroy()
                    bubble2_text.destroy()
                    back.destroy()
                    let text_bubble = this.add.rectangle(this.w * 0.1, this.h * 0.1, this.w * 0.8, this.h * 0.8)
                    let text_msg = this.add.text(this.w * 0.05, this.h * 0.1, `Hi, I know you're grieving our son's death the same as we are, 
he was your boyfriend after all. 
We're in the midst of planning a funeral,
and we have something to tell you regarding the planning.
We'd rather you not be there....
(the rest of the text goes over your head 
as you process what you've just read)`)
                        .setFontSize(this.s * 1.7)
                    this.time.delayedCall(5000, () => this.gotoScene('story3p2'))
                } else {
                    this.showMessage("The voice message seems more urgent, I should listen to that first.")
                    this.tweens.add({
                        targets: text_msg,
                        x: '+=' + this.s,
                        repeat: 2,
                        yoyo: true,
                        ease: 'Sine.inOut',
                        duration: 100
                    });
                }
            })
    }
}

class Story3P2 extends AdventureScene {
    constructor() {
        super("story3p2", "Does that Make Me Insane?");
    }
    onEnter() {
        let thought1 = this.add.text(this.w * 0.05, this.h * 0.1, `What do you mean I can't go to the funeral?
I love him too
I can't say one last goodbye?`)
            .setFontSize(this.s * 2)
            this.tweens.add({
            targets: thought1,
            alpha: { from: 1, to: 0 },
            easing: 'Quintic.in',
            duration: 5000
        });
        
        this.input.on('pointerdown', () => {
            thought1.destroy()
            this.add.text(this.w * 0.05, this.h * 0.3, `HAHAHAHAHAHAHAHAHAHA!
I'm not even allowed to grieve the person I love...
Why does anything matter anymore?
That's right, IT DOESN'T!
HAHAHAHAHAHA!`)
                .setFontSize(this.s * 1.75)
            this.time.delayedCall(7500, () => this.gotoScene('story3p3'))
        });

    }
}

class Story3P3 extends AdventureScene {
    constructor() {
        super("story3p3", "Does that Make Me Insane?");
    }
    onEnter() {
        let phonecase = this.add.rectangle(this.w * 0.5, this.h * 0.5, this.w * 0.4, this.h * 0.9, 0x055e3a)
        let phonescreen = this.add.rectangle(this.w * 0.5, this.h * 0.5, this.w * 0.3, this.h * 0.8, 0xd6d6d6)
        
        let bubble1  =this.add.rectangle(this.w * 0.5, this.h * 0.4, this.w * 0.25, this.h * 0.15, 0xaed6c8)
        let bubble1_text = this.add.text(this.w * 0.4, this.h * 0.4, "Send a text?")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Maybe starting a conversation will aleviate some stress?"))
            .on('pointerdown', () => {
                this.loseItem("Farewell Recording")
                this.gainItem("Insanity's Final Safeguard")
                phonecase.destroy()
                phonescreen.destroy()
                bubble1.destroy()
                bubble1_text.destroy()
                this.add.text(this.w * 0.1, this.h * 0.1, `I decided to text, nothing related to the nightmare I had,
but just a casual "Good Morning" and some small talk. 
Even without going into details, a confirmation that you
were alive and well helped me shake off my terrible nightmare.`)
                    .setFontSize(this.s * 1.5)
                this.time.delayedCall(7500, () => this.gotoScene('contents'))
            });
    }
}

class AuthorNote extends AdventureScene {
    constructor() {
        super("authornote", "Author's Note");
    }
    onEnter() {
        this.add.text(this.w * 0.1, this.h * 0.9, "go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Back to Table of Contents");
            })
            .on('pointerdown', () => {
                this.gotoScene('contents');
            });
        
        this.add.text(this.w * 0.4, this.h * 0.05, "Author's Note")
            .setFontSize(this.s * 2)
        
        this.add.text(this.w * 0.05, this.h * 0.1, `Thank you for taking the time to 
read this story to its end. To give this story the finishing touch,
I've left one last memory to the end. This one is quite personal
and adds a lot of context to the overall story, but I couldn't find
a good way to condense it down like the others. Read it if you
wish, I wouldn't blame you if you don't want to read even more text after this.`)
            .setFontSize(this.s * 1.5)
        
        this.add.text(this.w * 0.2, this.h * 0.75, "Close the book")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("I'm done reading for now."))
            .on('pointerdown', () => this.gotoScene('outro'))

        this.add.text(this.w * 0.6, this.h * 0.75, "Read on")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("May as well read one last story"))
            .on('pointerdown', () => this.gotoScene('authornotep2'))
    }
}

class AuthorNoteP2 extends AdventureScene {
    constructor() {
        super("authornotep2", "Until I Found You");
    }
    onEnter() {
        this.add.text(this.w * 0.05, this.h * 0.05, `The next song started; we could tell it was slow so we returned to our position of swaying from the prior song. 
I somehow knew this song well enough to sing along, yet I can’t recall hearing it before this exact moment.
I sang along with the chorus, “I would never fall in love again until I found her. I said I would never fall 
unless it’s you I fall into. I was lost within the darkness, but then I found her. I found you.” As I sang those 
lyrics, something about them resonated with me. With the love the singer has for this one girl, he is sure that 
he will never fall in love with anyone else, and he’s willing to wait as long as it takes for this girl to fall in 
love with him, even if that never ends up happening. I knew I loved you, I knew you didn’t return my feelings, yet 
no one else came close to catching my interest the way you did. That left me at the “bad ending” of this song; I 
would wait forever in vain for you to return my love. Yet, despite being at that ending, we were still in each 
others’ embrace, swaying to a love song as if we were something more than friends. It then hit me. This moment 
would be the closest I would ever get to you; after this it would only be waiting in the distance for something I 
wanted so badly, yet would never come to pass. The thought brought tears to my eyes, as I kept singing along and 
enjoying my time in your presence. I knew this moment was supposed to be happy, and the sight of me crying would 
only drag down the mood, so I put on my brightest smile hoping that it in addition to my eyes showed that I was 
truly enjoying the moment. 
    After going home that night, with the lyrics seared into my memory, I searched for the song to listen to again. 
Whenever I hear it, I think of this bittersweet moment, the sorrow of unrequited love alongside the happiness of 
being in your warm embrace. I try to focus on the sweetness in that bittersweet every time I think of this moment, 
that sweetness being enough to calm my mind and bring a smile to my face every time. I’ve played this song in the 
background many nights since that prom night, using the happy memory of us together to lull myself to sleep. As 
days, weeks, months have passed since this moment, I’ve never managed to recreate the tears I stopped myself from 
shedding that day; I’ll probably never be able to recreate the emotions of that moment ever. Even though it seems 
like I’m complaining, my inability to fully recreate that moment is a good thing. Things between us have changed 
since that day, and I count myself very lucky that the sad thoughts I had during that moment turned out to be untrue. 
    Even after I found out that the fears this song made me realize were just fears and not reality, I still listen 
to this song to remember the joy I had in that moment. The song reminds me not only of that moment’s joy, it reminds 
me of how lucky I am to have your presence brighten my life; that every memory I share with you is a blessing in 
my mundane life. You had many options to choose from, yet you chose me out of all of them, and although thought 
shocks me sometimes, I’m grateful for you and our relationship. Being with you makes me the luckiest and happiest 
person in the world.
`)
            .setFontSize(this.s * 1)
        
        this.add.text(this.w * 0.5, this.h * 0.75, "Close the book")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("I'm done reading for now."))
            .on('pointerdown', () => this.gotoScene('outro'))

        this.add.text(this.w * 0.2, this.h * 0.75, "Go Back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("I want to look at other things again"))
            .on('pointerdown', () => this.gotoScene('contents'))
        
        this.gainItem("Romantic's Gratitude")
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.rectangle(600, 540, 750, 800, 0x85200c);
        this.add.text(300, 200, "My Cherished Memories with You").setFontSize(35);
        
        this.add.text(1200, 350, "What is this book?")
            .setFontSize(50)
            .setInteractive()
            .on('pointerover', () => 
                this.add.text(1200, 400, `A collection of some of my core 
memories of our relationship.`)
                    .setFontSize(30)
            )

        this.add.text(1400, 750, "Open")
            .setFontSize(50)
            .setInteractive()
            .on('pointerdown', () => {
                this.cameras.main.fade(1000, 0,0,0);
                this.time.delayedCall(1000, () => this.scene.start('contents'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(500, 750, "Go Back")
            .setFontSize(50)
            .setInteractive()
            //.on('pointerover', () =>
            //    this.setColor('orange')
            //)
            .on('pointerdown', () => {
                this.cameras.main.fade(1000, 0,0,0);
                this.time.delayedCall(1000, () => this.scene.start('contents'));
        });
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Contents, Story1, Story2, Story3, Story3P2, Story3P3, AuthorNote, AuthorNoteP2, Outro],
    title: "Adventure Game",
});

