let RD = "УР04260103"
function getRegisterinfo(register){
    if(correctReg(RD)){
        console.log("RD zuv oruullaa");
    }else {
        console.log("Buruu baina. Dahin oruulna uu");
    }
    getBirthDay(RD)
    getBirthRegion(RD)
    getGender (RD)
}
getRegisterinfo(RD)
function correctReg (register){
    let n1 = Number.isInteger(Number(register.substring(0,1))), n2 = Number.isInteger(Number(register.substring(1,2))) ;
    if (register.length == 10 && n1 == false  && n2 == false ){
        return true
        
    }else{
        return false 
    }
}
function getGender (register){
    if (correctReg){
        if ((register.substring(8, 1) % 2 == 0 )){
            console.log("emegtei");
        } else{
            console.log("eregtei");
        }
    }
}
function getBirthDay (register){
    if (correctReg){
        if (register.substring(4, 5) == 2 || register.substring(4, 5) == 3 ){
            on = 2000 + Number(register.substring(2, 4))
        } else{
            on = 1900 + Number(register.substring(2, 4));
        }
        if (register.substring(4,6) <= 12){
            sar = register.substring(4,6)
        } else {
            sar = "0" + register.substring(5,6)
        }
        udur = register.substring(6,8)
        console.log(on + "-" + sar + "-" + udur);
    }
}
function getBirthRegion(register){
    switch (register.substring(0,1)){
        case "А" :
            gazar = "Архангай"
            break;
        case 'Б' :
            gazar = "Баян-Өлгий"
            break;
        case 'В' :
            gazar = "Баянхонгор"
            break;
        case 'Г' :
            gazar = "Булган"
            break;
        case 'Д' :
            gazar = "Говь-Алтай"
            break;
        case 'Е' :
            gazar = "Дорноговь"
            break;
        case 'Ж' :
            gazar = "Дорнод"
            break;
        case 'З' :
            gazar = "Дундговь"
            break;
        case 'И' :
            gazar = "Завхан"
            break;
        case 'Й' :
            gazar = "Өвөрхангай"
            break;
        case 'К' :
            gazar = "Өмнөговь"
            break;
        case 'Л' :
            gazar = "Сүхбаатар"
            break;
        case 'М' :
            gazar = "Сэлэнгэ"
            break;
        case 'Н' :
            gazar = "Төв"
            break;
        case 'О' :
            gazar = "Увс"
            break;
        case 'П' :
            gazar = "Ховд"
            break;
        case 'Р' :
            gazar = "Хөвсгөл"
            break;
        case 'С' :
            gazar = "Хэнтий"
            break;
        case 'Т' :
            gazar = "Дархан-Уул"
            break;
        case 'Ф' :
            gazar = "Орхон"
            break;
        case 'Х' :
            gazar = "Говьсүмбэр"
            break;
        case 'У' :
            gazar = "Улаанбаатар"
            break;
        case 'Ц' :
            gazar = "Улаанбаатар"
            break;
    }
    console.log(gazar);
}
