const info = document.getElementById('info');

const memberDescriptions = [
    "Squirrel is a maintainer of Freakybob Team, the owner of freakybob.site, and is a back and front end developer. You can visit his website at <a id='ignorefont' href='https://squirrel.freakybob.site'>https://squirrel.freakybob.site</a>!",
    "Wish is a maintainer of Freakybob Team and also made the Freakybob Team organization. You can visit Wish's website at <a id='ignorefont' href='https://wish.freakybob.site'>https://wish.freakybob.site</a>!",
    "Nomaakip (aka noma, hacks.guide) is a maintainer at Freakybob Team, who is a back and front end developer. You can visit her website at <a id='ignorefont' href='https://swag.freakybob.site'>https://swag.freakybob.site</a>!",
    "Names is a developer at Freakybob Team, who is really stupid. You can visit his website at <a id='ignorefont' href='https://names.freakybob.site'>https://names.freakybob.site</a>!",
    "#2 Twitter Hater (aka twitter hater, twtr hater) is an artist at Freakybob Team who made the original MaintenanceBob (who was the old mascot), and uses Krita for their creations. You can visit her SpaceHey at <a id='ignorefont' href='https://spacehey.com/nvtbvster'>https://spacehey.com/nvtbvster</a>!",
    "Mpax235 (aka mpax) is a developer at Freakybob Team, and learns a lot about different languages really fast. You can visit his website at <a id='ignorefont' href='https://mpax235.freakybob.site'>https://mpax235.freakybob.site</a>!",
    "Hypercuber (aka hyper) is an artist at Freakybob Team, who made the logo and uses Canva for their creations. You can visit their website at <a id='ignorefont' href='https://hyperstraw.straw.page/'>https://hyperstraw.straw.page/</a>!",
    ""
];

function showMember(memberID) {
    info.innerHTML = memberDescriptions[memberID];
}