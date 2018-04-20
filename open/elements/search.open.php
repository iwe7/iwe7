<?php
global $_W, $_GPC;

$list = pdo_getall('runner_open_app_elements');

$data = array();
foreach($list as $li){
  $data[] = unserialize($li['setting']);
}

die(json_encode($data));
