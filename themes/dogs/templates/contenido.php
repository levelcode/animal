<?php
	/*
		Template name: Contenido
	*/
	get_header();
	$postID = get_the_ID();
    $post = get_post($postID); 
?>
<div class="content_contenido">
    <h1 class="titulo1"><?php single_post_title();?></h1>
    <?php
    //wp_get_post_parent_id( $post_ID );
        if(has_post_thumbnail()) {
             $feature_image = get_the_post_thumbnail($post->ID, 'large'); 
             echo $feature_image;
        }else{
            echo "No ha asignado una Imagen Destacada.";
        }
    ?>
    <div class="texto">
	    <?php
	        $content = apply_filters('the_content', $post->post_content); 
	        echo '<div class="parr_1">'.$content.'</div>';  
	    ?>
    </div>
</div>

<?php 
get_footer();
?>