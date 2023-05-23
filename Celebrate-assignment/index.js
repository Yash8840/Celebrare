console.log(loader);

// To remove loader after 2seconds
setTimeout(()=>{
  loader.style.display = "none"
},2000)

var imgUrl;
// Adding an svg for heart shape
var badge = "M105.833 31.7333C78.2813 -20.965 0.833328 -5.57667 0.833328 60.445C0.833328 103.903 46.4558 150.593 98.5148 206.745C100.552 208.95 103.198 210.047 105.833 210.047C108.469 210.047 111.115 208.95 113.152 206.745C165.41 150.383 210.833 103.915 210.833 60.445C210.833 -5.79834 133.175 -20.5683 105.833 31.7333Z";


var loader = document.getElementsByClassName('preloader')[0]
const backdrop = document.getElementById('backdrop');
const crossBtn = document.getElementById('cross');
const chooseBtn = document.getElementById('choose-btn');
const modal = document.getElementById('delete-modal');
const file = document.getElementById('file');
const original = document.querySelector('.original')
const heart = document.querySelector('.heart');
const square = document.querySelector('.square')
const rectangle = document.querySelector('.rectangle');
const circle = document.querySelector('.circle');
const useThisBtn = document.getElementById('use-this-btn');
const previewImg = document.getElementById('main-image');
const uploadedImgDiv = document.getElementById('img-grid');
const uploadProgress = document.getElementById('delete-modal').querySelector('h2');
const imgGrid = uploadedImgDiv;

// setting up firebase configurations
const firebaseConfig = {
  apiKey: "AIzaSyC9DyOxTpz54JnoV-jtdtZFofeGa229CNU",
  authDomain: "celebrare-afdb2.firebaseapp.com",
  projectId: "celebrare-afdb2",
  storageBucket: "celebrare-afdb2.appspot.com",
  messagingSenderId: "835627394168",
  appId: "1:835627394168:web:90705cbdcbd85314f3798d"
};
firebase.initializeApp(firebaseConfig);




const toggleModalHandler = async(e)=>{
  uploadProgress.innerHTML = 'Uploading Image...'
  backdrop.style.display = 'block'
  modal.style.display = 'flex';
  

  var storageRef = firebase.storage().ref();

  var uploadTask = storageRef.child('images/').put(e.target.files[0]);

  uploadTask.on('state_changed', 
  (snapshot) => {
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log('File available at', downloadURL);
      previewImg.style.backgroundImage = `url(${downloadURL})`
      imgUrl = downloadURL;
      uploadProgress.innerHTML = 'Uploaded Image'
    });
  }
);
 
}

const useBtnHandler = ()=>{
  modal.style.display = 'none';
  backdrop.style.display = 'none'
  previewImg.style.backgroundImage= `url(${'https://i.stack.imgur.com/h6viz.gif'})`
  console.log('clicked');
  uploadedImgDiv.style.backgroundImage = `url(${imgUrl})`

}

const heartHandler = ()=>{
  previewImg.style.borderRadius = '0%';
  uploadedImgDiv.style.borderRadius = '0%'
  previewImg.classList.add('small_heart');
  previewImg.style.width = '10rem'
  previewImg.style.height = '10rem'
  uploadedImgDiv.classList.add('heartwa');
  uploadedImgDiv.style.height = '212px';
  uploadedImgDiv.style.width = '212px';
  //Adding blurred border
  uploadedImgDiv.style.boxShadow = '#FFFFFF 0 0 10px 16px inset'
  previewImg.style.boxShadow ='#ffffff 0 0 10px 10px inset'
}
const squareHandler = ()=>{
  previewImg.style.borderRadius = '0%';
  uploadedImgDiv.style.borderRadius = '0%';
  uploadedImgDiv.classList.remove('heartwa');
  if(previewImg.classList.contains('small_heart')){
    previewImg.classList.remove('small_heart')
  }
  console.log('square');
 previewImg.style.width = '8rem';
 previewImg.style.height = '8rem';
 uploadedImgDiv.style.width = '200px'
 uploadedImgDiv.style.height = '200px'
 //Adding blurred border
 uploadedImgDiv.style.boxShadow = ' #ffffff 0 0 10px 10px inset'
 previewImg.style.boxShadow ='#ffffff 0 0 10px 10px inset'
}
const rectangleHandler = ()=>{
  previewImg.style.borderRadius = '0%';
  uploadedImgDiv.style.borderRadius = '0%';
  uploadedImgDiv.classList.remove('heartwa');

  if(previewImg.classList.contains('small_heart')){
    previewImg.classList.remove('small_heart')
  }
  previewImg.style.width = '10.5rem'
  previewImg.style.height = '8rem';
  uploadedImgDiv.style.width = '290px'
  uploadedImgDiv.style.height = '200px';
  //Adding blurred border
  uploadedImgDiv.style.boxShadow ='#ffffff 0 0 10px 10px inset';
  previewImg.style.boxShadow ='#ffffff 0 0 10px 10px inset'
}
const originalHandler = ()=>{
  previewImg.style.borderRadius = '0%';
  uploadedImgDiv.style.borderRadius = '0%';
  uploadedImgDiv.classList.remove('heartwa');

  if(previewImg.classList.contains('small_heart')){
    previewImg.classList.remove('small_heart')
  }
  previewImg.style.width = '8rem'
  previewImg.style.height = '9rem';
  uploadedImgDiv.style.width = '250px'
  uploadedImgDiv.style.height = '280px'
};
const circleHandler = ()=>{
  if(previewImg.classList.contains('small_heart')){
    previewImg.classList.remove('small_heart')
  }
  uploadedImgDiv.classList.remove('heartwa');
  previewImg.style.borderRadius = '50%';
  uploadedImgDiv.style.borderRadius = '50%';
  previewImg.style.width = '8rem'
  previewImg.style.height = '9rem';
  //Adding blurred border
  uploadedImgDiv.style.boxShadow ='#ffffff 0 0 10px 10px inset';
  previewImg.style.boxShadow ='#ffffff 0 0 10px 10px inset';
  
}


// Event listeners
file.addEventListener('change', toggleModalHandler);
useThisBtn.addEventListener('click' , useBtnHandler);
crossBtn.addEventListener('click' , ()=>{modal.style.display = 'none'
backdrop.style.display = 'none'});
backdrop.addEventListener('click' , ()=>{modal.style.display = 'none'
backdrop.style.display = 'none'});
heart.addEventListener('click' , heartHandler);
square.addEventListener('click' , squareHandler);
rectangle.addEventListener('click' , rectangleHandler);
original.addEventListener('click' , originalHandler);
circle.addEventListener('click' , circleHandler)
