import mongoose from 'mongoose';

const siteContentSchema = new mongoose.Schema({
  siteData: { type: Object, required: true },
  aboutPageData: { type: Object, required: true },
  contactPageData: { type: Object, required: true },
  portfolioPageData: { type: Object, required: true },
  careersPageData: { type: Object, required: true },
  leadershipPageData: { type: Object, required: true },
}, { timestamps: true });

const SiteContent = mongoose.model('SiteContent', siteContentSchema);

export default SiteContent;
