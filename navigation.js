const toggleMenu = document.querySelector('.navigation button');
const menu = document.querySelector('.navigation ul');

toggleMenu.addEventListener('click', function() {
	const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
	toggleMenu.setAttribute('aria-expanded', !open);
	menu.hidden = !menu.hidden;
	document.body.setAttribute("class", "noscroll");
	const noscroll = document.querySelector('.noscroll');
	if(menu.hidden)
	{
		noscroll.style.overflow = "scroll";
	}
	else
	{
		noscroll.style.overflow = "hidden";
	}
});