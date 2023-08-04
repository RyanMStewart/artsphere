class Artwork {
    constructor(id, title, description, imageUrl, category, tags, artistId, createdAt, rating) {
      this.id = id; // Unique identifier for the artwork
      this.title = title; // Title of the artwork
      this.description = description; // Description or artist's statement
      this.imageUrl = imageUrl; // URL to the image file
      this.category = category; // Category like Painting, Sculpture, Digital, etc.
      this.tags = tags; // Tags or keywords associated with the artwork
      this.artistId = artistId; // ID of the artist who created the artwork
      this.createdAt = createdAt; // Timestamp of when the artwork was added
      this.rating = rating; // Average rating of the artwork
    }
  }
  
  // Function to create an Artwork object from a Firestore document
  Artwork.fromFirestore = function (document) {
    return new Artwork(
      document.id,
      document.data().title,
      document.data().description,
      document.data().imageUrl,
      document.data().category,
      document.data().tags,
      document.data().artistId,
      document.data().createdAt,
      document.data().rating
    );
  };
  
  export default Artwork;
  