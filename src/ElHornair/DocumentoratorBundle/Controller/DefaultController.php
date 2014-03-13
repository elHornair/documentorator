<?php

namespace ElHornair\DocumentoratorBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('ElHornairDocumentoratorBundle::index.html.twig');
    }

    public function abstractAction()
    {
        return $this->render('ElHornairDocumentoratorBundle:Standalone:abstract.html.twig');
    }

    public function curriculumAction()
    {
        return $this->render('ElHornairDocumentoratorBundle:Standalone:curriculum.html.twig');
    }
}
