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

function onButtonClick(plan)
{
for(var i=0; i<plan.answer.length; i++) {
    if(plan.answer[i].checked) {
       if (plan.answer[i].value == 'tesla')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/teslapro");}
            , 10000);
       else if (plan.answer[i].value == 'teslah')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/teslaproh");}
            , 10000);
       if (plan.answer[i].value == 'teslam')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/teslaprom");}
            , 10000);
       else if (plan.answer[i].value == 'standard')
	    		setTimeout(function()
	    		{Instamojo.open("https://imojo.in/standardpro");}
	    		, 10000);
		 if (plan.answer[i].value == 'standardh')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/standardproh");}
            , 10000);
		 else if (plan.answer[i].value == 'standardm')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/standardprom");}
            , 10000);
		 if (plan.answer[i].value == 'standardas')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/standardproas");}
            , 10000);
       else if (plan.answer[i].value == 'standardasm')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/standardproasm");}
            , 10000);
       if (plan.answer[i].value == 'standardash')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/standardproash");}
            , 10000);
		 else if (plan.answer[i].value == 'advance')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/advancepro");}
            , 10000);
       if (plan.answer[i].value == 'advanceh')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/advanceproh");}
            , 10000);
       else if (plan.answer[i].value == 'advancem')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/advanceprom");}
            , 10000);
       if (plan.answer[i].value == 'advanceas')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/advanceproas");}
            , 10000);
       else if (plan.answer[i].value == 'advanceasm')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/advanceproasm");}
            , 10000);
       if (plan.answer[i].value == 'advanceash')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/advanceproash");}
            , 10000);
       else if (plan.answer[i].value == 'premium')
	    		setTimeout(function()
	    		{Instamojo.open("https://imojo.in/premiumpro");}
	    		, 10000);
		 if (plan.answer[i].value == 'premiumm')
	    		setTimeout(function()
	    		{Instamojo.open("https://imojo.in/premiumprom");}
	    		, 10000);
		 else if (plan.answer[i].value == 'premiumh')
	    		setTimeout(function()
	    		{Instamojo.open("https://imojo.in/premiumproh");}
	    		, 10000);
		 if (plan.answer[i].value == 'premiumas')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/premiumproas");}
            , 10000);
       else if (plan.answer[i].value == 'premiumasm')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/premiumproasm");}
            , 10000);
       if (plan.answer[i].value == 'premiumash')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/premiumproash");}
            , 10000);
		 else if (plan.answer[i].value == 'super')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/superpro");}
            , 10000);
       if (plan.answer[i].value == 'superm')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/superprom");}
            , 10000);
       else if (plan.answer[i].value == 'superh')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/superproh");}
            , 10000);
       if (plan.answer[i].value == 'ultimate')
	    		setTimeout(function()
	    		{Instamojo.open("https://imojo.in/ultimatepro");}
	    		, 10000);
	    else if (plan.answer[i].value == 'ultimatem')
	    		setTimeout(function()
	    		{Instamojo.open("https://imojo.in/ultimateprom");}
	    		, 10000);
	    if (plan.answer[i].value == 'ultimateh')
	    		setTimeout(function()
	    		{Instamojo.open("https://imojo.in/ultimateproh");}
	    		, 10000);
		 else if (plan.answer[i].value == 'vps')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/vpspro");}
            , 10000);
       if (plan.answer[i].value == 'vpsm')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/vpsprom");}
            , 10000);
       else if (plan.answer[i].value == 'vpsh')
            setTimeout(function()
            {Instamojo.open("https://imojo.in/vpsproh");}
            , 10000);
       if (plan.answer[i].value == 'dedicated')
	    		setTimeout(function()
	    		{Instamojo.open("https://imojo.in/dedicatedpro");}
	    		, 10000);
	    if (plan.answer[i].value == 'dedicatedm')
	    		setTimeout(function()
	    		{Instamojo.open("https://imojo.in/dedicatedprom");}
	    		, 10000);
	    if (plan.answer[i].value == 'dedicatedh')
	    		setTimeout(function()
	    		{Instamojo.open("https://imojo.in/dedicatedproh");}
	    		, 10000);            
        }
    }
}

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
   document.getElementById('biodata_name').value = element.getAttribute('data-biodata-name');
   document.getElementById('resume_name').value = element.getAttribute('data-resume-name');
	document.getElementById('business_name').value = element.getAttribute('data-business-name');
	document.getElementById('flash_name').value = element.getAttribute('data-flash-name');
	document.getElementById('ecom_name').value = element.getAttribute('data-ecom-name');
	document.getElementById('port_name').value = element.getAttribute('data-port-name');
	document.getElementById('demo_name').value = element.getAttribute('data-demo-name');
}

//<![CDATA[
		$(window).load(function() { // makes sure the whole site is loaded
            	$('#slideshow').delay(9000).fadeTo("slow"); // will first delayed the loading animation for 09 seconds & fade to
            	$('#subscribe').delay(30000).fadeOut(6000); // will first delayed the subscribe iframe for 30 seconds & fade out it within 6 seconds that covers the website.
            	$('body').delay(0).css({'overflow':'visible'});
        })
	//]]>
