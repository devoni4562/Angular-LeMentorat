<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/api/users' => [
            [['_route' => 'api_users_get', '_controller' => 'App\\Controller\\Api\\UserController::index'], null, ['GET' => 0], null, false, false, null],
            [['_route' => 'api_users_post', '_controller' => 'App\\Controller\\Api\\UserController::create'], null, ['POST' => 0], null, false, false, null],
        ],
        '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
        '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
        '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
        '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
        '/_profiler/xdebug' => [[['_route' => '_profiler_xdebug', '_controller' => 'web_profiler.controller.profiler::xdebugAction'], null, null, null, false, false, null]],
        '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
        '/api/admin/get_all_admin' => [[['_route' => 'app_api_admin_getalladmin', '_controller' => 'App\\Controller\\Api\\AdminController::getAllAdmin'], null, null, null, false, false, null]],
        '/api/article' => [[['_route' => 'app_api_article_getarticles', '_controller' => 'App\\Controller\\Api\\ArticleController::getArticles'], null, ['GET' => 0], null, true, false, null]],
        '/api/article/new' => [[['_route' => 'app_api_article_newarticle', '_controller' => 'App\\Controller\\Api\\ArticleController::newArticle'], null, ['POST' => 0], null, false, false, null]],
        '/api/case_study' => [[['_route' => 'app_case_study_index', '_controller' => 'App\\Controller\\Api\\CaseStudyController::getAll'], null, ['GET' => 0], null, true, false, null]],
        '/api/category' => [[['_route' => 'app_api_category_getallcategory', '_controller' => 'App\\Controller\\Api\\CategoryController::getAllCategory'], null, ['GET' => 0], null, true, false, null]],
        '/api/login' => [[['_route' => 'app_api_login_login', '_controller' => 'App\\Controller\\Api\\LoginController::login'], null, ['POST' => 0], null, false, false, null]],
        '/getConferenceSubscribeLink' => [[['_route' => 'app_api_main_getconferencelink', '_controller' => 'App\\Controller\\Api\\MainController::getConferenceLink'], null, ['GET' => 0], null, false, false, null]],
        '/getCoffeeSubscribeInfo' => [[['_route' => 'app_api_main_getcoffeeinfo', '_controller' => 'App\\Controller\\Api\\MainController::getCoffeeInfo'], null, ['GET' => 0], null, false, false, null]],
        '/api/members/staff' => [[['_route' => 'app_api_member_getstaff', '_controller' => 'App\\Controller\\Api\\MemberController::getStaff'], null, ['GET' => 0], null, false, false, null]],
        '/api/members/mentors' => [[['_route' => 'app_api_member_getmentors', '_controller' => 'App\\Controller\\Api\\MemberController::getMentors'], null, ['GET' => 0], null, false, false, null]],
        '/api/members/witnesses' => [[['_route' => 'app_api_member_getwitnesses', '_controller' => 'App\\Controller\\Api\\MemberController::getWitnesses'], null, ['GET' => 0], null, false, false, null]],
        '/api/role' => [[['_route' => 'app_api_role_index', '_controller' => 'App\\Controller\\Api\\RoleController::index'], null, ['GET' => 0], null, true, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_(?'
                    .'|error/(\\d+)(?:\\.([^/]++))?(*:38)'
                    .'|wdt/([^/]++)(*:57)'
                    .'|profiler/([^/]++)(?'
                        .'|/(?'
                            .'|search/results(*:102)'
                            .'|router(*:116)'
                            .'|exception(?'
                                .'|(*:136)'
                                .'|\\.css(*:149)'
                            .')'
                        .')'
                        .'|(*:159)'
                    .')'
                .')'
                .'|/api/article/getArticle/([^/]++)(*:201)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        38 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        57 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
        102 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
        116 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
        136 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception_panel::body'], ['token'], null, null, false, false, null]],
        149 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception_panel::stylesheet'], ['token'], null, null, false, false, null]],
        159 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
        201 => [
            [['_route' => 'app_api_article_getparagraphsbyarticle', '_controller' => 'App\\Controller\\Api\\ArticleController::getParagraphsByArticle'], ['id'], ['GET' => 0], null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
