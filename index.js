process.openStdin().addListener("data", res => {
    let terminal = res.toString().trim();

    let digitado = terminal.split(/ +/g);

    console.log(digitado.join(" "));
});