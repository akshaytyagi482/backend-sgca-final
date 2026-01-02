import SiteContent from '../models/SiteContent.js';

export const getContent = async (req, res) => {
  try {
    const content = await SiteContent.findOne();
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const updateContent = async (req, res) => {
  try {
    const updated = await SiteContent.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
