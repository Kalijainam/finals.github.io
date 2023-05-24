// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAaHTtyfLQY1TXcECUQyliBZQMSEH0xUVI",
    authDomain: "datacollection-695d1.firebaseapp.com",
    projectId: "datacollection-695d1",
    storageBucket: "datacollection-695d1.appspot.com",
    messagingSenderId: "141210714206",
    appId: "1:141210714206:web:455d72e475291914a634cf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Get references to DOM elements
  const imageInput = document.getElementById('imageInput');
  const uploadButton = document.getElementById('uploadButton');
  
  // Add event listener to the upload button
  uploadButton.addEventListener('click', handleUpload);
  
  // Function to handle image upload
  function handleUpload() {
    const file = imageInput.files[0];
  
    if (file) {
      // Create a storage reference
      const storageRef = firebase.storage().ref();
  
      // Generate a unique name for the image file
      const imageName = Date.now() + '-' + file.name;
  
      // Upload file to the storage reference
      const uploadTask = storageRef.child(imageName).put(file);
  
      // Listen for upload progress
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Progress update
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          // Handle upload error
          console.error('Upload failed:', error);
        },
        () => {
          // Handle successful upload
          console.log('Upload successful');
  
          // Get the download URL of the uploaded image
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('Image URL:', downloadURL);
            // Use the download URL as needed (e.g., display the image)
          });
        }
      );
    } else {
      console.error('No image selected');
    }
  }
  