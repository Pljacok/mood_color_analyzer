function analyzeMood() {
    const colors = [document.getElementById('color1').value, document.getElementById('color2').value, document.getElementById('color3').value];
    const mood = colors.includes("#ff0000") ? "Енергія та пристрасть!" : "Спокійний та розслаблений настрій.";
    document.getElementById("result").innerText = "Ваш настрій: " + mood;
}
