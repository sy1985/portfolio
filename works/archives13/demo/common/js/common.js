
/**
 * ���[���I�[�o�[�摜�ݒ�
 */
jQuery(function()
{
	jQuery("img").each(function()
	{
		if(this.src.match(/_off\.(gif|jpg|png)$/))
		{
			jQuery(this).hover(
				function(){ this.src = this.src.replace("_off." , "_on.")} ,
				function(){ this.src = this.src.replace("_on." , "_off.")}
			);
		}
	});
});

/**
 * �|�b�v�A�b�v�\���֐�
 */
var popup = function(url, w, h)
{
	var win = window.open(url , "popup" , "width=" + w + ",height=" + h + ",menubar=no,toolbar=no,scrollbars=yes,resizable=yes");
	win.focus();
}