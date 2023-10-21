function chinko(){
  var images=document.querySelectorAll(".thumbnail-image img");
  var links=document.querySelectorAll(".thumbnail-image");
  var t=document.querySelectorAll('.thumbnail-title a:not([attributes])');
  var titles=[];
  for(let i=0;i<t.length;i++){
      if(t[i].href.includes("/projects/")){
        titles.push(t[i]);
      }
  }
  images.forEach(function(rinku){rinku.src="https://cdn2.scratch.mit.edu/get_image/project/900550182_2820x2100.png";});
  links.forEach(function(rinku){rinku.href="https://scratch.mit.edu/projects/900550182";});
  titles.forEach(function(rinku){rinku.href="https://scratch.mit.edu/projects/900550182";rinku.textContent="柴田理恵(ハーモニー)";});
}
setInterval(chinko,300);