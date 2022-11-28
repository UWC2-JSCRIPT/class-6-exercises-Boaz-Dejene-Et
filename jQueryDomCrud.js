$( document ).ready(function() {
    // Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>
    var anchorTag = $("<a></a>").text("Buy Now!").attr('id', 'cta');
    $("main").append(anchorTag);

    // Access (read) the data-color attribute of the <img>,
    // log to the console
    console.log($("img").data().color)

    // Update the third <li> item ("Turbocharged"),
    // set the class name to "highlight"
    $("li:eq('2')").addClass("highlight")

    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")
    $("p").last().remove()

    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"
    $('#cta').bind('click', function() {
        const element = $("#cta");
        // the question says remove the link so i removed 
        // the anchor tag and added a h1 tag.

        // start of Code
        // element.remove()
        // var newTag = $("<h1></h1>").text("Added to cart").attr('id', 'cta');
        // $("main").append(anchorTag);
        // end of Code

        // this is just to change the text inside the anchor tag
        // start of Code
        const textToReplace = element.text();
        const newText = textToReplace.replace("Buy Now!", "Added to cart");
        element.text(newText);
        // end of Code
    });
});