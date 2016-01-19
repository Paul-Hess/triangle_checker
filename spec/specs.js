describe('triangle', function(){
  it('should return equilateral for equal sides', function (){
    expect(triangle(2, 2, 2)).to.equal('equilateral');
  });

  it('should return isosceles for two equal sides', function (){
    expect(triangle(2, 2, 3)).to.equal('isosceles');
  });

  it('should return scalene for three unequal sides', function (){
    expect(triangle(2, 3, 4)).to.equal('scalene');
  });

  it('should catch non triangles', function() {
    expect(triangle(1, 2, 3)).to.equal("not a triangle");
  });
});
