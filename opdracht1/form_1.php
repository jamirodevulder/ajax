<?php
	$firstName = $_GET['firstName'];
	$lastName = $_GET['lastName'];
	$age = $_GET['age'];
	$email = $_GET['email'];

	echo "<h2>Response Demo Form</h2><h3>";
	echo "You submitted the following information<br>";
	echo "Name: <strong> $firstName</strong> <br>";
	echo "Last Name: <strong> $lastName</strong><br>";
	echo "Age: <strong> $age</strong><br>";
	echo "Email: <strong> $email</strong><br>";
	echo "form recieved at: <br>";
	echo "time: ", date("g"), ":", date("i"), ":", date("s");
	echo "<br>date: ", date("d"), ".", date("m"), ".", date("Y");
	echo "</h3>";
?>
