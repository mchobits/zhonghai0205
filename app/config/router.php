<?php

$router = $di->getRouter();

// Define your routes here

$router->add(
    '/wechat/oauth',
    [
        'controller' => 'wechat',
        'action'     => 'auth',
    ]
);

$router->add(
    '/Basic/CountInit',
    [
        'controller' => 'index',
        'action' => 'countInit'
    ]
);

$router->add(
    '/Basic/GetJWinXinInfo',
    [
        'controller' => 'index',
        'action' => 'getJWinXinInfo'
    ]
);

$router->add(
    '/huanyuhui/c/putTest',
    [
        'controller' => 'index',
        'action' => 'putTest'
    ]
);

$router->add(
    '/huanyuhui/c/initMsg',
    [
        'controller' => 'index',
        'action' => 'initMsg'
    ]
);

$router->add(
    '/huanyuhui/c/subScore',
    [
        'controller' => 'index',
        'action' => 'subScore'
    ]
);

$router->add(
    '/huanyuhui/c/pipei',
    [
        'controller' => 'index',
        'action' => 'pipei'
    ]
);

$router->add(
    '/huanyuhui/c/register',
    [
        'controller' => 'index',
        'action' => 'register'
    ]
);

$router->add(
    '/huanyuhui/c/getGeXingPic',
    [
        'controller' => 'index',
        'action' => 'buildGeXingImg'
    ]
);

$router->add('/admin', [
    'controller' => 'admin',
    'action' => 'index'
]);

$router->add('/admin/login', [
    'controller' => 'index',
    'action' => 'login'
]);

$router->handle();
