<?php
global $_W, $_GPC;
load()->func('db');
$table = $_GPC['table'];

$result = db_table_schema(pdo(), $table);
return $this->result(0, '成功', $result);
