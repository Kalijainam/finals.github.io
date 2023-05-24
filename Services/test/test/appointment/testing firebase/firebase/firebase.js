const firebaseConfig = {
    apiKey: "AIzaSyAaHTtyfLQY1TXcECUQyliBZQMSEH0xUVI",
    authDomain: "datacollection-695d1.firebaseapp.com",
    projectId: "datacollection-695d1",
    storageBucket: "datacollection-695d1.appspot.com",
    messagingSenderId: "141210714206",
    appId: "1:141210714206:web:455d72e475291914a634cf"

}
firebaseConfig.initializeApp(firebaseConfig);


var fileText = document.querySelector(".fileText");
var uploadPercentage = document.querySelector(".uploadPercentage");
var progress = document.querySelector(".progress");
var percentVal;
var fileItem;
var fileName;
var img = document.querySelector(".img");
 function getFile(e){
    fileItem = e.target.files[0];
    fileName = fileItem.name;
    fileText.innerHTML = fileName;
 }
 function uploadImage(){
    let storageRef = firebase.storage().ref("images/"+fileName);
    let uploadTask = storageRef.put(fileItem);

    uploadTask.on("state_changed",(snapshot)=>{
        console.log(snapshot);
        percentVal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
        console.log(percentVal);
        uploadPercentage.innerHTML = percentVal+"%";
        progress.getElementsByClassName.width=percentVal+"%";
    },(error)=>{
        console.log("error is", error);
    },()=>{
        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
            console.log("URL",url);

            if(url != ""){
                img.setAttribute("src",url);
                img.style.display="block";

            }

        })

    })
 }