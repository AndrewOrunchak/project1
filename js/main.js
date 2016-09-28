        // скорочення
        var df = document.forms;
        var bodyChild = document.body.children;
        // функція виклику елемента по ІД
        function getE(a) {
            return document.getElementById(a);
        }
        // 1.отримати код з дів у textarea
        // 2.показати форму з textarea
        // 3.приховати дів зі стилями
        df.changeCode.change.onclick = function () {
                df.addCode.text.value = bodyChild[0].innerHTML;
                df.addCode.style.display = 'inherit';
                getE("stl").style.display = 'none';
            }
            // 1.приховати форму з textarea
            // 2.показати дів зі стилями
        df.changeCode.stylize.onclick = function () {
                df.addCode.style.display = 'none';
                getE("stl").style.display = 'inherit';
            }
            // показати дів із створенням таблиці/списку
        df.addCode.add.onclick = function () {
                getE("add").style.display = "inherit";
                for (var i = 0; i < bodyChild.length - 3; i++) {
                    bodyChild[i].style.display = "none";
                }
            }
            // зберегти код з textarea у дів
        df.addCode.save.onclick = function () {
                bodyChild[0].innerHTML = df.addCode.text.value;
                df.addCode.text.value = '';
            }
            // зміна розмуру тексту через input type="radio"
        for (var i = 0; i < df.fSize.length; i++) {
            df.fSize.elements[i].onclick = function () {
                if (this.checked) {
                    getE("show").style.fontSize = this.value;
                }
            }
        }
        // зміни стилю та товщини тексту через input type="checkbox"
        df.fStyle.bld.onclick = function () {
            if (df.fStyle.bld.checked) {
                getE("show").style.fontWeight = this.value;
            } else {
                getE("show").style.fontWeight = "normal";
            }
        }
        df.fStyle.itl.onclick = function () {
                if (df.fStyle.itl.checked) {
                    getE("show").style.fontStyle = this.value;
                } else {
                    getE("show").style.fontStyle = "normal";
                }
            }
            // зміна шрифту через select
        for (var i = 0; i < df.fFamily.fml.length; i++) {
            df.fFamily.fml.onclick = function () {
                getE("show").style.fontFamily = this.value;
            }
        }
        // 1.2. зміна кольору для тексту і фону
        // 3. приховати табличку *miss-click*
        df.fColor.txtCol.onclick = function () {
            getE("myColor").style.display = "table";
            var tdCol = document.getElementsByTagName("td");
            for (var i = 0; i < tdCol.length; i++) {
                tdCol[i].onclick = function () {
                    getE("show").style.color = this.style.background;
                }
            }

        }
        df.fColor.bgCol.onclick = function () {
            getE("myColor").style.display = "table";
            var tdCol = document.getElementsByTagName("td");
            for (var i = 0; i < tdCol.length; i++) {
                tdCol[i].onclick = function () {
                    getE("show").style.background = this.style.background;
                }
            }
        }
        document.body.addEventListener("mouseup", function (click) {
                if (click.target != getE("myColor")) {
                    getE("myColor").style.display = "none";
                }
            })
            // додати табличку чи список
        for (var i = 0; i < df.newItem.length; i++) {
            df.newItem.elements[i].onclick = function () {
                if (df.newItem.elements[1].checked) {
                    getE("addList").style.display = "inherit";
                    getE("addTable").style.display = "none";
                    df.fLiTypeOl.style.display = "none";
                    df.fLiTypeUl.style.display = "none";
                    df.fLi.style.display = "none";
                } else {
                    getE("addList").style.display = "none";
                    getE("addTable").style.display = "inherit";
                }
            }
        }
        // додати код таблиці у textarea
        df.fTable.myTable.onclick = function () {
                var borW = df.border.bw.value;
                var tabCol = df.border.bCol.value;
                var tabType = df.border.bType.value;
                var tabR = df.cnr.r.value;
                var tabC = df.cnr.c.value;
                var tabW = df.hnw.h.value;
                var tabH = df.hnw.w.value;
                df.addCode.text.value += "<table style='border:" + borW + "px " + tabCol + " " + tabType + "' width=" + tabW + " height=" + tabH + ">";
                for (var i = 0; i < tabR; i++) {
                    df.addCode.text.value += "<tr>";
                    for (var j = 0; j < tabC; j++) {
                        df.addCode.text.value += "<td style='border:" + borW + "px " + tabCol + " " + tabType + "'></td>"
                    }
                    df.addCode.text.value += "</tr>";
                }
                df.addCode.text.value += "</table>";
                getE("add").style.display = "none";
                for (var i = 0; i < bodyChild.length - 3; i++) {
                    bodyChild[i].style.display = "inherit";
                }
            }
            // додати код списку у textarea
        df.fList.myList.onclick = function () {
                var li = df.fLi.liNum.value;
                var list = df.fType.liType.value;
                if (df.fLiTypeUl.style.display == "inherit") {
                    var listType = df.fLiTypeUl.liType.value;
                }
                if (df.fLiTypeOl.style.display == "inherit") {
                    var listType = df.fLiTypeOl.liType.value;
                }
                df.addCode.text.value += "<" + list + " type='" + listType + "'>";
                for (var i = 0; i < li; i++) {
                    df.addCode.text.value += "<li>Text</li>";
                }
                df.addCode.text.value += "</" + list + ">";
                getE("add").style.display = "none";
                for (var i = 0; i < bodyChild.length - 3; i++) {
                    bodyChild[i].style.display = "inherit";
                }
            }
            //
            // КР 2.0v 
            //
            // масив з інпутами 
        var tableInfo = [getE("tableWidth"), getE("tableHeight"), getE("tableRow"), getE("tableClmn"), getE("tableBorder"), getE("listItems")];
        // перевірка на правильність даних введених користувачем
        for (var i = 0; i < tableInfo.length; i++) {
            tableInfo[i].onblur = function () {
                if (this.value > 0) {
                    this.style.borderColor = "green";
                    this.style.backgroundColor = "#00ff00";
                    this.nextSibling.style.display = "none";
                } else {
                    this.style.borderColor = "red";
                    this.style.backgroundColor = "crimson";
                    this.nextSibling.style.display = "inherit";
                }
            }
        }
        //  покрокова інструкція створення списку
        for (var i = 0; i < df.fType.liType.length; i++) {
            df.fType.liType.onblur = function () {
                if (df.fType.liType.value == "ul") {
                    df.fLiTypeUl.style.display = "inherit";
                    df.fLiTypeOl.style.display = "none";
                } else {
                    df.fLiTypeOl.style.display = "inherit";
                    df.fLiTypeUl.style.display = "none";
                }
            }
        }
        for (var i = 0; i < df.fLiTypeUl.liType.length; i++) {
            df.fLiTypeUl.liType.onblur = function () {
                df.fLi.style.display = "inherit";
            }
        }
        for (var i = 0; i < df.fLiTypeOl.liType.length; i++) {
            df.fLiTypeOl.liType.onblur = function () {
                df.fLi.style.display = "inherit";
            }
        }

        df.changeCode.block.onclick = function () {
            getE("passBlock").style.display = "inherit";
            var x = document.getElementsByClassName("btn");
            for (var i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            document.getElementsByClassName("txt")[0].style.display = "none";
            getE("stl").style.display = 'none';
        }
        df.mypass.login.onclick = function () {
            getE("wrong").style.display = "none";
            var pass1 = "111";
            if (pass1 == df.mypass.pass.value) {
                getE("passBlock").style.display = "none";
                alert("Welcome! Press OK to continue");
                var x = document.getElementsByClassName("btn");
                for (var i = 0; i < x.length; i++) {
                    x[i].style.display = "inline-block";
                }
                document.getElementsByClassName("txt")[0].style.display = "inherit";
            } else {
                getE("wrong").style.display = "block";
                df.mypass.pass.value = "";
            }
        }
            