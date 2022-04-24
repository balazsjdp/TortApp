<?php 

namespace App\Lib;


class NavigationItem {
    public $route;
    public $displayName;


    function __construct($route, $displayname){
        $this->route = $route;
        $this->displayName = $displayname;
    }


}






?>