import { motion } from 'framer-motion';

const ApePirateAnimation = () => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Ape Pirate Animation Here */}
            <img src="/path/to/ape-pirate.png" alt="Ape Pirate" />
        </motion.div>
    );
};

const PolicePigAnimation = () => {
    return (
        <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
        >
            {/* Police Pig Animation Here */}
            <img src="/path/to/police-pig.png" alt="Police Pig" />
        </motion.div>
    );
};

const CharacterAnimationController = () => {
    return (
        <div>
            <ApePirateAnimation />
            <PolicePigAnimation />
        </div>
    );
};

export default CharacterAnimationController;