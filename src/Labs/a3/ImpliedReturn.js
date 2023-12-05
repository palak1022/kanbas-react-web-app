function ImpliedReturn(){
  const multiply = (a, b) => a * b;
  const fourTimesFive = multiply(4, 5);
  console.log(fourTimesFive);
  const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
return(
  <>
  <div>
    <h1>
      Implied return 
    </h1>
    <p>
    fourTimesFive={fourTimesFive}<br/>

    </p>
    <p>
      multiply (4,5)= {fourTimesFive}
    </p>
  </div>
  </>
)
}
export default ImpliedReturn;
