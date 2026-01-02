import fs from 'fs';
import path from 'path';
import multer from 'multer';

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

// Function to recursively get all image files in public/images
const getAllImageFiles = (dirPath, relativePath = '') => {
  let results = [];
  const items = fs.readdirSync(dirPath);
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getAllImageFiles(fullPath, path.join(relativePath, item)));
    } else {
      results.push(path.join(relativePath, item));
    }
  }
  return results;
};

export const getImages = (req, res) => {
  try {
    const imagesDir = path.join(process.cwd(), 'public', 'images');
    if (!fs.existsSync(imagesDir)) {
      return res.json([]);
    }
    const imageFiles = getAllImageFiles(imagesDir);
    res.json(imageFiles);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving images' });
  }
};

export const uploadImage = (req, res) => {
  upload.single('image')(req, res, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error uploading image' });
    }
    if (!req.file) {
      return res.status(400).json({ message: 'No image file provided' });
    }
    res.json({ message: 'Image uploaded successfully' });
  });
};

export const deleteImage = (req, res) => {
  try {
    const imagePath = req.params.path;
    const fullPath = path.join(process.cwd(), 'public', 'images', imagePath);
    if (!fs.existsSync(fullPath)) {
      return res.status(404).json({ message: 'Image not found' });
    }
    fs.unlinkSync(fullPath);
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting image' });
  }
};
export const serveImage = (req, res) => {
  try {
    const imagePath = req.params.path;
    const fullPath = path.join(process.cwd(), 'public', 'images', imagePath);
    if (!fs.existsSync(fullPath)) {
      return res.status(404).json({ message: 'Image not found' });
    }
    res.sendFile(fullPath);
  } catch (error) {
    res.status(500).json({ message: 'Error serving image' });
  }
};
export const serveImage2 = (req, res) => {
  try {
    const imagePath = req.params.path;
    const fullPath = path.join(process.cwd(), 'public', 'images','team', imagePath);
    if (!fs.existsSync(fullPath)) {
      return res.status(404).json({ message: 'Image not found' });
    }
    res.sendFile(fullPath);
  } catch (error) {
    res.status(500).json({ message: 'Error serving image' });
  }
};
