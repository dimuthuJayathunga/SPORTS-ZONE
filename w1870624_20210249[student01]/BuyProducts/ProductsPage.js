/*-------------------------------------- Products Page - [STUDENT 01] - JS ------------------------------------------*/

/* -----------------------------------------------selectpage script ---------------------------------- */
    function select(x) {
        list = document.getElementsByClassName("selectpage");
        for (i = 0; i < list.length; i++) {
            list[i].style.display = "none";
        }

        items = document.getElementsByClassName(x);
        for (j = 0; j < items.length; j++) {
            items[j].style.display = "inline-block";
        }
    }
/*-------------------------------------------- sliding -------------------------------------------*/
    var myIndex = 0;
    slidings();

    function slidings() {
        var i;
        var x = document.getElementsByClassName(" Slidings ");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none ";
        }
        myIndex++;
        if (myIndex > x.length) {
            myIndex = 1;
        }
        x[myIndex - 1].style.display = "block";
        setTimeout(slidings, 3000); 
    }
/*------------------------------------- message box ---------------------------------------------- */
    function showMessage() {

        var total = 0;
        var buy = "";
        var name = document.getElementById("firstname").value;
        var email = document.getElementById("email").value;
        var TelNo = document.getElementById("tel").value;


        var qtity1 = document.getElementById("Qtity1").value;
        var lkr1 = 32000.00;

        var qtity2 = document.getElementById("Qtity2").value;
        var lkr2 = 21000.00;

        var qtity3 = document.getElementById("Qtity3").value;
        var lkr3 = 35000.00;

        var qtity4 = document.getElementById("Qtity4").value;
        var lkr4 = 95000.00;

        var qtity5 = document.getElementById("Qtity5").value;
        var lkr5 = 52500.00;

        var qtity6 = document.getElementById("Qtity6").value;
        var lkr6 = 72400.00;

        var qtity7 = document.getElementById("Qtity7").value;
        var lkr7 = 15000.00;

        var qtity8 = document.getElementById("Qtity8").value;
        var lkr8 = 20000.00;

        var qtity9 = document.getElementById("Qtity9").value;
        var lkr9 = 17000.00;

        var qtity10 = document.getElementById("Qtity10").value;
        var lkr10 = 10500.00;

        var qtity11 = document.getElementById("Qtity11").value;
        var lkr11 = 25500.00;

        var qtity12 = document.getElementById("Qtity12").value;
        var lkr12 = 19000.00;

        var qtity13 = document.getElementById("Qtity13").value;
        var lkr13 = 12000.00;

        var qtity14 = document.getElementById("Qtity14").value;
        var lkr14 = 5500.00;

        var qtity15 = document.getElementById("Qtity15").value;
        var lkr15 = 8500.00;

        var qtity16 = document.getElementById("Qtity16").value;
        var lkr16 = 7500.00;

        var qtity17 = document.getElementById("Qtity17").value;
        var lkr17 = 9750.00;

        var qtity18 = document.getElementById("Qtity18").value;
        var lkr18 = 3000.00;

        var qtity19 = document.getElementById("Qtity19").value;
        var lkr19 = 38500.00;

        var qtity20 = document.getElementById("Qtity20").value;
        var lkr20 = 29500.00;

        var qtity21 = document.getElementById("Qtity21").value;
        var lkr21 = 80000.00;

        var qtity22 = document.getElementById("Qtity22").value;
        var lkr22 = 35000.00;

        var qtity23 = document.getElementById("Qtity23").value;
        var lkr23 = 30000.00;

        var qtity24 = document.getElementById("Qtity24").value;
        var lkr24 = 9000.00;

        var qtity25 = document.getElementById("Qtity25").value;
        var lkr25 = 8500.00;

        var qtity26 = document.getElementById("Qtity26").value;
        var lkr26 = 13000.00;

        var qtity27 = document.getElementById("Qtity27").value;
        var lkr27 = 7500.00;

        var qtity28 = document.getElementById("Qtity28").value;
        var lkr28 = 12000.00;

        var qtity29 = document.getElementById("Qtity29").value;
        var lkr29 = 3800.00;

        var qtity30 = document.getElementById("Qtity30").value;
        var lkr30 = 10000.00;

        var qtity31 = document.getElementById("Qtity31").value;
        var lkr31 = 5000.00;

        var qtity32 = document.getElementById("Qtity32").value;
        var lkr32 = 2000.00;

        var qtity33 = document.getElementById("Qtity33").value;
        var lkr33 = 4500.00;

        var qtity34 = document.getElementById("Qtity34").value;
        var lkr34 = 2100.00;

        var qtity35 = document.getElementById("Qtity35").value;
        var lkr35 = 1250.00;

        var check = 0;
        if (name != "") {
            if (email != "") {
                if (TelNo != "") {
                    if (qtity1 > 0) {
                        total = total + (lkr1 * qtity1);
                        buy = buy + "Product : MRF Bat    " + "\n"+ "Quantity: " + qtity1 + "\n" + "Price : LKR" + lkr1 +"\n" + "\n";
                    }
                    if (qtity2 > 0) {
                        total = total + (lkr2 * qtity2);
                        buy = buy +"Product : GM Bat    " + "\n"+ "Quantity: " + qtity2 + "\n" + "Price : LKR" + lkr2 + "\n" + "\n";
                    }
                    if (qtity3 > 0) {
                        total = total + (lkr3 * qtity3);
                        buy = buy +"Product : SS Bat    " + "\n"+ "Quantity: " + qtity3 + "\n" + "Price : LKR" + lkr3 + "\n" + "\n";
                    }
                    if (qtity4 > 0) {
                        total = total + (lkr4 * qtity4);
                        buy = buy +"Product : Kookaburra Bat    " + "\n"+ "Quantity: " + qtity4 + "\n" + "Price : LKR" + lkr4 + "\n" + "\n";
                    }
                    if (qtity5 > 0) {
                        total = total + (lkr5 * qtity5);
                        buy = buy +"Product : NB Bat    " + "\n"+ "Quantity: " + qtity5 + "\n" + "Price : LKR" + lkr5 + "\n" + "\n";
                    }
                    if (qtity6 > 0) {
                        total = total + (lkr6 * qtity6);
                        buy = buy +"Product : MRF Bat    " + "\n"+ "Quantity: " + qtity6 + "\n" + "Price : LKR" + lkr6 + "\n" + "\n";

                    }
                    if (qtity7 > 0) {
                        total = total + (lkr7 * qtity7);
                        buy = buy +"Product : SS Ball    " + "\n"+ "Quantity: " + qtity7 + "\n" + "Price : LKR" + lkr7 + "\n" + "\n";

                    }
                    if (qtity8 > 0) {
                        total = total + (lkr8 * qtity8);
                        buy = buy +"Product : Kookaburra Ball    " + "\n"+ "Quantity: " + qtity8 + "\n" + "Price : LKR" + lkr8 + "\n" + "\n";

                    }
                    if (qtity9 > 0) {
                        total = total + (lkr9 * qtity9);
                        buy = buy +"Product : Dukes Ball    " + "\n"+ "Quantity: " + qtity9 + "\n" + "Price : LKR" + lkr9 + "\n" + "\n";

                    }
                    if (qtity10 > 0) {
                        total = total + (lkr10 * qtity10);
                        buy = buy +"Product : Symactive Ball    " + "\n"+ "Quantity: " + qtity10 + "\n" + "Price : LKR" + lkr10 + "\n" + "\n";

                    }
                    if (qtity11 > 0) {
                        total = total + (lkr11 * qtity11);
                        buy = buy +"Product : Adidas Ball    " + "\n"+ "Quantity: " + qtity11 + "\n" + "Price : LKR" + lkr11 + "\n" + "\n";

                    }
                    if (qtity12 > 0) {
                        total = total + (lkr12 * qtity12);
                        buy = buy +"Product : CM Ball    " + "\n"+ "Quantity: " + qtity12 + "\n" + "Price : LKR" + lkr12 + "\n" + "\n";

                    }
                    if (qtity13 > 0) {
                        total = total + (lkr13 * qtity13);
                        buy = buy +"Product : Flash Ball    " + "\n"+ "Quantity: " + qtity13 + "\n" + "Price : LKR" + lkr13 + "\n" + "\n";

                    }
                    if (qtity14 > 0) {
                        total = total + (lkr14 * qtity14);
                        buy = buy +"Product : Cricket Jersey    " + "\n"+ "Quantity: " + qtity14 + "\n" + "Price : LKR" + lkr14 + "\n" + "\n";

                    }
                    if (qtity15 > 0) {
                        total = total + (lkr15 * qtity15);
                        buy = buy +"Product : Volleyball Kit    " + "\n"+ "Quantity: " + qtity15 + "\n" + "Price : LKR" + lkr15 + "\n" + "\n";

                    }
                    if (qtity16 > 0) {
                        total = total + (lkr16 * qtity16);
                        buy = buy +"Product : Netball Kit    " + "\n"+ "Quantity: " + qtity16 + "\n" + "Price : LKR" + lkr16 + "\n" + "\n";

                    }
                    if (qtity17 > 0) {
                        total = total + (lkr17 * qtity17);
                        buy = buy +"Product : Rugby Kit    " + "\n"+ "Quantity: " + qtity17 + "\n" + "Price : LKR" + lkr17 + "\n" + "\n";

                    }
                    if (qtity18 > 0) {
                        total = total + (lkr18 * qtity18);
                        buy = buy +"Product : Swimming Kit    " + "\n"+ "Quantity: " + qtity18 + "\n" + "Price : LKR" + lkr18 + "\n" + "\n";

                    }
                    if (qtity19 > 0) {
                        total = total + (lkr19 * qtity19);
                        buy = buy +"Product : NB Pads    " + "\n"+ "Quantity: " + qtity19 + "\n" + "Price : LKR" + lkr19 + "\n" + "\n";

                    }
                    if (qtity20 > 0) {
                        total = total + (lkr20 * qtity20);
                        buy = buy +"Product : GM Pads    " + "\n"+ "Quantity: " + qtity20 + "\n" + "Price : LKR" + lkr20 + "\n" + "\n";

                    }
                    if (qtity21 > 0) {
                        total = total + (lkr21 * qtity21);
                        buy = buy +"Product : Kookaburra Pads    " + "\n"+ "Quantity: " + qtity21 + "\n" + "Price : LKR" + lkr21 + "\n" + "\n";

                    }
                    if (qtity22 > 0) {
                        total = total + (lkr22 * qtity22);
                        buy = buy +"Product : CA Pads    " + "\n"+ "Quantity: " + qtity22 + "\n" + "Price : LKR" + lkr22 + "\n" + "\n";

                    }
                    if (qtity23 > 0) {
                        total = total + (lkr23 * qtity23);
                        buy = buy +"Product : MRF Pads    " + "\n"+ "Quantity: " + qtity23 + "\n" + "Price : LKR" + lkr23 + "\n" + "\n";

                    }
                    if (qtity24 > 0) {
                        total = total + (lkr24 * qtity24);
                        buy = buy +"Product : Wilson Volleyball    " + "\n"+ "Quantity: " + qtity24 + "\n" + "Price : LKR" + lkr24 + "\n" + "\n";

                    }
                    if (qtity25 > 0) {
                        total = total + (lkr25 * qtity25);
                        buy = buy +"Product : Tachikara Volleyball    " + "\n"+ "Quantity: " + qtity25 + "\n" + "Price : LKR" + lkr25 + "\n" + "\n";

                    }
                    if (qtity26 > 0) {
                        total = total + (lkr26 * qtity26);
                        buy = buy +"Product : MIKASA Volleyball    " + "\n"+ "Quantity: " + qtity26 + "\n" + "Price : LKR" + lkr26 + "\n" + "\n";

                    }
                    if (qtity27 > 0) {
                        total = total + (lkr27 * qtity27);
                        buy = buy +"Product : Baden Volleyball    " + "\n"+ "Quantity: " + qtity27 + "\n" + "Price : LKR" + lkr27 + "\n" + "\n";

                    }
                    if (qtity28 > 0) {
                        total = total + (lkr28 * qtity28);
                        buy = buy +"Product : Nike Volleyball    " + "\n"+ "Quantity: " + qtity28 + "\n" + "Price : LKR" + lkr28 + "\n" + "\n";

                    }
                    if (qtity29 > 0) {
                        total = total + (lkr29 * qtity29);
                        buy = buy +"Product : Nike Water Bottle    " + "\n"+ "Quantity: " + qtity29 + "\n" + "Price : LKR" + lkr29 + "\n" + "\n";

                    }
                    if (qtity30 > 0) {
                        total = total + (lkr30 * qtity30);
                        buy = buy +"Product : Adidas sport shoes    " + "\n"+ "Quantity: " + qtity30 + "\n" + "Price : LKR" + lkr30 + "\n" + "\n";

                    }
                    if (qtity31 > 0) {
                        total = total + (lkr31 * qtity31);
                        buy = buy +"Product : Sun Cream    " + "\n"+ "Quantity: " + qtity31 + "\n" + "Price : LKR" + lkr31 + "\n" + "\n";

                    }
                    if (qtity32 > 0) {
                        total = total + (lkr32 * qtity32);
                        buy = buy +"Product : Sport gloves    " + "\n"+ "Quantity: " + qtity32 + "\n" + "Price : LKR" + lkr32 + "\n" + "\n";

                    }
                    if (qtity33 > 0) {
                        total = total + (lkr33 * qtity33);
                        buy = buy +"Product : Gym Bag    " + "\n"+ "Quantity: " + qtity33 + "\n" + "Price : LKR" + lkr33 + "\n" + "\n";

                    }
                    if (qtity34 > 0) {
                        total = total + (lkr34 * qtity34);
                        buy = buy +"Product : Arm Sleeves    " + "\n"+ "Quantity: " + qtity34 + "\n" + "Price : LKR" + lkr34 + "\n" + "\n";

                    }
                    if (qtity35 > 0) {
                        total = total + (lkr35 * qtity35);
                        buy = buy +"Product : Sunglass    " + "\n"+ "Quantity: " + qtity35 + "\n" + "Price : LKR" + lkr35 + "\n" + "\n";

                    }


/* -------------------------------------------- print receipt --------------------------------------- */

                    printReceipt(name, buy, total, email);
                } else {
                    check++;
                    alert("You must enter your telephone number");
                 } 
            } else {
                check++;
                alert("You must enter your e-mail ");
            }
        } else {
            check++;
            alert("You must enter your name")
        }

        if (check == 0) {
            emptyTextFields();
        }
    }
    

    function printReceipt(name, buy, total, email) {
        if (total <= 0) {
            alert("You must enter quantity")
        } 
            else {
                alert(
            "Name: " + name + "\n" + "Email:" + email + "\n\n" + "Invoice Details\n" + 
             "-----------------------------------" + "\n" + buy + "\n" +
            "Total Bill:  LKR" + total + "\n\n" +
            "Thank you, " + name + ". Come Again."
              );
            }                          
   }

    function emptyTextFields() {
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("tel").value = "";
        document.getElementById("email").value = "";
        document.getElementById("address").value = "";
        document.getElementById("Qtity1").value = "0";
        document.getElementById("Qtity2").value = "0";
        document.getElementById("Qtity3").value = "0";
        document.getElementById("Qtity4").value = "0";
        document.getElementById("Qtity5").value = "0";
        document.getElementById("Qtity6").value = "0";
        document.getElementById("Qtity7").value = "0";
        document.getElementById("Qtity8").value = "0";
        document.getElementById("Qtity9").value = "0";
        document.getElementById("Qtity10").value = "0";
        document.getElementById("Qtity11").value = "0";
        document.getElementById("Qtity12").value = "0";
        document.getElementById("Qtity13").value = "0";
        document.getElementById("Qtity14").value = "0";
        document.getElementById("Qtity15").value = "0";
        document.getElementById("Qtity16").value = "0";
        document.getElementById("Qtity17").value = "0";
        document.getElementById("Qtity18").value = "0";
        document.getElementById("Qtity19").value = "0";
        document.getElementById("Qtity20").value = "0";
        document.getElementById("Qtity21").value = "0";
        document.getElementById("Qtity22").value = "0";
        document.getElementById("Qtity23").value = "0";
        document.getElementById("Qtity24").value = "0";
        document.getElementById("Qtity25").value = "0";
        document.getElementById("Qtity26").value = "0";
        document.getElementById("Qtity27").value = "0";
        document.getElementById("Qtity28").value = "0";
        document.getElementById("Qtity29").value = "0";
        document.getElementById("Qtity30").value = "0";
        document.getElementById("Qtity31").value = "0";
        document.getElementById("Qtity32").value = "0";
        document.getElementById("Qtity33").value = "0";
        document.getElementById("Qtity34").value = "0";
        document.getElementById("Qtity35").value = "0";
        document.getElementById("cardName").value = "";
        document.getElementById("cardNo").value = "";
        document.getElementById("ExpYearAndDate").value = "";
        document.getElementById("Notbill").value = "";
    }

    function myFunction(selectTag) {
        var listValue = selectTag.options[selectTag.selectedIndex].text;
        document.getElementById("js1").style.fontSize = listValue;
        document.getElementById("js2").style.fontSize = listValue;
        document.getElementById("js3").style.fontSize = listValue;
        document.getElementById("js4").style.fontSize = listValue;
        document.getElementById("js5").style.fontSize = listValue;
        document.getElementById("js6").style.fontSize = listValue;
        document.getElementById("js7").style.fontSize = listValue;
        document.getElementById("js8").style.fontSize = listValue;
        document.getElementById("js9").style.fontSize = listValue;
        document.getElementById("js10").style.fontSize = listValue;
        document.getElementById("js11").style.fontSize = listValue;
        document.getElementById("js12").style.fontSize = listValue;
        document.getElementById("js13").style.fontSize = listValue;
        document.getElementById("js14").style.fontSize = listValue;
        document.getElementById("js15").style.fontSize = listValue;
        document.getElementById("js16").style.fontSize = listValue;
        document.getElementById("js17").style.fontSize = listValue;
        document.getElementById("js18").style.fontSize = listValue;
        document.getElementById("js19").style.fontSize = listValue;
        document.getElementById("js20").style.fontSize = listValue;
        document.getElementById("js21").style.fontSize = listValue;
        document.getElementById("js22").style.fontSize = listValue;
        document.getElementById("js23").style.fontSize = listValue;
        document.getElementById("js24").style.fontSize = listValue;
        document.getElementById("js25").style.fontSize = listValue;
        document.getElementById("js26").style.fontSize = listValue;
        document.getElementById("js27").style.fontSize = listValue;
        document.getElementById("js28").style.fontSize = listValue;
        document.getElementById("js29").style.fontSize = listValue;
        document.getElementById("js30").style.fontSize = listValue;
        document.getElementById("js31").style.fontSize = listValue;
        document.getElementById("js32").style.fontSize = listValue;
        document.getElementById("js33").style.fontSize = listValue;
        document.getElementById("js34").style.fontSize = listValue;
        document.getElementById("js35").style.fontSize = listValue;
        document.getElementById("js36").style.fontSize = listValue;
        document.getElementById("js37").style.fontSize = listValue;
        document.getElementById("js38").style.fontSize = listValue;
        document.getElementById("js39").style.fontSize = listValue;
        document.getElementById("js40").style.fontSize = listValue;
        document.getElementById("js41").style.fontSize = listValue;
        document.getElementById("js42").style.fontSize = listValue;
        document.getElementById("js43").style.fontSize = listValue;
        document.getElementById("js44").style.fontSize = listValue;
        document.getElementById("js45").style.fontSize = listValue;
        document.getElementById("js46").style.fontSize = listValue;
        document.getElementById("js47").style.fontSize = listValue;
        document.getElementById("js48").style.fontSize = listValue;
        document.getElementById("js49").style.fontSize = listValue;
        document.getElementById("js50").style.fontSize = listValue;
        document.getElementById("js51").style.fontSize = listValue;
        document.getElementById("js52").style.fontSize = listValue;
        document.getElementById("js53").style.fontSize = listValue;
        document.getElementById("js54").style.fontSize = listValue;
        document.getElementById("js55").style.fontSize = listValue;
        document.getElementById("js56").style.fontSize = listValue;
        document.getElementById("js57").style.fontSize = listValue;
        document.getElementById("js58").style.fontSize = listValue;
        document.getElementById("js59").style.fontSize = listValue;
        document.getElementById("js60").style.fontSize = listValue;
        document.getElementById("js61").style.fontSize = listValue;
        document.getElementById("js62").style.fontSize = listValue;
        document.getElementById("js63").style.fontSize = listValue;
        document.getElementById("js64").style.fontSize = listValue;
        document.getElementById("js65").style.fontSize = listValue;
        document.getElementById("js66").style.fontSize = listValue;
        document.getElementById("js67").style.fontSize = listValue;
        document.getElementById("js68").style.fontSize = listValue;
        document.getElementById("js69").style.fontSize = listValue;
        document.getElementById("js70").style.fontSize = listValue;
    }
