<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF8">
<meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT">
<meta http-equiv="pragma" content="no-cache">
<meta name="viewport" content="width=device-width, initial-scale=1.0,">
<title> GP </title>
</head>
<body style="background:#FFB7DD;">
<div style="text-align:center;"><span  style="text-align:center;font-size:60px;color:brown;">GP Homework</span>
</div>
<div style="text-align:center;">
	<span  style="text-align:center;font-size:30px;color:black;">
	<a href="mailto:u10606257@ms.ttu.edu.tw">聯絡信箱</span></a>
</div>
<table border="1" width="100%">
</table>
</body>
</html>
<?php
    // 設定 MySQL 的連線資訊並開啟連線
    // 資料庫位置、使用者名稱、使用者密碼、資料庫名稱
    $link = mysqli_connect("", "account", "12312", "project");
    $link -> set_charset("UTF8"); // 設定語系避免亂碼

    // SQL 指令
    $result = $link -> query("SELECT * FROM position");
    while ($row = $result->fetch_assoc()) // 當該指令執行有回傳
    {
        $output[] = $row; // 就逐項將回傳的東西放到陣列中
		echo  $row["X"].'<br>';
		echo $row["Y"].'<br>';;
		//echo $row;
    }
	$result = $link -> query("INSERT INTO `position`( `X`, `Y`) VALUES ('922','90')");
    $result = $link -> query(" UPDATE `position` SET `X` = '1970', `Y` = '2880' WHERE `position`.`Id` = 6 ");
	// 將資料陣列轉成 Json 並顯示在網頁上，並要求不把中文編成 UNICODE
    print(json_encode($output, JSON_UNESCAPED_UNICODE));
    $link -> close(); // 關閉資料庫連線	

?>
