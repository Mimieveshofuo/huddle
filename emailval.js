const form = document.querySelector('form');
const email= document.querySelector('#email');

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    checkRequired(email)
    checkRequired(email)
});
function checkRequired(input){

    if(input.value.trim() === ''){
        showError(input, 'Email is required');
    }
    else{
        showSuccess(input)
    }
}
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(input.value.trim())){
        showSuccess(input);
      } else {
        showError(input, 'Please provide a valid email');
      }
  }
  function showError(input, message){
    //   const parent= input.parentElement;
    //   parent.className= 'error'
    //   const small= parent.querySelector('small');
    //   small.textContent= message;
        input.className='error';
        const small= document.querySelector('small');
        small.textContent=message;
  }
  function showSuccess(input){
      const parent= input.parentElement;
      parent.className='success'
  }