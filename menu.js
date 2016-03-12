var Menuproto = Object.create(HTMLElement.prototype);

Menuproto.crearmenu = function(numerocolumnas){

    var ddiv = {
        width: "150px",
        heigth: "20px"
    };
    var tablas = [];
    var divh = [];
    var divs = [];
    var divbloque =[];
    var divbloque2 =[];
    var divs2 =[];
    var tablas2=[];

    for (var i = 0; i < numerocolumnas; i++) {
        divh[i] = document.createElement('div');
        divh[i].style.float = 'left';
        divh[i].style.width = ddiv.width;
        divh[i].style.height = ddiv.heigth;
        divh[i].style.backgroundColor = 'rgba(0,0,1,0.5)';
        document.body.appendChild(divh[i]);
    }

    for (var i = 0; i < divh.length; i++) {
        divh[i].index = i;// Manera de agregarle una propiedad a un objeto.
        divh[i].onmouseover = function () {
            mostrar(this.index);
        };
    }
    for (var i = 0; i < divh.length; i++) {
        divh[i].index = i;// Manera de agregarle una propiedad a un objeto.
        divh[i].onmouseout = function () {
            ocultar(this.index);
        };
    }
    function mostrar(posicion){
        divbloque[posicion].style.display = 'block';
    }

    function ocultar (posicion){
        divbloque[posicion].style.display = 'none';
    }

    this.crearv = function(posicion,barras){

        var height = barras * 20 +"px";
        divbloque[posicion] = document.createElement("div");
        divbloque[posicion].style.position = 'absolute';
        divbloque[posicion].style.top = '28px';
        divbloque[posicion].style.width = ddiv.width;
        divbloque[posicion].style.height = height;
        divbloque[posicion].style.display = 'none'
        divh[posicion].appendChild(divbloque[posicion]);
        divs[posicion]=[];
        tablas[posicion]=[];
        for (var i = 0; i < barras; i++) {

            divs[posicion][i] = document.createElement('div');
            tablas[posicion][i] = document.createElement('table');
            divs[posicion][i].style.float = 'top';
            divs[posicion][i].style.width = ddiv.width;
            divs[posicion][i].style.height = ddiv.heigth;
            divs[posicion][i].style.backgroundColor = 'rgba(0,0,40,0.5)';
            tablas[posicion][i].insertRow(0);
            tablas[posicion][i].rows[0].insertCell(0);
            tablas[posicion][i].rows[0].insertCell(1);
            tablas[posicion][i].rows[0].insertCell(2);
            tablas[posicion][i].rows[0].cells[0].setAttribute("width", "25px");
            tablas[posicion][i].rows[0].cells[0].setAttribute("height", "20px");
            tablas[posicion][i].rows[0].cells[1].setAttribute("width","100px");
            tablas[posicion][i].rows[0].cells[1].setAttribute("height", "20px");
            tablas[posicion][i].rows[0].cells[2].setAttribute("width","25px");
            tablas[posicion][i].rows[0].cells[2].setAttribute("height", "20px");
            divs[posicion][i].appendChild(tablas[posicion][i]);
            divbloque[posicion].appendChild(divs[posicion][i]);
        }

        for (var i = 0; i < barras; i++) {
            divs[posicion][i].index = i;

            divs[posicion][i].onmouseover=function(){
                divs[posicion][this.index].style.backgroundColor = 'rgba(200,20,40,0.5)';
            }
            divs[posicion][i].onmouseout=function(){
                divs[posicion][this.index].style.backgroundColor = 'rgba(0,0,40,0.5)';
            }
        }

    };

    this.agregarsubmenu = function(posicionh,posicionv,barras){
        var img = document.createElement('img');
        img.src="flecha.png";
        img.style.width="15px";
        img.style.height="15px";
        tablas[posicionh][posicionv].rows[0].cells[2].appendChild(img);
        var height = barras * 20 +"px";
        divbloque2[posicionh] = document.createElement("div");
        divbloque2[posicionh].style.position = 'relative';
        divbloque2[posicionh].style.left = '150px';
        divbloque2[posicionh].style.top = '-26px';
        divbloque2[posicionh].style.border='2px';
        divbloque2[posicionh].style.width = ddiv.width;
        divbloque2[posicionh].style.height = height;
        divbloque2[posicionh].style.display = 'none';
        divs[posicionh][posicionv].appendChild(divbloque2[posicionh]);
        divs2[posicionh]=[];
        divs2[posicionh][posicionv]=[];
        tablas2[posicionh]=[];
        tablas2[posicionh][posicionv]=[];
        for (var i = 0; i < barras; i++) {

            divs2[posicionh][posicionv][i] = document.createElement('div');
            tablas2[posicionh][posicionv][i] = document.createElement('table');
            divs2[posicionh][posicionv][i].style.float = 'top';
            divs2[posicionh][posicionv][i].style.width = ddiv.width;
            divs2[posicionh][posicionv][i].style.height = ddiv.heigth;
            divs2[posicionh][posicionv][i].style.backgroundColor = 'rgba(0,20,40,0.5)';
            tablas2[posicionh][posicionv][i].insertRow(0);
            tablas2[posicionh][posicionv][i].rows[0].insertCell(0);
            tablas2[posicionh][posicionv][i].rows[0].insertCell(1);
            tablas2[posicionh][posicionv][i].rows[0].insertCell(2);
            tablas2[posicionh][posicionv][i].rows[0].cells[0].setAttribute("width", "25px");
            tablas2[posicionh][posicionv][i].rows[0].cells[0].setAttribute("height", "20px");
            tablas2[posicionh][posicionv][i].rows[0].cells[1].setAttribute("width","100px");
            tablas2[posicionh][posicionv][i].rows[0].cells[1].setAttribute("height", "20px");
            tablas2[posicionh][posicionv][i].rows[0].cells[2].setAttribute("width","25px");
            tablas2[posicionh][posicionv][i].rows[0].cells[2].setAttribute("height", "20px");
            divs2[posicionh][posicionv][i].appendChild(tablas2[posicionh][posicionv][i]);
            divbloque2[posicionh].appendChild(divs2[posicionh][posicionv][i]);
        }

        for (var i = 0; i < barras; i++) {
            divs2[posicionh][posicionv][i].index = i;

            divs2[posicionh][posicionv][i].onmouseover=function(){
                divs2[posicionh][posicionv][this.index].style.backgroundColor = 'rgba(200,20,40,0.5)';
            }
            divs2[posicionh][posicionv][i].onmouseout=function(){
                divs2[posicionh][posicionv][this.index].style.backgroundColor = 'rgba(0,20,40,0.5)';
            }
        }
        divs[posicionh][posicionv].onmouseover = function(){
            divbloque2[posicionh].style.display = 'block';
        };

        divs[posicionh][posicionv].onmouseout = function(){
            divbloque2[posicionh].style.display = 'none'
        };
    };

    this.descripcion = function(index,descripcion){
        divh[index].innerHTML = descripcion;
    }
    this.agregardescripcion = function(posicionh,posicionv,descripcion,src){
        tablas[posicionh][posicionv].rows[0].cells[1].innerHTML = descripcion;
        if(src != null) {
            var img = document.createElement('img');
            img.src = src;
            img.style.width = '15px';
            img.style.height = '15px';
            tablas[posicionh][posicionv].rows[0].cells[0].appendChild(img);
        }
    };
    this.agregardescripcion2 = function(posicionh,posicionv,posicionsv,descripcion){
        tablas2[posicionh][posicionv][posicionsv].rows[0].cells[1].innerHTML = descripcion;
    }


};

var menus = document.registerElement('x-menu',{prototype:Menuproto});