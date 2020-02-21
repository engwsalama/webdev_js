const name = "Ali";
const age = 31;
const job = "Web Developer";
const city = "Alex";

let html;

html = '<ul><li>name:'+ name+'</li></ul>';

html = '<ul>'+
    '<li>age:'+ age+
    '</li>'+       
    '</ul'

function hello(){
  return 'hello';
}

html=`
<ul>
<li>name: ${name}</li>
<li>age: ${age}</li>
<li>job: ${job}</li>
<li>city: ${city}</li>
<li>${hello()}</li>
<li>${2+2}</li>
<li>${age >30 ? 'over 30' : 'under 30'}</li>

</ul>
`

document.body.innerHTML = html;