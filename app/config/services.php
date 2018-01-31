<?php

use Phalcon\Mvc\View;
use Phalcon\Mvc\View\Engine\Php as PhpEngine;
use Phalcon\Mvc\Url as UrlResolver;
use Phalcon\Mvc\View\Engine\Volt as VoltEngine;
use Phalcon\Mvc\Model\Metadata\Memory as MetaDataAdapter;
// use Phalcon\Session\Adapter\Files as SessionAdapter;
use Phalcon\Flash\Direct as Flash;
use Phalcon\Cache\Frontend\Data as FrontData;
use Phalcon\Cache\Backend\Redis as BackendRedis;
use Phalcon\Session\Adapter\Redis as SessionRedis;
use EasyWeChat\Factory as WechatApplication;
// use EasyWeChat\Foundation\Application as WechatApplication;
// use Doctrine\Common\Cache\RedisCache;
use Symfony\Component\Cache\Simple\RedisCache;



/**
 * Shared configuration service
 */
$di->setShared('config', function () {
    return include APP_PATH . "/config/config.php";
});

// 设置模型缓存服务
$di->set('modelsCache', function () {
    // 默认缓存时间为一天
    $frontCache = new FrontData(["lifetime" => 86400]);
    // Create the Cache setting redis connection options
    $cache = new BackendRedis($frontCache, [
        "host" => getenv('REDIS_HOST'),
        "port" => getenv('REDIS_PORT'),
        'auth' => getenv('REDIS_AUTH'),
        'persistent' => false,
        'index' => 2,
    ]);
    return $cache;
});

// 使用Redis缓存Session
$di->setShared('session', function () use ($di) {
    $session = new SessionRedis([
        'uniqueId'   => getenv('REDIS_UNIQUEID'),
        'host'       => getenv('REDIS_HOST'),
        'port'       => getenv('REDIS_PORT'),
        'auth'       => getenv('REDIS_AUTH'),
        'persistent' => (bool)getenv('REDIS_PERSISTENT'),
        'lifetime'   => (int)getenv('REDIS_LIFETIME'),
        'prefix'     => getenv('REDIS_PREFIX'),
        'index'      => (int)getenv('REDIS_INDEX'),
    ]);
    $session->start();
    return $session;
});


$di->setShared('easywechat', function () use ($di) {
    // 获取 redis 实例
    //$shermanRedisClass = \ShermanRedis::getInstance();
    //$shermanRedis = $shermanRedisClass->getRedisInstance();
    //$cacheDriver->setRedis($shermanRedis);
    $redis = new Redis();
    $redis->connect(getenv('REDIS_HOST'), getenv('REDIS_PORT'));
    $cacheDriver = new RedisCache($redis);
    $wcConfig = $di->get('config')->wechat->toArray();
    $app = WechatApplication::officialAccount($wcConfig);
    $app['cache'] = $cacheDriver;
    return $app;
});

$di->setShared('hashids', function () {
    return new \Hashids\Hashids(
        getenv('HASHIDS_SALT'),
        getenv('HASHIDS_LENGTH')
    );
});

/**
 * The URL component is used to generate all kind of urls in the application
 */
$di->setShared('url', function () {
    $config = $this->getConfig();

    $url = new UrlResolver();
    $url->setBaseUri($config->application->baseUri);

    return $url;
});

/**
 * Setting up the view component
 */
$di->setShared('view', function () {
    $config = $this->getConfig();

    $view = new View();
    $view->setDI($this);
    $view->setViewsDir($config->application->viewsDir);

    $view->registerEngines([
        '.volt' => function ($view) {
            $config = $this->getConfig();

            $volt = new VoltEngine($view, $this);

            $volt->setOptions([
                'compiledPath' => $config->application->cacheDir,
                'compiledSeparator' => '_'
            ]);

            return $volt;
        },
        '.phtml' => PhpEngine::class

    ]);

    return $view;
});

/**
 * Database connection is created based in the parameters defined in the configuration file
 */
$di->setShared('db', function () {
    $config = $this->getConfig();


    $class = 'Phalcon\Db\Adapter\Pdo\\' . $config->database->adapter;
    $params = [
        'host'     => $config->database->host,
        'username' => $config->database->username,
        'password' => $config->database->password,
        'dbname'   => $config->database->dbname,
        'charset'  => $config->database->charset
    ];

    if ($config->database->adapter == 'Postgresql') {
        unset($params['charset']);
    }

    $connection = new $class($params);

    return $connection;
});


/**
 * If the configuration specify the use of metadata adapter use it or use memory otherwise
 */
$di->setShared('modelsMetadata', function () {
    return new MetaDataAdapter();
});

/**
 * Register the session flash service with the Twitter Bootstrap classes
 */
$di->set('flash', function () {
    return new Flash([
        'error'   => 'alert alert-danger',
        'success' => 'alert alert-success',
        'notice'  => 'alert alert-info',
        'warning' => 'alert alert-warning'
    ]);
});

/**
 * Start the session the first time some component request the session service
 */
//$di->setShared('session', function () {
//    $session = new SessionAdapter();
//    $session->start();
//
//    return $session;
//});
