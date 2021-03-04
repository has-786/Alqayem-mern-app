import '../css/navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar(props)
{
  return <div>

  <nav>
    <label for="drop" class="toggle" id='menu' style={{marginTop:'0px'}}>Menu</label>
    <input type="checkbox" id="drop" />
    <ul class="menu">
      <li><Link name='single' to="/">Home</Link></li>
      <li><Link  name='single' to="/about">About</Link></li>
      <li>
        <label for="drop-2" class="toggle">Prayers &nbsp; <i style={{color:'green'}} class='fas fa-angle-down'></i></label>
        <Link to="#">Prayers &nbsp;<i style={{color:'green'}} class='fas fa-angle-down'></i></Link>
        <input type="checkbox" id="drop-2"/>
        <ul>
          <li><Link to="#">Namaz</Link></li>
          <li><Link to="#">Quran</Link></li>
          <li><Link to="#">Duas</Link></li>
          <li><Link to="#">Ziyarat</Link></li>
          <li><Link to="#">Aamal</Link></li>
        </ul>
      </li>
      <li><Link  name='single' to="/research">Events</Link></li>
      <li><Link  name='single' to="/archives">Activities</Link></li>      
      <li><Link  name='single' to="/gallery">Gallery</Link></li>
      <li><Link  name='single' to="/gallery">Contact</Link></li>
      <li style={{float:'right',position:'fixed'}}><Link  name='single' to="/gallery">Sign in</Link></li>
    </ul>
  </nav>
  <div class="chat_on" style={{position:'fixed',bottom:0,right:5,zIndex:2}}>
         <div id='chat' style={{display:'none'}}>
            <iframe
            allow="microphone;"
            width="350"
            height="350"
            src="https://console.dialogflow.com/api-client/demo/embedded/950e1d1f-af06-4760-abd1-fbec695161b5">
            </iframe>
         </div>
         <span class="chat_on_icon"><i id='chat_icon' style={{float:'right',color:'#003a9b',fontSize:'50px'}} class="fa fa-comments" aria-hidden="true" onClick={(evt)=>chatbot()}></i></span>
  </div>
</div>
}


function chatbot(){

  if(document.getElementById('chat').style.display==='none'){
    document.getElementById('chat').style.display='block';
    document.getElementById('chat_icon').className='fa fa-close';

    document.getElementById('chat_icon').style.float='left';
    document.getElementById('chat_icon').style.color='black';
    document.getElementById('chat_icon').style.fontSize='25px';


  }
  else {
    document.getElementById('chat').style.display='none';
    document.getElementById('chat_icon').className='fa fa-comments';

    document.getElementById('chat_icon').style.float='right';
    document.getElementById('chat_icon').style.color='#003a9b';
    document.getElementById('chat_icon').style.fontSize='50px';


  }


}
