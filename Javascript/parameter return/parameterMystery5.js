//parameterMystery5


function main() {
    var mario = "luigi";
    var luigi = "bowser";
    var bowser = mario;
    var yoshi = "mario";

    mystery(yoshi, mario, bowser);
    mystery("mario", yoshi, "koopa troopa");
    mystery("goomba", "goomba", luigi);
    mystery(mario, luigi, "bros");
}

function mystery(mario, toad, luigi) {
    var bowser = luigi.toUpperCase();
    console.log(mario + " is to " + luigi + " as " + bowser + " is to " + toad);
}

//answers
//mystery(yoshi, mario, bowser);
//mario is to luigi as LUIGI is to luigi
//mystery("mario", yoshi, "koopa troopa");
//mario is to koopa troopa as KOOPA TROOPA is to mario
//mystery("goomba", "goomba", luigi);
//goomba is to bowser as BOWSER is to goomba
//mystery(mario, luigi, "bros");
//luigi is to bros as BROS is to bowser
