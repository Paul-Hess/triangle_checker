 var triangleReturn = " "

var triangle = function(side1, side2, side3) {
  if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
    triangleReturn = "not a triangle";
  } else if (side1 === side2 && side1 === side3) {
    triangleReturn = "equilateral";
  } else if (side1 === side2 && side1 !== side3) {
    triangleReturn = "isosceles";
  } else if (side1 !== side2 && side1 !== side3) {
    triangleReturn = "scalene";
  };
  return triangleReturn;
};

$(function() {
  $("form#triangle").submit(function(event) {
    var sideInput1 = $('input#side1').val();
    var sideInput2 = $('input#side2').val();
    var sideInput3 = $('input#side3').val();
    parseFloat(sideInput1);
    parseFloat(sideInput2);
    parseFloat(sideInput3);
    triangle(sideInput1, sideInput2, sideInput3);

    $('span.results').empty().text(triangleReturn);

    event.preventDefault();
  });
});
