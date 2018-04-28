<?php
global $_W, $_GPC;
load()->func('db');
$table = $_GPC['table'];
$op = $_GPC['op'];

if (empty($op)) {
    $result = db_table_schema(pdo(), $table);
    return $this->result(0, '成功', $result);
}

if ($op === 'data') {
    $list = pdo_getall($table, array());
    return $this->result(0, '成功', $list);
}

if ($op === 'save') {
    $input = $_GPC['__input'];
    foreach ($input as $in) {
        pdo_update($table, $in, array('id' => $in['id']));
    }
    return $this->result(0, '成功', $input);
}
