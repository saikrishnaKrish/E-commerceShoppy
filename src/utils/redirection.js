import {useHistory  } from 'react-router-dom';

function RedirectToPage(page){
    const history  = useHistory();
    let url=''
    if(page.toLowerCase()=='home'){
      url='/';
    }
    setTimeout(()=>{
      history.push('/')
    },4000)
  }

  export default RedirectToPage;