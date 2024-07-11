<!DOCTYPE html>
<html>
  <head>
    <title>PHP課題011</title>
    <meta charset="utf-8">
  </head>
  <body>
    <p>
      <?php
        $vegetables = [
          "名前" => "玉ねぎ",
          "値段" => 200,
          "産地" => "北海道"
        ];

        foreach($vegetables as $key => $value){
          echo "{$key} : {$value} <br>";

        }
      ?>
    </p>
    
  </body>
</html>


