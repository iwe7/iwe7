<?php
global $_W, $_GPC;
$code = $_GPC['code'];

$op = $_GPC['op'];
if (empty($op)) {
    $item = pdo_get('runner_open_app_page', array('code' => $code));
    $this->return(0, '成功', $item);
} else if ($op === 'save') {

    $data = array();
    $data['code'] = $input['do'];
    $data['setting'] = serialize($input);
    $data['create_time'] = time();
    $data['selector'] = $input['selector'];
    if (pdo_insert('runner_open_app_page', $data)) {
        return $this->return(0, '添加成功', $data);
    } else {
        pdo_update('runner_open_app_page', $data, array('code' => $data['code']));
        return $this->return(0, '更新成功', $data);
    }
} else if ($op === 'delete') {

} else {
    return $this->return(0, '权限错误', array());
}
