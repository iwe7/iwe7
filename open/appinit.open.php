<?php

global $_W, $_GPC;
$table = "runner_open_app";
$input = $_GPC['__input'];
$events = $input['events'];
$opts = $input['opts'];
$code = $events['type'];
$code = $code ? $code : 'blank';

$item = pdo_get($table, array('code' => $code, 'uniacid' => $_W['uniacid']));

if (empty($item)) {
    if (empty($opts)) {
        $data = array();
        $data['selector'] = 'layout';
        $data['inputs'] = array(
            'tip' => array(
                "type" => "string",
                "value" => "点击右键新建页面",
            ),
            'menuList' => array(
                array(
                    "title" => array(
                        "type" => "string",
                        "value" => "新建页面",
                    ),
                    "code" => array(
                        "type" => "string",
                        "value" => "rights.page.create",
                    ),
                ),
                array(
                    "title" => array(
                        "type" => "string",
                        "value" => "页面列表",
                    ),
                    "code" => array(
                        "type" => "string",
                        "value" => "rights.page.lists",
                    ),
                ),
            ),
        );
        $data['outputs'] = array('ajax$', 'popover$', 'dialog$', 'alert$', 'toast$', 'loading$');
    } else {
        $data = $opts;
    }
    $json = array();
    $json['code'] = $code;
    $json['setting'] = serialize($data);
    $json['create_time'] = time();
    $json['uniacid'] = $_W['uniacid'];
    pdo_insert($table, $json);
} else {

    $data = unserialize($item['setting']);
}
die(json_encode($data));
