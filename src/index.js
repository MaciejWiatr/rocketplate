import "./main.scss";
// import images
(function importAll(r) {
    return r.keys().map(r);
})(require.context("./images", false, /\.(png|jpe?g|svg|ico)$/));
console.log("Thanks for using my boilerplate! ❤");
