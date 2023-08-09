import { storage } from './firebase';

// Upload a file to a specific path
export const uploadFile = (path, file) => {
  const ref = storage.ref(path);
  return ref.put(file);
};

// Get a download URL for a file
export const getFileURL = (path) => {
  const ref = storage.ref(path);
  return ref.getDownloadURL();
};

// Delete a file
export const deleteFile = (path) => {
  const ref = storage.ref(path);
  return ref.delete();
};
