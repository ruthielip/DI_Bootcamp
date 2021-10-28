     const robots = [
          {
            id: 1,
            name: 'Lev Nikolayevich',
            username: 'Prince.Myshkin',
            email: 'P.Myshkin@the.idiot',
            image: 'myshkin.png'
          },
          {
            id: 2,
            name: 'Alexei Fyodorovich Karamazov',
            username: 'Alyosha',
            email: 'monkman@aol.com',
            image: 'alyosha.png'
          },
          {
            id: 3,
            name: 'Ivan Fyodorovich Karamazov',
            username: 'Vanechka',
            email: 'Second_Brother@aol.com',
            image: 'ivan.png'
          },
          {
            id: 4,
            name: 'Dimitri Fyodorovich Karamazov',
            username: 'Mitya',
            email: 'Grushenkas.mine@goaway.org',
            image: 'dimitri.png'
          },
          {
            id: 5,
            name: 'Pavel Fyodorovich',
            username: 'Smerdyakov',
            email: 'Smerfjdkksv@mail.mail',
            image: 'smerdyakov.png'
          },
          {
            id: 6,
            name: 'Gavril Ardalyonovich Ivolgin',
            username: 'Ganya',
            email: 'GanyasEmail@gmail.com',
            image: 'gavril.png'
          },
          {
            id: 7,
            name: 'Rodion Romanovich Raskolnikov',
            username: 'Rodya',
            email: 'No_Crime_Here@my.house',
            image: 'rodya.png'
          },
          {
            id: 8,
            name: 'Nikolai Vsevolodovich',
            username: 'Stavrogin',
            email: 'better_thanU@mail.me',
            image: 'nikolai.png'
          },
          {
            id: 9,
            name: 'Pyotr Stepanovich Verkhovensky',
            username: 'Peter',
            email: 'NikolaisBFF@mail.metoo',
            image:'peter.png'
          },
          {
            id: 10,
            name: 'Ivan Pavlovitch',
            username: 'Shatov',
            email: 'plz_dont_kill_me@yahoo.co.il',
            image:'shatov.png'
          }
          ];


(function (){
  let containerDiv = document.createElement("div");
  let containerDivText = document.createTextNode("");
  containerDiv.appendChild(containerDivText);
  document.body.appendChild(containerDiv);
  containerDiv.classList.add("container");

  robots.forEach(element => {
    let {id, name, username, email, image} = element;
    let roboCard = document.createElement("div");
    roboCard.classList.add("robots")
    roboCard.setAttribute("id", id)
    containerDiv.appendChild(roboCard);

    let roboImage = document.createElement("img");
    roboImage.src = image;
    roboImage.classList.add("image")
    roboCard.appendChild(roboImage);

    let roboName = document.createElement("h2");
    let roboNameText = document.createTextNode(name);
    roboName.appendChild(roboNameText)
    roboName.classList.add("name")
    roboCard.appendChild(roboName);

    let roboEmail = document.createElement("p");
    let roboEmailText = document.createTextNode(email);
    roboEmail.appendChild(roboEmailText);
    roboEmail.classList.add("email")
    roboCard.appendChild(roboEmail)
  })

})();

(function(){
  let input = document.getElementById("input");
  input.addEventListener("input", searchRobots);
})()

function searchRobots(event){
  event.preventDefault()
  
  robots.filter((element)=>!element.name.toLowerCase().includes(event.target.value.toLowerCase()))
        .forEach((element)=> document.getElementById(element.id).style.display = "none");

  robots.filter((element)=>element.name.toLowerCase().includes(event.target.value.toLowerCase()))
        .forEach((element)=> document.getElementById(element.id).style.display = "block"); 
}
