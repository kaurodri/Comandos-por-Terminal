/*
{
    let y = process.openStdin()
    y.addListener("data", res => {
        let x = res.toString().trim().split(/ +/g)
        bot.channels.cache.get("707689776265953340").send(x.join(" "));
    });

    //Falar com o terminal bot
    let ym = process.openStdin()
    y.addListener("data", res => {
        let x = res.toString().trim().split(/ +/g)
        let co = x[0];
        let k = res.toString().trim().slice(co.length).split(/ +/g)
        bot.channels.cache.get(x[0]).send(k.join(" "));
    });
}*/