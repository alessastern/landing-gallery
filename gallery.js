var images = [
  {
    name: "Mona Lisa, Leonardo Da Vinci",
    link: "pictures/190430171751-mona-lisa.webp",
    description:
      "The Mona Lisa is a half-length portrait painting by the Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as 'the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world. The painting's novel qualities include the subject's enigmatic expression, monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.",
  },
  {
    name: "Girl with a pearl earring, Johannes Vermeer",
    link: "pictures/girl-with-a-pearl-earring-vermeer.webp",
    description:
      "Girl with a Pearl Earring (Dutch: Meisje met de parel) is an oil painting by Dutch Golden Age painter Johannes Vermeer, dated c. 1665. Going by various names over the centuries, it became known by its present title towards the end of the 20th century because of the earring worn by the girl portrayed there. The work has been in the collection of the Mauritshuis in The Hague since 1902 and has been the subject of various literary and cinematic treatments.",
  },
  {
    name: "Lady with an ermine, Leonardo Da Vinci",
    link: "pictures/lady-with-an-ermine-da-vinci.jpg",
    description:
      "The Lady with an Ermine is a portrait painting by the Italian Renaissance artist Leonardo da Vinci. Dated to c.1489–1491, the work is painted in oils on a panel of walnut wood. Its subject is Cecilia Gallerani, a mistress of Ludovico Sforza ('Il Moro'), Duke of Milan; Leonardo was painter to the Sforza court in Milan at the time of its execution. It is the second of only four surviving portraits of women painted by Leonardo, the others being Ginevra de' Benci, La Belle Ferronnière and the Mona Lisa.",
  },
];
images.forEach((image, index) => {
  var card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("id", `${index}`);

  var picture = document.createElement("div");
  picture.classList.add("card-img");
  picture.setAttribute("alt", `${image.name} painting`);
  picture.style = `background-image: url(${image.link})`;

  var title = document.createElement("p");
  title.textContent = `${image.name}`;

  var closerButton = document.createElement("button");
  closerButton.classList.add("closer");
  closerButton.setAttribute("onclick", `showCloser(${index})`);
  closerButton.textContent = "Closer look";

  card.appendChild(picture);
  card.appendChild(title);
  card.appendChild(closerButton);

  var gallery = document.getElementById("gallery");
  gallery.appendChild(card);
});

var showCloser = (id) => {
  document.getElementById("popup").classList.add("active");

  document.getElementsByClassName(
    "closer-img"
  )[0].style = `background-image: url(${images[id].link});`;

  document.getElementsByClassName("description")[0].textContent =
    images[id].description;
};

var closePopup = () => {
  document.getElementById("popup").classList.remove("active");

  document.getElementsByClassName("closer-img")[0].style = "";

  document.getElementsByClassName("description")[0].textContent = "";
};
