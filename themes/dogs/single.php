<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package dogs
 */

get_header(); ?>

    <div class="content_galeria">
		<?php
			if ( have_posts() )
			{
				$Cont = 1;

				while ( have_posts() ) : the_post();

					$Edad = get_field('edad');

					if($Edad > 2)
						$ClaseEdad = "EdadMayor";
					else
						$ClaseEdad = "EdadMenor";

				?>
			        <div class="content_fotos content_fotos_posts <?php echo get_field('sexo') . ' ' . $ClaseEdad ?>" data-edad="<?php echo $Edad ?>">
			            <div class="box_perrito style1">
			                <a class="PopupPerritos PerritosSingle" href="#hidden-content_<?php echo $Cont; ?>" data-popup="<?php echo $Cont; ?>" data-id="<?php echo get_the_ID(); ?>">
			                    <div class="nombre_perro"><?php echo get_the_title(); ?></div>
			                </a>
			                <div class="fotos_perrito">
			                    <div class="list sliderNormal">
			                    <?php
			                        for($i=1; $i<=5; $i++)
			                        {
				                        $FotoTemp = get_field("foto_" . $i);

				                        if($FotoTemp != "")
				                        	echo '<div><img src="' . $FotoTemp . '" alt=""></div>';
			                        }
			                    ?>
			                    </div>

								<a class="PopupForm mundo" href="#contact_form_popup"></a>

			                   	<a href="http://twitter.com/share?url=<?php echo get_permalink(); ?>&amp;text=<?php echo get_field('descripcion')?>" class="share_twitter" title="<?php echo get_the_title(); ?>" target="_blank">Twitter</a>

			                    <span>Comment</span>

			                    <button class="arrow"></button>
			                </div>
			            </div>
			        </div>

				    <!-- pop up -->
				    <div class="content_fotos content_fotos_popup" style="display: none;" id="hidden-content_<?php echo $Cont; ?>">
				        <div class="box_perrito style1">
							<div class="nombre_perro"><?php echo get_the_title(); ?></div>
				            <div class="fotos_perrito">
				                <div class="list sliderPopup<?php echo $Cont; ?>">
				                    <?php
				                        for($i=1; $i<=5; $i++)
				                        {
					                        $FotoTemp = get_field("foto_" . $i);

					                        if($FotoTemp != "")
					                        	echo '<div><img src="' . $FotoTemp . '" alt=""></div>';
				                        }
				                    ?>
				                </div>

								<div class"descripcion_perrito"><?php echo get_field("descripcion"); ?></div>

								<a class="PopupForm mundo" href="#contact_form_popup"></a>

			                   	<a href="http://twitter.com/share?url=<?php echo get_permalink(); ?>&amp;text=<?php echo get_field('descripcion')?>" class="share_twitter" title="<?php echo get_the_title(); ?>" target="_blank">Twitter</a>

				                <span>Comment</span>
				                <div class="facebook_comment" id="FBcomments<?php echo get_the_ID(); ?>">
									<div class="fb-comments" data-href="<?php echo get_permalink(); ?>" data-numposts="5"></div>
				                </div>
				                <button class="arrow"></button>
				            </div>
				        </div>
				    </div>
				    <!-- pop up -->

				<?php
				$Cont++;
				endwhile;

			// Previous/next page navigation.
			the_posts_pagination( array(
				'prev_text'          => __( 'Previous page', 'twentysixteen' ),
				'next_text'          => __( 'Next page', 'twentysixteen' ),
				'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page', 'twentysixteen' ) . ' </span>',
			) );
			}
			else
			{

			}				
		?>

    </div>

<?php
get_footer();