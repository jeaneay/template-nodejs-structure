import express from 'express';
import { authRoutes } from './authentication';
import { userRoutes } from './users';
import { permissionRoutes } from './permissions';
import { tagCategoryRoutes } from './tags';
import { offerRoutes } from './offers';
import { companyRoutes } from './companies';
import { forumRoutes } from './forums';
import { courseRoutes } from './courses';
import { blogPostRoutes } from './blogs';
import { addressRoutes } from './address';
import { applicantRoutes } from './applicants';
import { messengerOfferRoutes } from './messenger-offers';
import { betaRoutes } from './beta';
import { airtableRoutes } from './airtable';
import { dashboardRoutes } from './dashboard';
import { adminRoutes } from './admin';

let router: express.Router = express.Router();
router = authRoutes(router);
router = userRoutes(router);
router = permissionRoutes(router);
router = tagCategoryRoutes(router);
router = offerRoutes(router);
router = companyRoutes(router);
router = forumRoutes(router);
router = courseRoutes(router);
router = blogPostRoutes(router);
router = addressRoutes(router);
router = applicantRoutes(router);
router = messengerOfferRoutes(router);
router = betaRoutes(router);
router = airtableRoutes(router);
router = dashboardRoutes(router);
router = adminRoutes(router);

export default router;
