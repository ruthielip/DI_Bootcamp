function letterA()
  {
    for (let i = 0; i < 8; i++)
    {
      for (let j = 0; j <= 4; j++)
      {
        if (
          ((j == 0 || j == 4) && i != 0) ||
          (i == 0 && j != 0 && j != 4) ||
          i == 4)
         {
          document.write("*");
        } else if(j===2){
          document.write("\xa0\xa0\xa0\xa0")
        } else document.write(" ");
      }
      document.write("<br>");
    }
  }
letterA()