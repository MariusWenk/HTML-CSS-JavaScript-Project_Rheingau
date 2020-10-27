function datum() {
    var d= new Date();
    var monat= d.getMonth() ;
    var Monatname = new Array("Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember");
    var date = (d.getDate()+"."+"&nbsp"+Monatname[monat]+"&nbsp"+d.getFullYear());
    document.getElementById("date1").innerHTML = date;
    }
    /* Programmierung für das Datum : ich habe die function (benannt datum()) erstellt
     * und dann die variable (benannt) d mit dem javascript tag new Date() erstellt.
     * Diese habe ich dann mit den tags für die Unterschiedlichen Datumsangaben kombiniert.
     * Die Variable Monatsname benennt mit new Array etws beliebiges neu.
     * Der unterste Befehl definiert die Ausführung der var date bei der Id date1.
     * variable Monatname (Array) und monat (Monatserstellung) werden mit Monatname[monat] verbunden 
     * Die variable date reiht andere variablen java tags und Schriftzeichen ("") aneinander
    */
function uhr() {
    var h = new Date();
    var minuten = h.getMinutes();
    var stunden = h.getHours();
    var stdnull = ((stunden < 10)?  "0"+stunden:stunden)
    var minnull = ((minuten < 10)?  "0"+minuten:minuten)
    var Uhrzeit = ("Es ist"+"&nbsp"+stdnull+":"+minnull+"&nbsp"+"Uhr")
    document.getElementById("clock").innerHTML = Uhrzeit;
}
  /* Die Uhr ist grundsätzlich gleich aufgebaut, wie das Datum, nur das wenn die 
   * stunden-  oder minutenzahl unter 0 ist eine null vor die Angabe gehängt wird.
   */
   
   /* In Javascript können grundsätzlich verschiedene voprogramierte Funktionen ausgeführt
    * werden, aber auch Funktionen mithilfe dieser und von Variablen (zur Vereinfachung)
    * programmiert werden. Es gib auch tags für "if" etwas passiert, mache das... 
    */
    
    /*Der Javascript Code "document.getElementById("Name der Id").innerHTML ="
     * definiert, dass bei Ausführung der Funktion (z.B. durch "onclick" oder "onscroll"),
     * in der der Code steht, bei der Id in der Klammer dass erscheint, was hinter dem = steht. 
     * Sachen in "" sind Texte (eins zu eins), ansonsten können auch Variablen oder Funktionen
     * so ausgeführt werden.
     */

    /* Informationen von SELFHTML*/
            