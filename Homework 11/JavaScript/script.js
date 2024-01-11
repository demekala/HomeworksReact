// TODO : 1. წამოვიღოთ ფორმ იდ და მაგაზე მქონდეს ივენთი რომელიც იქნება submit
// TODO : 2. წამოვიღო ინფორმაცია იფნუთ ველებიდან
// TODO : 3. შევადაროთ ინფომრაცია ემთხვევა თუ არა მოცემულ პირობებს (name@gmail.com / password)
// TODO : 4. როცა დაემთხვევა ყველაფერი შევქმნა რანდომ რიცხვი რომელსაც შევინახავ ლოკალ სტორეჯში
// TODO : 5. გადავამისამართოთ ახალ გვერდზე

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  //  წამოვიღო ინფორმაცია ინფუთ ველებიდან
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "name@gmail.com" && password === "password") {
    const token = Math.random().toString(36).substr(2);
    console.log(token);
    localStorage.setItem("token", token);
    window.location.href = "./home.html";
  } else {
    alert("Wrong username or password");
  }
});

const token = localStorage.getItem("token");
if (token) {
  window.location.href = "./home.html";
}

// დავალება

// შექმენით სტატიკური მომხმარებლების სია მსგავსად

// user = [
//     {
//         username: "name",
//         password: "password"
//     },
//     {
//         username: "name",
//         password: "password"
//     },
//     {
//         username: "name",
//         password: "password"
//     },
//     {
//         username: "name",
//         password: "password"
//     },
// ]

// ამ მოცემული მასივიდან შენ უნდა ადგე და სადაც დაწერ პაროლის და უსეერნეიმის შემოწმებას
// მანდ უნდა შეამოწმო რო თუ ემთხვევა ჩაწერილი ვალიუები ამ მასვიში არსებულ დატას
