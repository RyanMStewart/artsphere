class Artist {
    constructor(id, name, bio, profilePicture, contactInfo) {
      this.id = id; // Unique identifier for the artist
      this.name = name; // Full name of the artist
      this.bio = bio; // Short biography or description
      this.profilePicture = profilePicture; // URL to the profile picture
      this.contactInfo = contactInfo; // Contact details like email or social media links
    }
  }
  
  // Function to create an Artist object from a Firestore document
  Artist.fromFirestore = function (document) {
    return new Artist(
      document.id,
      document.data().name,
      document.data().bio,
      document.data().profilePicture,
      document.data().contactInfo
    );
  };
  
  export default Artist;
  