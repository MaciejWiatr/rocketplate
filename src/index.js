import "./main.scss";
function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(
    require.context("./images", false, /\.(png|jpe?g|svg|ico)$/)
);

console.log("Thanks for using my boilerplate! ❤");
