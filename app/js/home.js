let star = document.getElementById('stars');
    let moon = document.getElementById("moon");
    let mountain = document.getElementById("mountain");
    let text = document.getElementById("text");

    window.addEventListener('scroll', function () {
      var value = window.scrollY;

      star.style.top = value * 0.5 + 'px';
      moon.style.left = -value * 0.5 + 'px';
      mountain.style.top = -value * 0.15 + 'px';
      text.style.top = value * 0.5 + 'px';
    });

    let scrollPercentage = () => {
      let scrollProgress = document.getElementById("progress");
      let progressValue = document.getElementById("progress-value");
      let pos = document.documentElement.scrollTop;
      let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrollValue = Math.round(pos * 100 / calcHeight);
      scrollProgress.style.background = `conic-gradient(#bbbcce ${scrollValue}%, #020105 ${scrollValue}%)`;
    };
    window.onscroll = scrollPercentage;