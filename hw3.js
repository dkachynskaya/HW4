//Task1
/*Сначала выполнится оператор + с левой стороны, поскольку один из операндов строка, то второй операнд преобразуется в строку и выполнится конкатенация, которая вернет строку "22". Далее выполнится оператор + с правой стороны по той же схеме и вернет строку "22". В итоге выполнится оператор нестрогого сравнения и вернет true, так как у нас с обеих сторон идентичные строки.*/
console.log(2 + "2" == "2" + 2); //true

/*Сначала выполнится оператор + с левой стороны, поскольку один из операндов строка, то второй операнд преобразуется в строку и выполнится конкатенация, которая вернет строку "23". Далее выполнится оператор + с правой стороны по той же схеме и вернет строку "32". В итоге выполнится оператор нестрогого сравнения и вернет false, так как строка с левой стороны не идентична строке с правой стороны.*/
console.log(2 + "3" == "3" + 2); //false

/*Сначала выполнится оператор + с левой стороны, поскольку оба операнда строки, то выполняется конкатенация, которая вернет строку "32". Далее выполнится оператор + с правой стороны, так как оба операнда числа, то произойдет обычное сложение, которое вернет число 5. Поскольку в итоге получаются операнды разных типов, строка с левой стороны и число с правой, то вначале произойдет преобразование строки "32" в число 32, а далее произойдет сравнение, которое вернет fasle, так как число с левой и правой стороны неидентичны.*/
console.log("3" + "2" == 3 + 2); //false

/*Сначала выполнится оператор + с левой стороны, поскольку оба операнда строки, то выполняется конкатенация, которая вернет строку "32". Далее выполнится оператор + с правой стороны. Поскольку один из операндов строка, то второй операнд преобразуется в строку и выполнится конкатенация, которая вернет строку "32". В итоге выполнится оператор сравнения, так как операнды одного типа и при этом их значения идентичны, то данный оператор вернет true*/
console.log("3" + "2" == "3" + 2); //true

/*Сначала выполнится оператор + с левой стороны, поскольку оба операнда строки, то выполняется конкатенация, которая вернет строку "32". Далее выполнится оператор + с правой стороны. Поскольку один из операндов строка, то второй операнд преобразуется в строку и выполнится конкатенация, которая вернет строку "23". В итоге выполнится оператор сравнения, так как операнды одного типа, но при этом их значения не идентичны, то данный оператор вернет false*/
console.log("3" + "2" == 2 + "3"); //false

/*Вначале выполнятся явные преобразования строк "3" в числа 3 с левой и правой стороны. Далее выполнится оператор + с левой стороны, так как оба операнда числа, то произойдет обычное сложение, которое вернет число 5. То же сложение произойдет и с правой стороны и вернет число 5. В итоге выполнится оператор сравнения, так как оба операнда одного типа и из значения идентичны, то он вернет true*/
console.log(2 + Number("3") == Number("3") + 2); //true

/*Сначала произойдет преобразование строки "6" в число 6, так как невозможно выполнить деление на строку. После этого выполнится оператор /, который вернет число 2*/
console.log(12 / "6"); //2

/*Так как в данной виражении используются два оператора +, то выполнятся они будут слева направо. Поскольку операнд "number" строка, а 15 - число, то вначале выполнится преобразование число 15 в строку "15", а далее выполнится конкатенация, которая вернет строку "number15". Далее произойдет то же самое, но уже со строкой "number15" и числом 3. В результате вернется строка "number153"*/
console.log("number" + 15 + 3); //number153

/*Так как в данной виражении используются два оператора +, то выполнятся они будут слева направо. Вначале выполнится оператор + с двумя операндами числового типа 15 и 3, который вернет число 18. Поскольку операнд "number" строка, а 18 - число, то вначале выполнится преобразование число 18 в строку "18", а далее выполнится конкатенация, которая вернет строку "18number".*/
console.log(15 + 3 + "number"); //18number

/*При сравнении с помощью оператора > произойдет преобразование null к числу 0. Далее произойдет сравнение элемента массива числа 1 с 0, которое вернет true, так как 1 > 0.*/
console.log([1] > null); //true

/*Вначале выполнится оператор +, то есть произойдет неявное преобразование +"bar" строки "bar" в число, но так как преобразование невозможно, то вернется NaN. Далее выполнится преобразование NaN в строку "Nan" и конкатенация двух строк.*/
console.log("foo" + + "bar"); //fooNaN

/*Операнд true преобразуется в число 1, а строка 'true' при преобразовании в число, вернет NaN. Так как NaN не равно ни одному значению, то оператор сравнения вернет false.*/
console.log('true' == true); //false

/*Операнд false преобразуется в число 0, а строка 'false' при преобразовании в число, вернет NaN. Так как NaN не равно ни одному значению, то оператор сравнения вернет false.*/
console.log(false == 'false'); //false

/*Значение null в js при нестрогом сравнении не равно никакому значению, кроме undefined, потому вернется значение false*/
console.log(null == ''); //false

/*Вначале произойдет неявное преобразование строки "false" в булевое значение true, а далее двойной оператор !! дважды инвертирует наше значение true -> false -> true, то есть в итоге получим true. Аналогично произойдет и со строкой "true". В итоге при сравнении двух true, вернется true*/
console.log(!!"false" == !!"true"); //true

/*Произойдет сравнение элемента массива строчного типа со строкой. Так как оба операнда строки и при этом они идентичны, то оператор нестрогого сравнения вернет true*/
console.log([`x`] == `x`); //true

//Task2
const enemy = {
	name: "Bob"
};
const friend = {
	name: "Alex"
};
const me = friend;

me.name = "Bob";

/*Так как me и friend ссылаются на один и тот же объект, в строке me.name = "Bob"; свойству name этого объекта присваивается новое значение "Bob", которое и выводится в консоль*/
console.log(friend.name); // "Bob"

/*Поскольку me и friend ссылаются на один и тот же объект, соответственно они равны и данное сравнение даст true*/
console.log(me === friend); // true

/*Несмотря на внешнее сходство объектов, на которые ссылаются me и enemy, это два разных объекта и ссылки на них разные, потому сравнение даст false*/
console.log(me === enemy); // false


//Task3
let month = prompt("Insert month's name or number:");
const months= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
if(isNaN(month)){
	for(let i = 0; i < months.length; i ++)
	{
		if(month === months[i])
		{
			alert(i + 1);
		}
	}	
}
else if(+month > 0 && +month < 13){
	alert(months[month - 1]);
}
else{
	alert("Oops.. Something went wrong");
}
