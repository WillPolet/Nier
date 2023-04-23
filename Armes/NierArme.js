

function OpenModal(Object) {
    let element = document.getElementById(Object)
    element.style.display = 'block'
  }
  function CloseModal(Object) {
    let element = document.getElementById(Object)
    element.style.display = 'none'
  }

/* Partie pour cliquer sur les divs */

var elements = document.querySelectorAll(".petite_epee_d");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function(){
  var parent = this.parentNode.parentNode.parentNode;
  var parentId = parent.id
  var idtab = petiteEpee.indexOf(parentId)
  CloseModal(petiteEpee[idtab])
  idtab+=1
  if (idtab > 12){
    idtab = 0
  }
  OpenModal(petiteEpee[idtab])
});
}


var elements = document.querySelectorAll(".petite_epee_g");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function(){
  var parent = this.parentNode.parentNode.parentNode;
  var parentId = parent.id
  var idtab = petiteEpee.indexOf(parentId)
  CloseModal(petiteEpee[idtab])
  idtab-=1
  if (idtab < 0){
    idtab = 12
  }
  OpenModal(petiteEpee[idtab])
});
}

/* Partie tableau avec les id  */

var petiteEpee = new Array()
petiteEpee[0]="Ancient_Overlord"
petiteEpee[1]="Beastbane"
petiteEpee[2]="Cruel_Oath"
petiteEpee[3]="Cypress_Stick"
petiteEpee[4]="Engine_Blade"
petiteEpee[5]="Faith"
petiteEpee[6]="Iron_Pipe"
petiteEpee[7]="Machine_Sword"
petiteEpee[8]="Phoenix_Dagger"
petiteEpee[9]="Type_3_Sword"
petiteEpee[10]="Type_40_Sword"
petiteEpee[11]="Virtuous_Contract"
petiteEpee[12]="YoRHa_Issue_Blade"



/* ------------------------------------- Partie pour cliquer sur les divs épées larges ------------------------------------------------ */

var elements = document.querySelectorAll(".epee_large_d");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function(){
  var parent = this.parentNode.parentNode.parentNode;
  var parentId = parent.id
  var idtab = epeeLarge.indexOf(parentId)
  CloseModal(epeeLarge[idtab])
  idtab+=1
  if (idtab > 8){
    idtab = 0
  }
  OpenModal(epeeLarge[idtab])
});
}


var elements = document.querySelectorAll(".epee_large_g");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function(){
  var parent = this.parentNode.parentNode.parentNode;
  var parentId = parent.id
  var idtab = epeeLarge.indexOf(parentId)
  CloseModal(epeeLarge[idtab])
  idtab-=1
  if (idtab < 0){
    idtab = 8
  }
  OpenModal(epeeLarge[idtab])
});
}

/* Partie tableau avec les id  */

var epeeLarge = new Array()
epeeLarge[0]="Beastlord"
epeeLarge[1]="Cruel_Blood_Oath"
epeeLarge[2]="Fang_of_Twins"
epeeLarge[3]="Iron_Will"
epeeLarge[4]="Machine_Axe"
epeeLarge[5]="Phoenix_Sword"
epeeLarge[6]="Type_3_Blade"
epeeLarge[7]="Type_40_Blade"
epeeLarge[8]="Virtuous_Treaty"

/* ------------------------------------- Partie pour cliquer sur les divs lances ------------------------------------------------ */

var elements = document.querySelectorAll(".lance_d");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function(){
  var parent = this.parentNode.parentNode.parentNode;
  var parentId = parent.id
  var idtab = lance.indexOf(parentId)
  CloseModal(lance[idtab])
  idtab+=1
  if (idtab > 8){
    idtab = 0
  }
  OpenModal(lance[idtab])
});
}


var elements = document.querySelectorAll(".lance_g");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function(){
  var parent = this.parentNode.parentNode.parentNode;
  var parentId = parent.id
  var idtab = lance.indexOf(parentId)
  CloseModal(lance[idtab])
  idtab-=1
  if (idtab < 0){
    idtab = 8
  }
  OpenModal(lance[idtab])
});
}

/* Partie tableau avec les id  */

var lance = new Array()
lance[0]="Beastcurse"
lance[1]="Cruel_Arrogance"
lance[2]="Dragoon_Lance"
lance[3]="Machine_Spear"
lance[4]="Phoenix_Lance"
lance[5]="Spear_Of_The_Usurper"
lance[6]="Type_3_Spear"
lance[7]="Type_40_Spear"
lance[8]="Virtuous_Dignity"


/* ------------------------------------- Partie pour cliquer sur les divs poings ------------------------------------------------ */

var elements = document.querySelectorAll(".poing_d");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function(){
  var parent = this.parentNode.parentNode.parentNode;
  var parentId = parent.id
  var idtab = poing.indexOf(parentId)
  CloseModal(poing[idtab])
  idtab+=1
  if (idtab > 7){
    idtab = 0
  }
  OpenModal(poing[idtab])
});
}


var elements = document.querySelectorAll(".poing_g");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function(){
  var parent = this.parentNode.parentNode.parentNode;
  var parentId = parent.id
  var idtab = poing.indexOf(parentId)
  CloseModal(poing[idtab])
  idtab-=1
  if (idtab < 0){
    idtab = 7
  }
  OpenModal(poing[idtab])
});
}

/* Partie tableau avec les id  */

var poing = new Array()
poing[0]="Angels_Folly"
poing[1]="Cruel_Lament"
poing[2]="Demons_Cry"
poing[3]="Emil_Heads"
poing[4]="Machine_Head"
poing[5]="Type_3_Fists"
poing[6]="Type_40_Fists"
poing[7]="Virtuous_Grief"