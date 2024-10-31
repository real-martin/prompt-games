document.querySelectorAll('pre.highlight').forEach((pre_code) => {
	pre_code.style.setProperty('position', 'relative');
	const code = pre_code.querySelector('code').innerText;

	var copyCodeButton = document.createElement("Button");
	copyCodeButton.innerHTML = "Copy";
	copyCodeButton.style = "top:10px;right:10px;position:absolute;color:#ffffff;background-color:#000000";
	pre_code.appendChild(copyCodeButton);

	copyCodeButton.addEventListener('click', () => {
	    window.navigator.clipboard.writeText(code);
	    copyCodeButton.classList.add('copied');
	    copyCodeButton.innerText = 'Copied';

	    setTimeout(() => {
	      copyCodeButton.classList.remove('copied');
	      copyCodeButton.innerText = 'Copy';
	    }, 2000);
	  });
});
