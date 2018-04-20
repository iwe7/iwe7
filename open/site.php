<?php
// ini_set('display_errors', true);
// error_reporting(E_ALL);

class Runner_openModuleSite extends WeModuleSite
{
    public function __construct()
    {
        global $_W, $_GPC;
        $item = pdo_get('runner_open_setting', array('code' => 'cloud.bind', 'uniacid' => $_W['uniacid']));
        $geotables = pdo_get('runner_open_setting', array('code' => 'bmap.geotables', 'uniacid' => $_W['uniacid']));
        $_W['cloud'] = unserialize($item['value']);
        $_W['geotables'] = unserialize($geotables['value']);

        $_W['meepo'] = array();
        $_W['meepo']['runner_open_tasks'] = '186498';
        $_W['meepo']['runner_open_runner'] = '186499';
        $_W['meepo']['runner_open_member'] = '186613';
        $_W['meepo']['runner_open_actives'] = '186614';
    }

    private function autoLoginWeb()
    {
        global $_W;
        $token = $_SERVER['HTTP_TOKEN'];
        load()->model('user');
        if (!empty($token)) {
            $item = pdo_get('runner_open_token', array('sign' => $token));
            if (!empty($item)) {
                $record = user_single($item['uid']);
                $_W['uid'] = $record['uid'];
                $_W['isfounder'] = user_is_founder($record['uid']);
                $_W['user'] = $record;
            }
        }
    }

    private function autoLoginMobile()
    {
        global $_W;
        $token = $_SERVER['HTTP_TOKEN'];
        if (!empty($token)) {
            $item = pdo_get('runner_open_login', array('sign' => $token));
            if (!empty($item)) {
                _mc_login(array('uid' => $item['uid']));
            }
        }
    }

    public function loader()
    {
        return load();
    }

    public function table($name = '')
    {
        return table($name);
    }

    public function checkMobileDo($do)
    {
        if (empty($_GET['do'])) {
            $url = $this->createMobileUrl($do);
            header("Location:" . $url);
            exit();
        }
    }
    public function checkWebDo($do)
    {
        global $_W, $_GPC;
        if (empty($_GET['do']) || empty($_GET['i'])) {
            $url = $this->createWebUrl($do, array('i' => $_W['uniacid']));
            print_r($url);
            header("Location:" . $url);
            exit();
        }
    }
    // 后台登录
    public function checkWeb()
    {
        global $_W, $_GPC;
        return !empty($_W['uid']);
    }
    // 前台登录
    public function checkMobile()
    {
        global $_W, $_GPC;
        return !empty($_W['member']);
    }

    public function result($code, $msg = '', $data = array())
    {
        exit(json_encode(array(
            'code' => $code,
            'msg' => $msg,
            'data' => $data,
        )));
    }
    public function return($code, $msg = '', $data = array()){
      return $this->result($code,$msg,$data);
    }

    public function createOpen($name)
    {
        $dir = IA_ROOT . '/addons/' . $this->modulename . '/open/';
        if (empty($name)) {
            return $this->result('fail', '参数错误');
        }
        $file = $dir . '_init.php';
        if (file_exists($file)) {
            include $file;
        }
        $name = urldecode($name);
        $file = $dir . $name . '.open.php';
        if (file_exists($file)) {
            require $file;
            exit();
        } else {
            return $this->result('fail', '不存在此接口');
        }
    }

    public function doWebOpen()
    {
        global $_W, $_GPC;
        header("Access-Control-Allow-Headers:Content-Type, Accept, Authorization, token");
        header("Access-Control-Max-Age: 1800");
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            return $this->result('ok', 'oauth pass');
        }
        $this->autoLoginWeb();
        $this->createOpen($_GPC['open']);
    }

    public function doMobileOpen()
    {
        global $_W, $_GPC;
        header("Access-Control-Allow-Headers:Content-Type, Accept, Authorization, token");
        header("Access-Control-Max-Age: 1800");
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            return $this->result('ok', 'oauth pass');
        }
        $this->autoLoginMobile();
        $this->createOpen($_GPC['open']);
    }

    public function doWebindex()
    {
        global $_W, $_GPC;
        $this->checkWebDo("index");
        include $this->template('web/index');
    }
    public function doWeblogin()
    {
        global $_W, $_GPC;
        $this->checkWebDo("login");
        include $this->template('web/index');
    }
    public function doWebregister()
    {
        global $_W, $_GPC;
        $this->checkWebDo("register");
        include $this->template('web/index');
    }
    public function doWebforget()
    {
        global $_W, $_GPC;
        $this->checkWebDo("forget");
        include $this->template('web/index');
    }
    public function doWebdevelopword()
    {
        global $_W, $_GPC;
        $this->checkWebDo("developword");
        include $this->template('web/index');
    }
    public function doWeberrorcode()
    {
        global $_W, $_GPC;
        $this->checkWebDo("errorcode");
        include $this->template('web/index');
    }
    public function doWebdemo()
    {
        global $_W, $_GPC;
        $this->checkWebDo("demo");
        include $this->template('web/index');
    }
    public function doWebprocess()
    {
        global $_W, $_GPC;
        $this->checkWebDo("process");
        include $this->template('web/index');
    }

    public function doWebwordshow()
    {
        global $_W, $_GPC;
        $this->checkWebDo("wordshow");
        include $this->template('web/index');
    }

    public function doWebHome()
    {
        global $_W, $_GPC;
        $this->checkWebDo("home");
        include $this->template('web/index');
    }
}
