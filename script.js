var arrayOfNames = new Array();
arrayOfNames[0]="Nez";
arrayOfNames[1]="Naz";
arrayOfNames[2]="Faruk";
arrayOfNames[3]="Emin";
arrayOfNames[4]="Nursena";
arrayOfNames[5]="Melike";
arrayOfNames[6]="Sengul";
arrayOfNames[7]="John";
arrayOfNames[8]="Dudu";
arrayOfNames[9]="Jennie";
arrayOfNames[10]="Gorkem";
arrayOfNames[11]="Pasha";
arrayOfNames[12]="James";

//If we have a name which starts with the J letter, then our output will turn "googbye".

for (var i = 0; i < arrayOfNames.length; i++)
{
	if(arrayOfNames[i].charAt(0)==='J'|| arrayOfNames[i].charAt(0)==='j'){
        console.log("Goodbye "+ arrayOfNames[i])
}
	else{
		console.log("Hi "+ arrayOfNames[i])
	}
}
