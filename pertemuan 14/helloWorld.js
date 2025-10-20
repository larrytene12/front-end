const helloWorld = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello World")
    },2000)
});
}

helloWorld();

export default helloWorld;
