import React from 'react';
export default class CommentSection extends React.Component {
  constructor(props){
    super();
  }
  render(){
    return (
      <div id="disqus_thread"></div>
    );
  }
  componentDidMount(){
    
      /**
      *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
      *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
      /*
      var disqus_config = function () {
      this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };
      */
     (function() { // DON'T EDIT BELOW THIS LINE
     let s = document.createElement('script');
     s.src = 'https://tengil.disqus.com/embed.js';
     s.setAttribute('data-timestamp', +new Date());
     (document.head || document.body).appendChild(s);
     })();
  }
}