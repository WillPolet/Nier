var images=new Array();
images[0]="713607.jpg";
images[1]="922109.jpg";
images[2]="1657218584_460_NieR-Automata-Pourquoi-jouer-au-chef-doeuvre-de-Yoko-Taro.jpg";
images[3]="1657218585_672_NieR-Automata-Pourquoi-jouer-au-chef-doeuvre-de-Yoko-Taro.jpg";
images[4]="nier-automata-anime-2.jpg";
images[5]="NieR-Automata-Pourquoi-jouer-au-chef-doeuvre-de-Yoko-Taro.jpg";
//images[6]="thumb_5002_post_big.avif"
var cpt=0;

var description=new Array();
description[0]="2B face à une machine recouverte de verdure.";
description[1]="2B dans une forêt qui a recouverte les ruines de la ville.";
description[2]="2B dans une ville blanche.";
description[3]="Parc d'attraction.";
description[4]="9S et 2B côte à côte.";
description[5]="Combat de 2B contre des androïdes.";
var cpt=0;


function changeimages(){
 document.getElementById("img").src=images[cpt];
}

function précédente(){
        cpt--;
        if(cpt < 0){cpt=images.length-1;};
        changeimages();
        writeline();
        
}

function suivante(){
        cpt++;
        if(cpt >= images.length){cpt=0;};
        changeimages();
        writeline();
        
}

function writeline() {
        div = document.getElementById('MyDiv1');
        div.innerHTML = description[cpt] ;
    }