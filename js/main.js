jQuery(document).ready(function(){
	var modalTriggerBts = $('a[data-type="cd-modal-trigger"]'),
		coverLayer = $('.cd-cover-layer');
	/*
		convert a cubic bezier value to a custom mina easing
		http://stackoverflow.com/questions/25265197/how-to-convert-a-cubic-bezier-value-to-a-custom-mina-easing-snap-svg
	*/
	var duration = 600,
		epsilon = (1000 / 60 / duration) / 4,
		firstCustomMinaAnimation = bezier(.63,.35,.48,.92, epsilon);

	modalTriggerBts.each(function(){
		initModal($(this));
	});

	function initModal(modalTrigger) {
		var modalTriggerId =  modalTrigger.attr('id'),
			modal = $('.cd-modal[data-modal="'+ modalTriggerId +'"]'),
			svgCoverLayer = modal.children('.cd-svg-bg'),
			paths = svgCoverLayer.find('path'),
			pathsArray = [];
		//store Snap objects
		pathsArray[0] = Snap('#'+paths.eq(0).attr('id')),
		pathsArray[1] = Snap('#'+paths.eq(1).attr('id')),
		pathsArray[2] = Snap('#'+paths.eq(2).attr('id'));

		//store path 'd' attribute values	
		var pathSteps = [];
		pathSteps[0] = svgCoverLayer.data('step1');
		pathSteps[1] = svgCoverLayer.data('step2');
		pathSteps[2] = svgCoverLayer.data('step3');
		pathSteps[3] = svgCoverLayer.data('step4');
		pathSteps[4] = svgCoverLayer.data('step5');
		pathSteps[5] = svgCoverLayer.data('step6');
		
		//open modal window
		modalTrigger.on('click', function(event){
			event.preventDefault();
			modal.addClass('modal-is-visible');
			coverLayer.addClass('modal-is-visible');
			animateModal(pathsArray, pathSteps, duration, 'open');
		});

		//close modal window
		modal.on('click', '.modal-close', function(event){
			event.preventDefault();
			modal.removeClass('modal-is-visible');
			coverLayer.removeClass('modal-is-visible');
			animateModal(pathsArray, pathSteps, duration, 'close');
		});
	}

	function animateModal(paths, pathSteps, duration, animationType) {
		var path1 = ( animationType == 'open' ) ? pathSteps[1] : pathSteps[0],
			path2 = ( animationType == 'open' ) ? pathSteps[3] : pathSteps[2],
			path3 = ( animationType == 'open' ) ? pathSteps[5] : pathSteps[4];
		paths[0].animate({'d': path1}, duration, firstCustomMinaAnimation);
		paths[1].animate({'d': path2}, duration, firstCustomMinaAnimation);
		paths[2].animate({'d': path3}, duration, firstCustomMinaAnimation);
	}

	function bezier(x1, y1, x2, y2, epsilon){
		//https://github.com/arian/cubic-bezier
		var curveX = function(t){
			var v = 1 - t;
			return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
		};

		var curveY = function(t){
			var v = 1 - t;
			return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
		};

		var derivativeCurveX = function(t){
			var v = 1 - t;
			return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (- t * t * t + 2 * v * t) * x2;
		};

		return function(t){

			var x = t, t0, t1, t2, x2, d2, i;

			// First try a few iterations of Newton's method -- normally very fast.
			for (t2 = x, i = 0; i < 8; i++){
				x2 = curveX(t2) - x;
				if (Math.abs(x2) < epsilon) return curveY(t2);
				d2 = derivativeCurveX(t2);
				if (Math.abs(d2) < 1e-6) break;
				t2 = t2 - x2 / d2;
			}

			t0 = 0, t1 = 1, t2 = x;

			if (t2 < t0) return curveY(t0);
			if (t2 > t1) return curveY(t1);

			// Fallback to the bisection method for reliability.
			while (t0 < t1){
				x2 = curveX(t2);
				if (Math.abs(x2 - x) < epsilon) return curveY(t2);
				if (x > x2) t0 = t2;
				else t1 = t2;
				t2 = (t1 - t0) * .5 + t0;
			}

			// Failure
			return curveY(t2);

		};
	};
});

function YesStatus(val)
{
    if(val==="Yes")
       document.getElementById('yes').style.display='block';
    else
       document.getElementById('yes').style.display='none';
}

function YesStatus1(val)
{
	if(val==="Yes")
       document.getElementById('yes1').style.display='block';
    else
       document.getElementById('yes1').style.display='none';
}

function YesStatus2(val)
{
    if(val==="Yes")
       document.getElementById('yes2').style.display='block';
    else
       document.getElementById('yes2').style.display='none';
}

function YesStatus3(val)
{
	if(val==="Yes")
       document.getElementById('yes3').style.display='block';
    else
       document.getElementById('yes3').style.display='none';
}

function EducationStatus(val)
{
	if(val==="Other")
       document.getElementById('other education').style.display='block';
    else
       document.getElementById('other education').style.display='none';
}

function EducationStatus1(val)
{   
   if(val==="Other")
       document.getElementById('education other').style.display='block';
    else
       document.getElementById('education other').style.display='none';
}

function EmploymentStatus(val)
{
	if(val==="Other")
       document.getElementById('other employment').style.display='block';
    else
       document.getElementById('other employment').style.display='none';
}
function EmploymentStatus1(val)
{   
   if(val==="Other")
       document.getElementById('employment other').style.display='block';
    else
       document.getElementById('employment other').style.display='none';
}

function ProfessionStatus(val)
{
	if(val==="Other")
       document.getElementById('other profession').style.display='block';
    else
       document.getElementById('other profession').style.display='none';
}

function ProfessionStatus1(val)
{   
   if(val==="Other")
       document.getElementById('profession other').style.display='block';
    else
       document.getElementById('profession other').style.display='none';
}

function HeightStatus(val)
{
	if(val==="Other")
       document.getElementById('other height').style.display='block';
    else
       document.getElementById('other height').style.display='none';
}

function HeightStatus1(val)
{   
   if(val==="Other")
       document.getElementById('height other').style.display='block';
    else
       document.getElementById('height other').style.display='none';
}

function WeightStatus(val)
{	   
	if(val==="Other")
       document.getElementById('other weight').style.display='block';
    else
       document.getElementById('other weight').style.display='none';
}

function WeightStatus1(val)
{
	if(val==="Other")
       document.getElementById('weight other').style.display='block';
    else
       document.getElementById('weight other').style.display='none';   
}

function reply_click(element)
{
    document.getElementById('design_name').value = element.getAttribute('data-design-name');
	document.getElementById('business_name').value = element.getAttribute('data-business-name');
	document.getElementById('flash_name').value = element.getAttribute('data-flash-name');
	document.getElementById('ecom_name').value = element.getAttribute('data-ecom-name');
	document.getElementById('port_name').value = element.getAttribute('data-port-name');
}

//<![CDATA[
		$(window).on('load', function() { // makes sure the whole site is loaded
		$('#slideshow').fadeOut(); // will first fade out the loading animation 
            	$('#slideshow').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
            	$('#slideshow').delay(350).css({'overflow':'visible'});
		})
	//]]>
