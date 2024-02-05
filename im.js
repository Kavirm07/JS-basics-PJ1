// document.querySelector("#center").addEventListener("mousemove", function(dets){
//     console.log("card banao");
// })

const btn = document.querySelector("#throttle");
 
        // Throttling Function
        const throttleFunction = (func, delay) => {
 
            // Previously called time of the function
            let prev = 0;
            return (...args) => {
                // Current called time of the function
                let now = new Date().getTime();
 
                // Logging the difference
                // between previously 
                // called and current called timings
                // console.log(now - prev, delay);
 
                // If difference is greater
                // than delay call
                // the function again.
                if (now - prev > delay) {
                    prev = now;
 
                    // "..." is the spread
                    // operator here 
                    // returning the function with the 
                    // array of arguments
                    return func(...args);
                }
            }
        }
        document.querySelector("#center")
        .addEventListener("mousemove",
            throttleFunction((dets) => {
                // console.log("button is clicked")
                //our less repetation code
               var div=  document.createElement("div")
               div.classList.add('imagediv');
               div.style.left = dets.clientX +'px';
               div.style.top = dets.clientY +'px';

               var img=  document.createElement("img")
               img.setAttribute("src","fif.gif");
            //    img.setAttribute("src","gif2.gif");
               div.appendChild(img);
               document.body.appendChild(div);
               gsap.to(img,{
                y:"0",
                ease:Power3,
                dutation:.5
                
               })
               gsap.to(img,{
                delay:.1,
                y:"0",
                ease:Power2,
                dutation:0.2
                
               })
               setTimeout(function(){
                  div.remove();
               },3000)
            },  500)
            );