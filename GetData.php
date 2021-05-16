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
