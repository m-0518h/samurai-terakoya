<!DOCTYPE html>
<html>
  <head>
    <title>PHP課題sort</title>
    <meta charset="utf-8">
  </head>
  <body>
    <p>
      <?php
      $array = [15, 4, 18, 23, 10];



      function sort_2way($array, $order){

        //TRUE
        if($order == TRUE){
          echo "昇順にソートします。<br>";
          sort($array);
          foreach($array as $key => $val) {
            echo "{$val} <br>";
          }

        //FALSE
        } else {
          echo "降順にソートします。<br>";
          rsort($array);
          foreach($array as $key => $val) {
            echo "{$val} <br>";
          }
        }    
      }

      sort_2way($array, TRUE);

      sort_2way($array, FALSE);



      


      ?>
    </p>
    
  </body>
</html>