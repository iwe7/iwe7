<?php
global $_W, $_GPC;
$table = "runner_open_app_elements";

$input = $_GPC['__input'];
$events = $input['events'];

$opts = $input['opts'];
$code = $events['type'];


if (empty($code)) {
    return array();
} else {
    $item = pdo_get($table, array('code' => $code));
    if (empty($item)) {
        $data = array();
        $data['code'] = $code;
        $data['selector'] = trim($opts['selector']);
        $data['setting'] = serialize($opts);
        $data['author'] = 'imeepos';
        $data['title'] = $opts['title'];
        $data['desc'] = $opts['desc'];
        $data['create_time'] = time();
        $data['price'] = 0;
        $data['needpay'] = 0;
        $data['version'] = 1;
        pdo_insert($table, $data);
    } else {
        $data = array();
        $data['code'] = $code;
        $data['selector'] = trim($opts['selector']);
        $data['setting'] = serialize($opts);
        $data['author'] = 'imeepos';
        $data['title'] = $opts['title'];
        $data['desc'] = $opts['desc'];
        $data['create_time'] = time();
        $data['price'] = 0;
        $data['needpay'] = 0;
        $data['version'] = 1;
        pdo_update($table, $data, array('id' => $item['id']));
    }
}


die(json_encode($data));
