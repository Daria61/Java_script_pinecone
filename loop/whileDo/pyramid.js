let mur = 10 , star = "*", space= " ", j = 1, k =0, zai = mur;
while(k < mur ){
    while (j <= zai){
        space += " "
        j++
    } 
    console.log(space + star)
    star = star + "**" 
    j = 1;
    zai = zai - 1 
    space = " "
    k++
} 