function addPaperRows(classToFill, rowHeight)
{
	var className = "." + classToFill;
	var height = $(className).outerHeight();
	console.log("className: " + className);
	console.log("height: " + height);
	var darkRow = 1;
	var html = "";
	for (var heightLeft = height; heightLeft > 0; heightLeft -= rowHeight)
	{
		console.log("heightLeft: " + heightLeft);
		if (darkRow == 1)
		{
			/* Add a dark row. */
			html += "<div class=\"row paper-row dark\" style=\"height: " + rowHeight + "px;\"></div>";
			darkRow = 0;
		}
		else
		{
			/* Add a light row. */
			html += "<div class=\"row paper-row light\"></div>";
			darkRow = 1;
		}
	}
	/* Set the inner HTML of the element to be filled. */
	$(className).html(html);
}
