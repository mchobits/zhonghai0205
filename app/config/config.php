<?php
/*
 * Modified: prepend directory path of current file, because of this file own different ENV under between Apache and command line.
 * NOTE: please remove this comment.
 */
defined('BASE_PATH') || define('BASE_PATH', getenv('BASE_PATH') ?: realpath(dirname(__FILE__) . '/../..'));
defined('APP_PATH') || define('APP_PATH', BASE_PATH . '/app');

return new \Phalcon\Config([
    'database' => [
        'adapter'     => getenv('DATABASE_ADAPTER') ?: 'Mysql',
        'host'        => getenv('DATABASE_HOST') ?: 'localhost',
        'username'    => getenv('DATABASE_USER') ?: 'homestead',
        'password'    => getenv('DATABASE_PASSWORD') ?: 'secret',
        'dbname'      => getenv('DATABASE_DBNAME') ?: 'zh20180205',
        'charset'     => 'utf8mb4',
    ],
    'application' => [
        'appDir'         => APP_PATH . '/',
        'controllersDir' => APP_PATH . '/controllers/',
        'modelsDir'      => APP_PATH . '/models/',
        'migrationsDir'  => APP_PATH . '/migrations/',
        'viewsDir'       => APP_PATH . '/views/',
        'pluginsDir'     => APP_PATH . '/plugins/',
        'libraryDir'     => APP_PATH . '/library/',
        'cacheDir'       => BASE_PATH . '/cache/',

        // This allows the baseUri to be understand project paths that are not in the root directory
        // of the webpspace.  This will break if the public/index.php entry point is moved or
        // possibly if the web server rewrite rules are changed. This can also be set to a static path.
        //'baseUri'        => preg_replace('/public([\/\\\\])index.php$/', '', $_SERVER["PHP_SELF"]),

    ],
    'wechat' => [
        'app_id'     => getenv('WECHAT_APP_ID'),
        'secret' => getenv('WECHAT_APP_SECRET'),
        'oauth' => [
            //'scopes'   => [getenv('WECHAT_SCOPES')],
            'callback' => getenv('WECHAT_CALLBACK'),
        ],
    ],
]);
