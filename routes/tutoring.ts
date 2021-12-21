import { Router } from "express";

import { getTutorings, getTutoring, createTutoring, updateTutoring, deleteTutoring, likeTutoring, unlikeTutoring } from "../controllers/tutoring";

const router = Router();
import auth from "../middleware/auth";

router.get('/', getTutorings);
router.get('/:id', getTutoring);
router.post('/', createTutoring);
router.put('/:id',updateTutoring)
router.put('/:id'+'/likepost',likeTutoring)
router.put('/:id'+'/unlikepost',unlikeTutoring)
router.delete('/:id',deleteTutoring);

export default router;