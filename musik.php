<!DOCTYPE html>
<html lang="en">
<!-- Metadaten der Website -->
<head>
    <style>
        table {border: 1px solid;}
        td {border: 1px solid;}
        th {border: 1px solid;}
    </style>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Informatik-Labor/Musik</title>
<!--Implementieren der CSS Datei -->
    <link rel="stylesheet" href="main.css">
<!--  definiert einen HTML Abschnitt, der eingefügt werden soll, wenn ein Skripttyp auf der Seite nicht unterstützt wird -->    
    <noscript>Bitte aktiviere JavaScript um die volle Seite zu sehen!</noscript>
</head>
<!-- Inhalt des HTML Dokuments -->
<body class="light-theme">
<!-- Container erstellen für Überschrift und weitere Menüpunkte -->    
    <div class="navbar">
        <h1>
            Website für Informatik-Labor <br> Gruppe 3
        </h1>
<!-- Unterteilung des Containers für 2. Website+ Dark-Mode -->        
        <div>
            <button class="btn">Dark</button> <br>
            <a href="index.html">Hauptseite</a>
            <a href="hsv.html">HSV</a>
            <a href="info.html">Info</a>
        </div>
    </div>
<!-- Container erstellen + Musik Tabelle -->
    <div class="musik-tabelle">
        <form method="post">
            <input type="submit" name="button1"
                    class="button" value="Pop" />
            
            <input type="submit" name="button2"
                    class="button" value="Metal" />

            <input type="submit" name="button3"
                    class="button" value="Hip-Hop" />

            <input type="submit" name="button4"
                    class="button" value="Rest" />

            <input type="submit" name="button5"
                    class="button" value="Rock" />

            <input type="submit" name="button6"
                    class="button" value="Techno" />
        </form>
    </div>
<!-- Tabelle anlegen -->
    <div class="tabelle">
        <table>
            <tr>
            <td>Titel</td>
            <td>Künstler</td>
            <td>Länge</td>
            <td>Online seit</td>
            <td>Quick Link</td>
            <td>Genre</td>
            <td>Aufrufe bei Youtube*</td>
            <td>Likes bei Youtube*</td>
            </tr>
<!-- Handling des Button + Aufruf der sqlData Funktion mit Genre als Übergabeparameter -->
        <?php
        $button = "Metal";

            if(array_key_exists('button1', $_POST)) {
                sqlData("Pop");
            }
            else if(array_key_exists('button2', $_POST)) {
                sqlData("Metal");
            }
            else if(array_key_exists('button3', $_POST)) {
                sqlData("Hip-Hop");
            }
            else if(array_key_exists('button4', $_POST)) {
                sqlData("Rest");
            }
            else if(array_key_exists('button5', $_POST)) {
                sqlData("Rock");
            }
            else if(array_key_exists('button6', $_POST)) {
                sqlData("Techno");
            }
//Funktion, die die Daten aus der Datenbank zieht
            function sqlData($button)
            {
                $servername = "localhost";
                $username = "Labor2022";
                $password = "loveit";
                $dbname = "labor_info";

                // Create connection
                $conn = new mysqli($servername, $username, $password, $dbname);
                // Check connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }
//Select Befehl
                $sql = "SELECT * FROM `youtube-musikdaten_neu` WHERE `Genres` = '$button' ORDER BY RAND() LIMIT 3;";
                $result = $conn->query($sql); 
//Erstellen der Zeilen der Tabelle mit Daten aus der Datenbank
                if ($result->num_rows > 0) {

                    while($row = $result->fetch_assoc()){
                        echo '<tr>';
                        echo '<td>'.$row['Titel'].'</td>';
                        echo '<td>'.$row['Künstler'].'</td>';
                        echo '<td>'.$row['Länge'].'</td>';
                        echo '<td>'.$row['Online-Seit'].'</td>';
                        echo "<td><a href=\"".$row['Quick-Link']."\">zu Youtube</a></td>"; 
                        echo '<td>'.$row['Genres'].'</td>';
                        echo '<td>'.$row['Aufrufe bei Youtube Stand 10/05/22'].'</td>';
                        echo '<td>'.$row['Likes Stand 10/05/22'].'</td>';
                        echo '</tr>';
                    }
                } else {
                    echo "0 results";
                }

                $conn->close();
            }
        ?>
        </table>
        <p>* Stand 10.05.2022</p>
    </div>
<!-- Container erstellen + Bild reinladen -->
    <div class="infoimage-container">
        <img class="projekt-image" src="doc/Musik.jpg">
    </div>
<!--Implementieren des JavaSkriptes  -->    
    <script src="musik.js"></script>
    <script src="app.js"></script>
</body>
</html>