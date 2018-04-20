<?php
global $_W, $_GPC;

// ini_set('display_errors', true);
// error_reporting(E_ALL);
$input = $_GPC['__input'];

$data = array();
$data['author'] = $input['author'];
$data['desc'] = $input['desc'];
$data['father'] = $input['father'];
$data['price'] = floatval($input['price']);
$data['selector'] = $input['selector'];
$data['code'] = $input['author'] . '.' . $input['selector'];
$data['title'] = $input['title'];
$data['type'] = $input['type'];
$data['version'] = $input['version'];

$sql = "SELECT * FROM " . tablename('runner_open_app_elements') . " WHERE selector=:selector OR code=:code";
$params = array(':selector' => $data['selector'], 'code' => $data['code']);
$item = pdo_fetch($sql,$params);
$return = array();
if (empty($item)) {
    $setting = array();
    $setting['selector'] = $input['father'];
    $setting['inputs'] = array(
        'version' => $data['version'],
    );
    $setting['outputs'] = array();
    $setting['children'] = array(
        'content' => array(),
    );
    $data['setting'] = serialize($setting);
    if (pdo_insert('runner_open_app_elements', $data)) {
        $data['id'] = pdo_insertid();
        $data['setting'] = $setting;
        $this->return('0', '创建成功', $data);
    } else {
        $this->return('-1', '插入失败', $data);
    }
} else {
    $this->return('-1', '选择器已存在', $data);
}
