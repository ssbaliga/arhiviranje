var naslov = "FC Premier - Spartans FC 1:0";
var sadrzaj = "[b]" + naslov + "[/b]" + "\n\n";

for (var i = 1; i < $("div.postbody").length; i++) {
    var korisnik = $("div.postbody").find(".author .username, .username-coloured")[i].text;
    var sadrzajPosta = $("div.postbody").find(".content")[i].innerText;

    sadrzajPosta = sadrzajPosta.replace(/GOOL/g, " [color=#FF0000]GOOL[/color]");
    sadrzajPosta = sadrzajPosta.replace(/^\s*[\r\n]/gm, "");

    sadrzaj += "[b]" + korisnik + "[/b]" + "\n" + sadrzajPosta + "\n";
}

copy(sadrzaj);