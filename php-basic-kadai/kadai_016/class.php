<!DOCTYPE html>
<html>
  <head>
    <title>PHP課題016</title>
    <meta charset="utf-8">
  </head>
  <body>
    <p>
      <?php
      //Foodクラスを定義//////////////////////////////////////////////////////
      class Food {
        private $name;
        private $price;

        //construct
        public function __construct(string $name, int $price){
          $this->name = $name;//privateで定義しているプロパティにアクセス
          $this->price = $price;
        }

        //priceプロパティの値を出力するメソッド
        public function show_price() {
          return $this->price;
        }
      }

      //Foodクラスのインスタンスを作成
      $food = new Food("potato", 250);
      print_r($food);
      echo "<br>";

      //プロパティにアクセスし、値を出力する   
      echo $food->show_price() . "<br>";

      /////////////////////////////////////////////////////////////////////////

      

      //Animalクラスを定義//////////////////////////////////////////////////////
      class Animal {
        private $name;
        private $height;
        private $weight;

        //construct
        public function __construct(string $name, int $height, int $weight) {
          $this->name =$name;
          $this->height = $height;
          $this->weight = $weight;
        }

        public function show_height() {
          return $this->height;
        }
      }

      //Animalクラスのインスタンスを作成
      $animal = new Animal("dog", 60, 5000);
      print_r($animal);
      echo "<br>";

      //プロパティにアクセスし、値を出力する 
      echo $animal->show_height();
     
      ?>
    </p>
    
  </body>
</html>