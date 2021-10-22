var image=  document.getElementById("mine-pic")
var source=image.getAttributeNames("src")

var changes=(source)=>{
    document.getElementById("mine-pic").src='/images/mine.jpg' 
  
}

var changes2=(source)=>{
    document.getElementById("mine-pic").src='/images/pic4.png' 
}

const picChange=image.addEventListener("click",changes)
 
let home=document.getElementById("Home")


home.addEventListener("click",()=>{
    let height=home.getBoundingClientRect().height;
    
    for(let i=0;i<2934;i+=40){
       
        window.scroll({
            top:i,
            behavior:'smooth'
        })
       console.log(i)
       if(i>=height){
        break;
    }   
    }

})

let projects=document.getElementById("Projects")
let div=document.getElementsByTagName("div")

projects.addEventListener("click",(e)=>{
    e.preventDefault()
  
    let projectHeight=div[1].getBoundingClientRect().top

   for(let i=0;i<projectHeight;i+=40){     
    window.scrollBy({
        top:i,
        behavior:'smooth'
    })
  
}


})

let profile=document.getElementById("Profiles")

profile.addEventListener("click",(e)=>{
    e.preventDefault()
   
    let profileHeight=div[7].getBoundingClientRect().top
  

   for(let i=0;i<profileHeight;i+=50){     
    window.scrollBy({
        top:i,
        behavior:'smooth'
    })
  
}


})

let aboutMe=document.getElementById("About me")

aboutMe.addEventListener("click",(e)=>{
    e.preventDefault()
   
    let aboutMeHeight=div[17].getBoundingClientRect().top
   

   for(let i=0;i<aboutMeHeight;i+=50){     
    window.scrollBy({
        top:i,
        behavior:'smooth'
    })
  
}


})

let Skills=document.getElementById("Skills")

Skills.addEventListener("click",(e)=>{
    e.preventDefault()
   
    let SkillsHeight=div[22].getBoundingClientRect().top
 

   for(let i=0;i<SkillsHeight;i+=50){     
    window.scrollBy({
        top:i,
        behavior:'smooth'
    })
  
}


})


let contact=document.getElementById("Contacts")

contact.addEventListener("click",(e)=>{
    e.preventDefault()
   
    let contactHeight=div[29].getBoundingClientRect().top
   

   for(let i=0;i<contactHeight;i+=50){     
    window.scrollBy({
        top:i,
        behavior:'smooth'
    })
  
}


})


let buttonUp=document.getElementById("up")

buttonUp.addEventListener("click",(e)=>{
    e.preventDefault();
    
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
      
})

// let buttonLeet=document.getElementsByClassName(".read-more leetcode")

// buttonUp.addEventListener("click",()=>{
//     alert("hi")
//     window.open("https://leetcode.com/aditrout29/")
// })

// let buttongfg=document.getElementsByClassName(".gfg")

// buttongfg.addEventListener("click",()=>{
//     window.open("https://auth.geeksforgeeks.org/user/aditrout29/practice/")
// })


// let buttonGit=document.getElementsByClassName(".github")

// buttonGit.addEventListener("click",()=>{
//     window.open("github.com/jerryadi29")
// })

// let buttonCodechef=document.getElementsByClassName(".codechef")

// buttonCodechef.addEventListener("click",()=>{
//     window.open("https://www.codechef.com/submit/HS08TEST")
// })











const  toSite=()=>{

    const link=`https://616919e88664ff7423cc7e07--hardcore-hypatia-0caf1d.netlify.app/`;

    window.open(link,'_blank')
}

const  toSite1=()=>{

    const link=`https://github.com/jerryadi29/Machine-learning-projects/blob/main/Video%20game.ipynb`;

    window.open(link,'_blank')
}














    
    






