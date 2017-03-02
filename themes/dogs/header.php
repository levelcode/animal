<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package dogs
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<link rel="profile" href="http://gmpg.org/xfn/11">

<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/layoutcss/reset.css">
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/layoutcss/general.css">
<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/layoutcss/jquery.fancybox.css">
<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/layoutcss/slick.css"/>
<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/layoutcss/slick-theme.css"/>

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.8";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

  <div id="wrapper">
    <header>

          <a href="https://www.sonymobile.com/global-es/products/phones/" target="_blank">
            <img src="<?php echo get_template_directory_uri(); ?>/images/logosony.png" alt="" class="logo">
          </a>
          
          <form class="content_buscar" role="search" method="get" class="searchform group" action="<?php echo home_url( '/' ); ?>">
              <input type="text" class="search" placeholder="<?php echo esc_attr_x( 'Nombre del canino...', 'placeholder' ) ?>" value="<?php echo get_search_query() ?>" name="s" title="<?php echo esc_attr_x( 'Resultados:', 'label' ) ?>"/>
              <input class="submit" type="submit" value="BUSCAR">
            </form>
          <a href="<?php echo get_site_url(); ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/animalogo.png" alt="" class="logo_central"></a>

          <div class="content_video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/5Sdxhy5qUr4" frameborder="0" allowfullscreen></iframe>
          </div>
          <?php
              wp_nav_menu( array(
                  'menu'              => 'principal',
                  'depth'             => 2,
                  'container'         => 'div',
                  'menu_class'        => 'nav navbar-nav navbar-right')
              );
          ?>
      </header>