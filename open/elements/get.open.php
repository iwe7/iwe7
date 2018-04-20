<?php
global $_W, $_GPC;
$table = "runner_open_app_elements";
$input = $_GPC['__input'];
$type = $input['type'];

$data = array();
if(empty($type)){
  die(json_encode($data));
}else{
  $data = pdo_get($table,array('code'=>$type));
  $data['setting'] = unserialize($data['setting']);
}

die(json_encode($data));

