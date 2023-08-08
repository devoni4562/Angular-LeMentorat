<?php

namespace ContainerANxQZhK;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_RbLFe_KService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.RbLFe.k' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.RbLFe.k'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService ??= $container->getService(...), [
            'App\\Controller\\Api\\AdminController::getAllAdmin' => ['privates', '.service_locator.0luPVJ5', 'get_ServiceLocator_0luPVJ5Service', true],
            'App\\Controller\\Api\\ArticleController::getArticles' => ['privates', '.service_locator.b12wXHr', 'get_ServiceLocator_B12wXHrService', true],
            'App\\Controller\\Api\\ArticleController::getParagraphsByArticle' => ['privates', '.service_locator.b12wXHr', 'get_ServiceLocator_B12wXHrService', true],
            'App\\Controller\\Api\\ArticleController::newArticle' => ['privates', '.service_locator.FYYvm8h', 'get_ServiceLocator_FYYvm8hService', true],
            'App\\Controller\\Api\\CaseStudyController::getAll' => ['privates', '.service_locator.pQvktTx', 'get_ServiceLocator_PQvktTxService', true],
            'App\\Controller\\Api\\CategoryController::getAllCategory' => ['privates', '.service_locator.DFyL8OH', 'get_ServiceLocator_DFyL8OHService', true],
            'App\\Controller\\Api\\LoginController::login' => ['privates', '.service_locator.s3.w.ZI', 'get_ServiceLocator_S3_W_ZIService', true],
            'App\\Controller\\Api\\MemberController::getMentors' => ['privates', '.service_locator.0luPVJ5', 'get_ServiceLocator_0luPVJ5Service', true],
            'App\\Controller\\Api\\MemberController::getStaff' => ['privates', '.service_locator.0luPVJ5', 'get_ServiceLocator_0luPVJ5Service', true],
            'App\\Controller\\Api\\MemberController::getWitnesses' => ['privates', '.service_locator.0luPVJ5', 'get_ServiceLocator_0luPVJ5Service', true],
            'App\\Kernel::loadRoutes' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
            'App\\Kernel::registerContainerConfiguration' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
            'kernel::loadRoutes' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
            'kernel::registerContainerConfiguration' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
            'App\\Controller\\Api\\AdminController:getAllAdmin' => ['privates', '.service_locator.0luPVJ5', 'get_ServiceLocator_0luPVJ5Service', true],
            'App\\Controller\\Api\\ArticleController:getArticles' => ['privates', '.service_locator.b12wXHr', 'get_ServiceLocator_B12wXHrService', true],
            'App\\Controller\\Api\\ArticleController:getParagraphsByArticle' => ['privates', '.service_locator.b12wXHr', 'get_ServiceLocator_B12wXHrService', true],
            'App\\Controller\\Api\\ArticleController:newArticle' => ['privates', '.service_locator.FYYvm8h', 'get_ServiceLocator_FYYvm8hService', true],
            'App\\Controller\\Api\\CaseStudyController:getAll' => ['privates', '.service_locator.pQvktTx', 'get_ServiceLocator_PQvktTxService', true],
            'App\\Controller\\Api\\CategoryController:getAllCategory' => ['privates', '.service_locator.DFyL8OH', 'get_ServiceLocator_DFyL8OHService', true],
            'App\\Controller\\Api\\LoginController:login' => ['privates', '.service_locator.s3.w.ZI', 'get_ServiceLocator_S3_W_ZIService', true],
            'App\\Controller\\Api\\MemberController:getMentors' => ['privates', '.service_locator.0luPVJ5', 'get_ServiceLocator_0luPVJ5Service', true],
            'App\\Controller\\Api\\MemberController:getStaff' => ['privates', '.service_locator.0luPVJ5', 'get_ServiceLocator_0luPVJ5Service', true],
            'App\\Controller\\Api\\MemberController:getWitnesses' => ['privates', '.service_locator.0luPVJ5', 'get_ServiceLocator_0luPVJ5Service', true],
            'kernel:loadRoutes' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
            'kernel:registerContainerConfiguration' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
        ], [
            'App\\Controller\\Api\\AdminController::getAllAdmin' => '?',
            'App\\Controller\\Api\\ArticleController::getArticles' => '?',
            'App\\Controller\\Api\\ArticleController::getParagraphsByArticle' => '?',
            'App\\Controller\\Api\\ArticleController::newArticle' => '?',
            'App\\Controller\\Api\\CaseStudyController::getAll' => '?',
            'App\\Controller\\Api\\CategoryController::getAllCategory' => '?',
            'App\\Controller\\Api\\LoginController::login' => '?',
            'App\\Controller\\Api\\MemberController::getMentors' => '?',
            'App\\Controller\\Api\\MemberController::getStaff' => '?',
            'App\\Controller\\Api\\MemberController::getWitnesses' => '?',
            'App\\Kernel::loadRoutes' => '?',
            'App\\Kernel::registerContainerConfiguration' => '?',
            'kernel::loadRoutes' => '?',
            'kernel::registerContainerConfiguration' => '?',
            'App\\Controller\\Api\\AdminController:getAllAdmin' => '?',
            'App\\Controller\\Api\\ArticleController:getArticles' => '?',
            'App\\Controller\\Api\\ArticleController:getParagraphsByArticle' => '?',
            'App\\Controller\\Api\\ArticleController:newArticle' => '?',
            'App\\Controller\\Api\\CaseStudyController:getAll' => '?',
            'App\\Controller\\Api\\CategoryController:getAllCategory' => '?',
            'App\\Controller\\Api\\LoginController:login' => '?',
            'App\\Controller\\Api\\MemberController:getMentors' => '?',
            'App\\Controller\\Api\\MemberController:getStaff' => '?',
            'App\\Controller\\Api\\MemberController:getWitnesses' => '?',
            'kernel:loadRoutes' => '?',
            'kernel:registerContainerConfiguration' => '?',
        ]);
    }
}
