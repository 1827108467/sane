<?php

function read($str)
{
    if (empty($str)) {
        return false;
    }

    $len = strlen($str);
    $result = [];
    $index = 0;
    for ($i = 0; $i < $len; $i++) {
        if(empty($result) ){
            $result[$index][]= $str[$i];
            $index ++;
            continue;
        }
        if( $i>0){
            $str[$i]==$str[$i-1] ? $result[$index-1][]= $str[$i] : $result[$index][]= $str[$i];
            $str[$i]==$str[$i-1] ? '' : $index ++;
        }
    }
    return $result;
}


$result = read("11121");

var_dump($result);