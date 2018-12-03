function temperatureBug()
{
    var temp = Number(document.temperature.input1.value);
    if (temp > 75)
    {
        return "Summer";
    }
    else if (temp > 65)
    {
        return "Spring";
    }
    else if (temp > 50)
    {
        return "Fall";
    }
    else
    {
        return "Winter";
    }
}

function calorieCounter()
{
    var cal = document.CalorieCounter.input1.value.toLowerCase();
    var num = Number(document.CalorieCounter.minutes.value);
    if (cal == 'running')
        if (num == 0)
        {
            return "You burned 0 Calories";
        }
        else if (num > 59)
        {
            return "You burned 1500 Calories";
        }
        else if (num > 44)
            {
                return "You burned 1000 Calories";
            }
            else if (num > 29)
        {
            return "You burned 800 Calories";
        }
        else if (num > 14)
        {
            return "You burned 600 Calories";
        }
        else if (num > 4)
        {
            return "You burned 400 Calories";
        }
        else if (num > 0)
        {
            return "You burned 135 Calories";
        }
        else if (num > 60)
        {
            return "Stop running!";
        }

   if (cal == 'walking')
       if (num == 0)
       {
           return "You burned 0 Calories";
       }
       else if (num > 59)
       {
           return "You burned 750 Calories";
       }
       else if (num > 44)
       {
           return "You burned 600 Calories";
       }
       else if (num > 29)
       {
           return "You burned 450 Calories";
       }
       else if (num > 14)
       {
           return "You burned 300 Calories";
       }
       else if (num > 4)
       {
           return "You burned 150 Calories";
       }
       else if (num > 0)
       {
           return "You burned 65 Calories";
       }
       else if (num > 60)
       {
           return "Stop walking!";
       }

   if (cal == 'weight lifting')
       if (num == 0)
       {
           return "You burned 0 Calories";
       }
       else if (num > 59)
       {
           return "You burned 2000 Calories";
       }
       else if (num > 44)
       {
           return "You burned 1200 Calories";
       }
       else if (num > 29)
       {
           return "You burned 900 Calories";
       }
       else if (num > 14)
       {
           return "You burned 700 Calories";
       }
       else if (num > 4)
       {
           return "You burned 400 Calories";
       }
       else if (num > 0)
       {
           return "You burned 150 Calories";
       }
       else if (num > 60)
       {
           return "Stop lifting!";
       }

}

function assignGrade()
{
    var grade = Number(document.project3.input1.value);
    if (grade > 89)
    {
        return "A";
    }
    else if (grade > 79)
    {
        return "B";
    }
    else if (grade > 69)
    {
        return "C";
    }
    else if (grade > 59)
    {
        return "D";
    }
    else if (grade > 0)
    {
        return "F";
    }


}

function tenToSmall(num, base) //convert a base-10 number to a smaller base

{
   var num = document.toBinary.input1.value;
    //this function is expecting a number (num) in base 10
    //it will convert the number (num) to value of 'base'
   num > 0 //number to convert
    base = 2;// destination base
    smallNum = "";//store remainders here

    while (num > 0)//continue looping while num isn't zero
    {
        smallNum = num % base + smallNum; //3%5 = 2..... % returns remainders
        //setup num for the next iteration of the loop
        num = Math.floor(num / 2);
    }
        return smallNum;
}
function smallToTen(num, base)
{
    var num = document.toNum.input2.value;
    num > 0;
    base = 2;
    tenNum = 0; //store number to output at end
    numLength = num.toString().length;//convertyd num to a STRING, then counts the number of characters
    // in this case, length of '1101' os 4

    while(numLength > 0)
    {
        var denominator = Math.pow(10, (numLength - 1)); //gets denominator of fraction
        //for 1101, denominators will be 1000, 100, 01, 1
        var currentDigit = Math.floor(num / denominator);
        //above mean 1101/1000 = 1..... 101/100 = 1..... 01/10 = 0..... 1/1 = 1
        tenNum = tenNum + currentDigit * Math.pow(base, numLength - 1);
        //currentDigit*2^3... currentDigit*2^2.... CurrentDigit*2^1... etc
        num = num % denominator; //reduces num for the next iteration
        numLength--; //decreases the numLength value by 1... otherwise will loop infinitely
    }
        return tenNum;

}

function calculate(expression) //ex. expression is 2+5 or 9*6 or 10/5
{
    //'expression' string of everything in your calc window
    //need to extract the first number from expression
    var firstNum = Number(expression.substr(0,1));

    var operator = expression.substr(1,1);

    var secondNum = Number(expression.substr(2,1));


    if(operator === '+')
    {
        return addNums(firstNum, secondNum)
    }
    else if (operator === '-')
    {
        return subNums (firstNum, secondNum)
    }
    else if (operator === '*')
    {
        return multNums(firstNum, secondNum)
    }
    else if (operator === '/')
    {
        return divNums(firstNum, secondNum)
    }
    else if (operator === '√')
    {
        return sqrtNum (firstNum)
    }

}

function addNums(p1, p2)
{
    return p1 + p2;
}

function subNums(p1, p2)
{
    return p1 - p2;
}
function multNums(p1, p2)
{
    return p1 * p2;
}

function divNums(p1, p2)
{
    return p1 / p2
}

function sqrtNum(p1)
{
    return Math.sqrt(p1)
}


