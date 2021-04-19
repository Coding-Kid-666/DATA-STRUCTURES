
//Declaring a variable for array
var students_array=[];


//Function submit when "Submit" is clicked
function Submit(){
    //Declaring variables for the text inputs
    var name_1=document.getElementById("student1").value;
    var name_2=document.getElementById("student2").value;
    var name_3=document.getElementById("student3").value;
    var name_4=document.getElementById("student4").value;


    //Adding objects to an array using 'push'
    students_array.push(name_1);
    students_array.push(name_2);
    students_array.push(name_3);
    students_array.push(name_4);


    //Adding the array in the result_div and console.log
    document.getElementById("result_div").innerHTML = students_array;
    console.log(students_array);


    //Making the sort button visible and the submit button invisible
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}


//Function sorting when "Sort" is clicked
function sorting(){
    //Sorting the array in alphabetical order
    students_array.sort();


    //Displaying the sorted array on "result_div" and console.log
    document.getElementById("result_div").innerHTML = students_array;
    console.log(students_array);
}

