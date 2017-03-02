$(document).ready(function()
{
	var SexoSelected = "";
	var EdadSelected = "";
	var TipoSelected = "";
	var EdadNumberSelected = "";

	$(".PopupPerritos").click(function(e)
	{		
		$(".PopupPerritos").trigger("click");
	});

	$(".PerritosSingle").click(function(e)
	{		
		$(".PerritosSingle").trigger("click");
	});


	$(".PerritosSingle").fancybox(
	{
		width		: '100%',
		height		: '100%',
		padding		: '0px',
	    beforeShow: function ()
	    {
	    	var Pos = $(this.element).attr("data-popup");
	    	var ID = $(this.element).attr("data-id");

	    	var nombrePopup = '.sliderPopup' + Pos;

			sliderInit(nombrePopup);

			var CargoFB = $('#FBcommentsPopup' + ID).attr('data-cargofb');

			if(CargoFB != true)
			{
				FB.XFBML.parse(document.getElementById('FBcommentsPopup' + ID));

				$('#FBcommentsPopup' + ID).attr('data-cargofb', 'true');
			}
	    },
		afterClose : function()
		{
	    	var nombrePopup = '.sliderPopup' + $(this.element).attr("data-popup");

			$(nombrePopup).slick('unslick');
		}
	}).trigger('click');

	$.fn.customerPopup = function (e, w, h, blnResize)
	{
		// Prevent default anchor event
	    e.preventDefault();

    	var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    	var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    	var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    	var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

	    // Set values for window
	    w = w || '500';
	    h = h || '400';
	    strResize = (blnResize ? 'yes' : 'no');

	    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
	    var top = ((height / 2) - (h / 2)) + dualScreenTop;

	    var newWindow = window.open(this.attr('href'), this.attr('title'), 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
	}

	$('.share_twitter').on("click", function(e)
	{
      $(this).customerPopup(e);
    });

	$('.share_fb').on("click", function(e)
	{
      $(this).customerPopup(e);
    });

	$(".Boton_macho").click(function(e)
	{
			$(this).addClass("active");
			$(".Boton_hembra").removeClass("active");

		  SexoSelected = "macho";

		  $('.content_fotos_posts').hide();

		  var ClasesTemp = '.'+SexoSelected;

			if(EdadSelected != "")
				ClasesTemp = ClasesTemp + '.' + EdadSelected;

			if(TipoSelected != "")
				ClasesTemp = ClasesTemp + '.' + TipoSelected;

			if(EdadNumberSelected != "")
				ClasesTemp = ClasesTemp + '.Edad' + EdadNumberSelected;

		  $(ClasesTemp).fadeIn(450);
	});

	$(".Boton_hembra").click(function(e)
	{
		$(this).addClass("active");
		$(".Boton_macho").removeClass("active");

	    SexoSelected = "hembra";

	    $('.content_fotos_posts').hide();

		  var ClasesTemp = '.'+SexoSelected;

			if(EdadSelected != "")
				ClasesTemp = ClasesTemp + '.' + EdadSelected;

			if(TipoSelected != "")
				ClasesTemp = ClasesTemp + '.' + TipoSelected;

			if(EdadNumberSelected != "")
				ClasesTemp = ClasesTemp + '.Edad' + EdadNumberSelected;

		  $(ClasesTemp).fadeIn(450);
	});

	$(".Boton_menor2").click(function(e)
	{		
		$(this).addClass("active");

		var Valor = $(".Edadnumero").text();
    
    if(Valor > 0)
    {
	    Valor --;     

			EdadNumberSelected = Valor; 
	    $(".Edadnumero").text(Valor);    
    }

		$(".Boton_mayor2").removeClass("active");

	  EdadSelected = "menor";

	  $('.content_fotos_posts').hide();

		var ClasesTemp = '.'+EdadSelected;

		if(SexoSelected != "")
			ClasesTemp = ClasesTemp + '.' + SexoSelected;

		if(TipoSelected != "")
			ClasesTemp = ClasesTemp + '.' + TipoSelected;

		if(EdadNumberSelected != "")
			ClasesTemp = ClasesTemp + '.Edad' + EdadNumberSelected;

		$(ClasesTemp).fadeIn(450);
	});

	$(".Boton_mayor2").click(function(e)
	{
		$(this).addClass("active");

		var Valor = $(".Edadnumero").text();
    
    if(Valor < 20)
    {
    	Valor ++;

    	EdadNumberSelected = Valor;
	    $(".Edadnumero").text(Valor);    
    }
    
		$(".Boton_menor2").removeClass("active");

	  EdadSelected = "mayor";

	  $('.content_fotos_posts').hide();

		var ClasesTemp = '.'+EdadSelected;

		if(SexoSelected != "")
			ClasesTemp = ClasesTemp + '.' + SexoSelected;

		if(TipoSelected != "")
			ClasesTemp = ClasesTemp + '.' + TipoSelected;

		if(EdadNumberSelected != "")
			ClasesTemp = ClasesTemp + '.Edad' + EdadNumberSelected;

		$(ClasesTemp).fadeIn(450);
	});

	$(".Boton_perro").click(function(e)
	{
		$(this).addClass("active");
		$(".Boton_gato").removeClass("active");

	    TipoSelected = "perros";

	    $('.content_fotos_posts').hide();

		var ClasesTemp = '.'+TipoSelected;

		if(SexoSelected != "")
			ClasesTemp = ClasesTemp + '.' + SexoSelected;

		if(EdadSelected != "")
			ClasesTemp = ClasesTemp + '.' + EdadSelected;

		if(EdadNumberSelected != "")
			ClasesTemp = ClasesTemp + '.Edad' + EdadNumberSelected;

		$(ClasesTemp).fadeIn(450);
	});

	$(".Boton_gato").click(function(e)
	{
		$(this).addClass("active");
		$(".Boton_perro").removeClass("active");

	    TipoSelected = "gatos";

	    $('.content_fotos_posts').hide();

		var ClasesTemp = '.'+TipoSelected;

		if(SexoSelected != "")
			ClasesTemp = ClasesTemp + '.' + SexoSelected;

		if(EdadSelected != "")
			ClasesTemp = ClasesTemp + '.' + EdadSelected;

		if(EdadNumberSelected != "")
			ClasesTemp = ClasesTemp + '.Edad' + EdadNumberSelected;

		$(ClasesTemp).fadeIn(450);

	});


	$(".PopupPerritos").fancybox(
	{
		width		: '100%',
		height		: '100%',
		padding		: '0px',
	    beforeShow: function ()
	    {
	    	var Pos = $(this.element).attr("data-popup");
	    	var ID = $(this.element).attr("data-id");

	    	var nombrePopup = '.sliderPopup' + Pos;

			sliderInit(nombrePopup);

			var CargoFB = $('#FBcommentsPopup' + ID).attr('data-cargofb');

			if(CargoFB != true)
			{
				FB.XFBML.parse(document.getElementById('FBcommentsPopup' + ID));

				$('#FBcommentsPopup' + ID).attr('data-cargofb', 'true');
			}
	    },
		afterClose : function()
		{
	    	var nombrePopup = '.sliderPopup' + $(this.element).attr("data-popup");

			$(nombrePopup).slick('unslick');
		}
	});

	$(".PopupForm").fancybox(
	{
		width		: '100%',
		height		: '100%',
		padding		: '0px',
	});

	sliderInit('.sliderNormal');

	document.addEventListener('malinkyLoadPostsComplete', function(e)
	{
		var Elementos = 0;
		var Pos = 0;
	    
		$('.sliderNormal').each(function(i, obj)
		{
			if($(this).hasClass('slick-initialized') == false)
			{
				if(Elementos == 0)
					Elementos = i+1;

				$(this).not('.slick-initialized').slick(
			   	{
			        dots: true,
			        infinite: true,
			        speed: 500,
			        slidesToShow: 1,
			        slidesToScroll: 1,
				});
			}
		});
		
		if(SexoSelected != "")
		{
		  $('.content_fotos_posts').hide();
		  $('.'+SexoSelected+'.'+EdadSelected+'.'+TipoSelected+'.Edad'+EdadNumberSelected).fadeIn(450);			
		}

		Pos = 0;
		$('.PopupPerritos').each(function(i, obj)
		{
			Pos = i+1;

			if(Pos >= Elementos)
			{
				$(this).attr("href", "#hidden-content_" + Pos);
			}
		});

		Pos = 0;
		$('.content_fotos_popup').each(function(i, obj)
		{
			Pos = i+1;

			if(Pos >= Elementos)
			{
				$(this).attr("id", "hidden-content_" + Pos);
			}
		});
	});
});

function sliderInit(Nombre)
{
   	$(Nombre).slick(
   	{
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
	});
};