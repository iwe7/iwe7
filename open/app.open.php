<?php
global $_W, $_GPC;
$table = 'runner_open_app_data';
$code = $_GPC['__code'];
$item = pdo_get($table, array('code' => $code, 'uniacid' => $_W['uniacid']));

if (empty($item)) {
    $this->return('-1', '页面不存在', array());
} else {
    $item['children'] = getChildren($item['id']);
    $this->return('0', '获取成功', $item);
}

