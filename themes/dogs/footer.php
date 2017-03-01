<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package dogs
 */

?>
<div class="contact_form" style="display: none;" id="contact_form_popup">
    <?php echo do_shortcode( '[contact-form-7 id="22" title="Formulario de contacto"]' ); ?>
</div>

    <footer>

        <a href="" class="banner">
            <img src="<?php echo get_template_directory_uri(); ?>/images/banner.jpg" alt="">
        </a>

        <div class="copyright">
            <span>Lorem Impus dolor sit amet 2016</span>
            <a href="" class="twitter"></a>
            <a href="" class="facebook"></a>
            <div class="logo_footer_sony"></div>
        </div>
    </footer>



<script src="<?php echo get_template_directory_uri(); ?>/js/jquery-2.2.0.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.fancybox.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/slick.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/general.js"></script>

<?php wp_footer(); ?>

</body>
</html>