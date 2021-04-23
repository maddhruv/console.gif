function consoleGif(gif) {
  if (!gif) console.warn("Missing gif, will render default");
  console.log(
    "%c+",
    `font-size: 1px; padding: 20px 100vw; width: 100%; line-height: 360px; background: url(${
      gif ||
      "https://media1.tenor.com/images/2b9988dc00df4b9c67e44aca6eda6430/tenor.gif?itemid=10136432"
    }); background-size: 640px 360px; background-repeat: no-repeat; color: transparent;`
  );
}

console.gif = consoleGif;

module.exports = consoleGif;
