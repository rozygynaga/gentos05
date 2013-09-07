<?php
    $ip = $_SERVER['REMOTE_ADDR'];
    $referrer = getenv('HTTP_REFERER');
    $url = $_SERVER['REQUEST_URI'];
    $site = $_SERVER['SERVER_NAME'];
    $waktu = date("d-m-y / H:i:s");
    $userAgent = getenv('HTTP_USER_AGENT');
    $cetak = "
Time    : " . $waktu . "
IP      : " . $ip . "
From    : " . $referrer . "
Url     : " . $site.$url . "
Browser : " . $userAgent ."
========================================";
    $fopen = fopen("log.txt", "a");
    fwrite($fopen, $cetak);
    fclose($fopen);
    ?>