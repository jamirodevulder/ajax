<?php
	$firstName = $_GET['firstName'];
	$lastName = $_GET['lastName'];
	$age = $_GET['age'];
	$email = $_GET['email'];

	echo "<h2>Response Demo Form</h2><h3>";
	echo "You submitted the following information<br><ul>";
	echo "<li>Name: <strong> $firstName</strong></li>";
	echo "<li>Last Name: <strong> $lastName</strong></li>";
	echo "<li>Age: <strong> $age</strong></li>";
	echo "<li>Email: <strong> $email</strong></li>";
	echo "form recieved at: <br>";
	echo "time: ", date("g"), ":", date("i"), ":", date("s");
	echo "<br>date: ", date("d"), ".", date("m"), ".", date("Y");
	echo "</li></ul></h3>";
?>
