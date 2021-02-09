//defender, v1.0, 05.02.2021.

function urnekBtn() {
    var urnek = "[color=#FF8000][size=150]SportSport.ba liga - 25. sezona - 2. kolo[/size][/color]" + "\n" +
        "[color=#008000]" + "\n" +
        "Parovi za domaćine:" + "\n" +
        "[b]" + "\n\n" +
        "[/b]" + "\n" +
        "Parovi za goste:" + "\n" +
        "[b]" + "\n\n" +
        "[/b][/color]" + "\n" +
        "[color=#FF8000][size=150]1. liga[/size][/color]" + "\n\n\n\n" +
        "[color=#FF8000][size=150]2. liga[/size][/color]" + "\n\n\n\n" +
        "[color=#FF8000][size=150]3. liga[/size][/color]" + "\n\n\n\n";

    //console.log(urnek);
    navigator.clipboard.writeText(urnek);
}

function skriptaBtn() {
    var skripta = "var naslov = \"\"\;" + "\n" +
        "var sadrzaj = \"[b]\" + naslov + \"[/b]\" + \"\\n\\n\";" + "\n\n" +
        "for (var i = 1; i < $(\"div.postbody\").length; i++) {" + "\n" +
        "var korisnik = $(\"div.postbody\").find(\".author .username, .username-coloured\")[i].text;" + "\n" +
        "var sadrzajPosta = $(\"div.postbody\").find(\".content\")[i].innerText;" + "\n\n" +
        "sadrzajPosta = sadrzajPosta.replace(/GOOL/g, \" [color=#FF0000]GOOL[/color]\");" + "\n" +
        "sadrzajPosta = sadrzajPosta.replace(/^\\s*[\\r\\n]/gm, \"\");" + "\n\n" +
        "sadrzaj += \"[b]\" + korisnik + \"[/b]\" + \"\\n\" + sadrzajPosta + \"\\n\";" + "\n" +
        "}" + "\n\n" +
        "copy(sadrzaj);";

    //console.log(skripta);
    navigator.clipboard.writeText(skripta);
}