// Slick slider
$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: false,
    cssEase: 'linear'
});
// Two colours section
function angle() {
    var w = $(window).width();
    var h = $(".about").height();
    $('.about-top').css('border-right-width', w - 3);
    $('.about-top').css('border-bottom-width', h - 3);
}

$(document).ready(function() {

    $(window).bind("load", function() {
        angle();
    });

    $(window).resize(function() {
        angle();
    });

});
// Sidebar Menu
(function($) {
    $(document).ready(function() {
        $(document).ready(function() {

            $('#cssmenu > ul > li ul').each(function(index, e) {
                var count = $(e).find('li').length;
                var content = '<span class=\"cnt\">' + count + '</span>';
                $(e).closest('li').children('a').append(content);
            });
            $('#cssmenu > ul > li > a').click(function() {
                $('#cssmenu li').removeClass('active');
                $(this).closest('li').addClass('active');
                var checkElement = $(this).next();
                if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                    $(this).closest('li').removeClass('active');
                    checkElement.slideUp('normal');
                }
                if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
                    $('#cssmenu ul ul:visible').slideUp('normal');
                    checkElement.slideDown('normal');
                }
                if ($(this).closest('li').find('ul').children().length == 0) {
                    return true;
                } else {
                    return false;
                }
            });

        });

    });
})(jQuery);

// Letters Animation
Letters = function() {
    this.lettersDOM = null;
    this.active = null;
    this.letters = [];
    this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "i", "u", "v", "w", "x", "y", "z", "~", "&", "|", "^", "ç", "@", "]", "[", "{", "}", "ù", "*", "µ", "¤", "$", "£", "€", "°", ")", "(", "+", "-", "/", "<", ">", "²", "`", "é", "è", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    return this;
};

Letters.prototype.init = function(word) {

    this.lettersDOM = document.querySelectorAll('.letter');
    this.active = true;
    var i;
    var nextChar;
    var lettersMax = this.lettersDOM.length;

    for (i = 0; i < this.lettersDOM.length; i++) {

        if (word.charAt(i) != "")
            nextChar = word.charAt(i);
        else
            nextChar = false;

        this.letters.push(new Letter(this.lettersDOM[i], nextChar));

    }

    if (word.length > lettersMax) {

        var wordContainer = document.getElementById("word");

        for (i = lettersMax; i < word.length; i++) {
            var letterSpan = document.createElement('span');
            letterSpan.innerHTML = "";
            letterSpan.classList.add('letter');
            wordContainer.appendChild(letterSpan);
            this.letters.push(new Letter(letterSpan, word.charAt(i)));
        }
    }

    this.animate();

    return this;

};

Letters.prototype.animate = function() {
    var i;
    var random;
    var char;

    if (this.active) {

        window.requestAnimationFrame(this.animate.bind(this));

        var indexes = [];

        for (i = 0; i < this.letters.length; i++) {

            var current = this.letters[i];

            if (!current.isDead) {
                random = Math.floor(Math.random() * (this.alphabet.length - 0));
                char = this.alphabet[random];
                current.render(char);
            } else {
                indexes.push(i);
            }
        }

        for (i = 0; i < indexes.length; i++) {
            this.letters.splice(indexes[i], 1);
        }

        if (this.letters.length == 0) {
            this.stop();
        }
    }
};

Letters.prototype.start = function(word) {
    this.init(word);
};

Letters.prototype.stop = function() {
    this.active = false;
};

Letter = function(DOMElement, nextChar) {

    var scope = this;

    this.DOMEl = DOMElement;
    this.char = DOMElement.innerHTML;
    this.next = nextChar;
    this.speed = Math.floor(Math.random() * (500 - 10));
    this.total = 0;
    this.duration = 2000;
    this.animating = true;
    this.isDead = false;

    this.timer = setInterval(function() {
        if (scope.animating === true) {
            scope.total += scope.speed;
        }
        scope.animating = !scope.animating;
    }, this.speed);

    this.animate();

    return this;

};

Letter.prototype.animate = function() {
    var i;
    var random;

    if (!this.isDead) {
        window.requestAnimationFrame(this.animate.bind(this));
    }


    if (this.total < this.duration) {

        if (this.animating) {
            this.DOMEl.innerHTML = this.char;
        }

    } else {
        this.isDead = true;

        if (!this.next) {
            var parent = document.getElementById('word');
            parent.removeChild(this.DOMEl);
            return;
        }

        this.DOMEl.innerHTML = this.next;
    }
};

Letter.prototype.render = function(char) {

    if (!this.animating) {
        this.char = char;
    }

};

var word = ["CSS50", "PROMETHEUS"];
var nextWord = 1;

var letters = new Letters();

setTimeout(function() {
    letters.start(word[nextWord]);

    setInterval(function() {
        nextWord++;
        if (nextWord >= word.length)
            nextWord = 0;

        letters.start(word[nextWord]);
    }, 10000);


}, 2000);