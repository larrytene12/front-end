// const ambilDataUser = () => {
//   return fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach(({ username, email }) => {
//         console.log(`Username: ${username}, \nEmail: ${email}`);
//       });
//     })
//     .catch((error) => console.error("Error:", error));
// };

const ambilDataUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    data.forEach(({ name }) => {
      console.log(`Nama Lengkap: ${name}`);
    })
  }
  catch (error) {
    console.error("Error:", error);
  }
};

export default ambilDataUser;